# Server-Sent Events in SwiftUI with async/await

## What is SSE?

Server-Sent Events (SSE) is a simple protocol based on HTTP. It lets a server send a continuous stream of text events to a client over one long connection. The client opens a normal HTTP request with `Accept: text/event-stream`. The server keeps the response open and writes events when they happen.

## Why Use SSE?

Many apps only need data to go one way: from the server to the client. Live scores, progress updates, notifications, and AI token streaming are common examples. SSE works well for these cases:

- It runs over plain HTTP, so it works with your existing proxies, authentication, and load balancers.
- It is text-based, so it is easy to debug with `curl`.
- It needs no extra library on Apple platforms. `URLSession` can stream the response body directly.

SSE only works in one direction, unlike WebSockets, but it is much simpler.

## The Wire Format

An SSE response is a stream of UTF-8 lines. Each event is made of `field: value` lines and ends with a blank line:

```
data: first event

data: second event
data: still the second event

event: custom
data: {"id": 3}

```

The common fields are `data`, `event`, `id`, and `retry`.

## Architecture Overview

The implementation has a Go server and three Swift layers on the client:

```
Go Server  →  SSEClient  →  EventStreamViewModel  →  EventStreamView
(Gin)         (network)     (state + task)           (UI)
```

| Type | Responsibility |
|------|----------------|
| `SSEError` | Describes what can go wrong when connecting |
| `SSEClient` | Opens the HTTP connection and gives the stream as lines |
| `EventStreamViewModel` | Owns the listening `Task` and the received lines |
| `EventStreamView` | Shows the lines and has the start/stop controls |

## Step 1: Define Errors

```swift
enum SSEError: Error {
    case invalidURL
    case invalidResponse(response: String)
}
```

There are two kinds of failure. The URL string cannot be parsed, or the server answers with something other than `200 OK`.

## Step 2: The SSE Client

```swift
final class SSEClient {
    
    private let endpointURLString: String = "http://localhost:8080/stream"
    
    private let session: URLSession = {
        let config = URLSessionConfiguration.default
        config.timeoutIntervalForRequest = .infinity
        config.timeoutIntervalForResource = .infinity
        return URLSession(configuration: config)
    }()
    
    func connect() async throws -> AsyncLineSequence<URLSession.AsyncBytes> {
        guard let endpointURL = URL(string: endpointURLString) else { throw SSEError.invalidURL }
        var request = URLRequest(url: endpointURL)
        request.setValue("text/event-stream", forHTTPHeaderField: "Accept")
        let (bytes, response) = try await URLSession.shared.bytes(for: request)
        if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200  {
            return bytes.lines
        } else {
            throw SSEError.invalidResponse(response: response.debugDescription)
        }
    }
}
```

### How it works

1. **Build the request.** The code checks the URL. Then the `Accept: text/event-stream` header tells the server that we want an event stream.
2. **Stream the body.** `URLSession.bytes(for:)` returns as soon as the headers arrive. It gives you an `AsyncBytes` sequence and the `URLResponse`. The body is not buffered, so it can stay open forever.
3. **Check the status.** Only a `200` response is accepted. Any other status throws `SSEError.invalidResponse`.
4. **Return lines.** `bytes.lines` wraps the byte stream in an `AsyncLineSequence`. The caller can then use `for try await` to read each line as it arrives.

### Timeouts

A long-lived stream would reach the default request timeout (60 seconds without activity). So the code creates its own `URLSession` with `.infinity` timeouts:

```swift
config.timeoutIntervalForRequest = .infinity
config.timeoutIntervalForResource = .infinity
```

> **Note:** In the current code, `connect()` calls `URLSession.shared.bytes(for:)`, not the custom `session` property. This means the infinite-timeout setup is never used. Change it to `session.bytes(for: request)` so the timeouts work.

## Step 3: The View Model

```swift
@Observable
final class EventStreamViewModel {
    
    /// Raw lines received from the server, in arrival order.
    private(set) var eventLines: [String] = []
    
    private(set) var streamingTask: Task<Void, Never>?
    
    func startListening() {
        streamingTask = Task {
            do {
                let lineStream = try await SSEClient().connect()
                for try await line in lineStream {
                    eventLines.append(line)
                }
            } catch is CancellationError {
                print("SSE cancelled")
                return
            } catch {
                print("SSE error:", error)
            }
        }
    }
    
    func stopListening() {
        streamingTask?.cancel()
        streamingTask = nil
    }
}
```

### How it works

- **`@Observable`** (from the Observation framework) makes `eventLines` update SwiftUI automatically. You do not need `@Published`.
- **`streamingTask`** keeps the unstructured `Task` that runs the stream, so you can cancel it later.
- **`startListening()`** connects, then loops over each incoming line and adds it to `eventLines`.
- **`stopListening()`** cancels the task. Cancelling stops the `for try await` loop and closes the underlying request.
- The two `catch` blocks separate an expected cancellation from a real failure.

### Things to watch

- **Main-actor isolation.** SwiftUI reads `eventLines`, so you should change it on the main actor. Marking the class `@MainActor` guarantees this, unless your project already uses main-actor isolation by default.
- **Duplicate connections.** If you call `startListening()` twice (for example, from the play button after `onAppear`), it starts a second stream and replaces `streamingTask`. Consider cancelling the existing task first.
- **Empty lines.** `AsyncLineSequence` leaves out empty lines, so you cannot see the event boundaries (the blank lines in the SSE format). Each element is a raw line such as `data: hello`.

## Step 4: The SwiftUI View

```swift
struct EventStreamView: View {
    
    @State private var viewModel: EventStreamViewModel
    
    init(viewModel: EventStreamViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        List(viewModel.eventLines, id: \.self) { eventLine in
            Text(eventLine)
        }
        .onDisappear {
            viewModel.stopListening()
        }
        .toolbar(content: {
            ToolbarItemGroup {
                Button {
                    viewModel.startListening()
                } label: {
                    Image(systemName: "play.fill")
                }
                
                Button(role: .destructive) {
                    viewModel.stopListening()
                } label: {
                    Image(systemName: "stop.fill")
                }
            }
        })
        .onAppear {
            viewModel.startListening()
        }
    }
}
```

### How it works

- **`@State` with an `@Observable` model** is the modern replacement for `@StateObject`. The view owns the life of the model.
- **`List(viewModel.eventLines, id: \.self)`** shows one row for each line. Using `\.self` as the ID means that duplicate lines will clash. For real data, a model with a unique `id` is safer.
- **Lifecycle.** `onAppear` starts the stream and `onDisappear` cancels it. This way, no connection is left open when the user leaves the screen.
- **Manual controls.** The toolbar has play and stop buttons that call `startListening()` and `stopListening()`.

## The Server (Go)

The client in this article talks to a small Go server built with [Gin](https://github.com/gin-gonic/gin). It sends a number every two seconds until the client disconnects.

```go
package main

// essentials of SSE --> server sent events.

import (
	"fmt"
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func EventHandler(c *gin.Context) {
	// This is the most important part.
	// Typically a server returns Content-Type: application/json,
	// or text/html for a web page.
	// text/event-stream tells the client this is a stream of data.
	c.Header("Content-Type", "text/event-stream")

	// Tells caches like CDNs, browsers or proxy servers not to cache this response.
	c.Header("Cache-Control", "no-cache")

	// Keep the connection open so the server can stream data to the client.
	c.Header("Connection", "keep-alive")

	ticker := time.NewTicker(2 * time.Second)
	defer ticker.Stop()

	counter := 1
	for {
		select {
		case <-ticker.C:
			fmt.Fprintf(c.Writer, "data: %d\n\n", counter)

			// Sends the buffered response from the server to the client.
			c.Writer.Flush()
			counter++
		case <-c.Request.Context().Done():
			log.Println("context done")
			return
		}
	}
}

func HealthHandler(c *gin.Context) {
	c.JSON(200, gin.H{
		"health": "healthy",
		"status": "success",
	})
}

func main() {
	router := gin.Default()
	router.GET("/", HealthHandler)
	router.GET("/stream", EventHandler)
	router.Run(":8080")
}
```

### How it works

1. **Headers define the stream.** `Content-Type: text/event-stream` marks the response as SSE. `Cache-Control: no-cache` stops other systems on the way from caching it, and `Connection: keep-alive` keeps the connection open.
2. **A ticker drives the events.** `time.NewTicker(2 * time.Second)` fires every two seconds. `defer ticker.Stop()` releases it when the handler returns.
3. **Each event follows the wire format.** `fmt.Fprintf(c.Writer, "data: %d\n\n", counter)` writes a `data:` line followed by a blank line, which ends the event.
4. **`Flush()` sends it immediately.** Without it, the event may stay in the server's buffer, and the client would not see it in real time.
5. **Disconnects end the loop.** `c.Request.Context().Done()` closes when the client leaves (for example, when the Swift task is cancelled). The handler then returns, so it does not leak a goroutine.

The `/` route is a plain JSON health check. It is useful to confirm that the server is running before you open the stream.

### Running it

```bash
go mod init sse-server
go get github.com/gin-gonic/gin
go run .
```

The server listens on port `8080`, which matches `endpointURLString` in `SSEClient`.

## Testing It Locally

Start the Go server above, then check the stream with curl:

```bash
curl -N -H "Accept: text/event-stream" http://localhost:8080/stream
```

Expected output, one event every two seconds:

```
data: 1

data: 2

data: 3
```

Then run the app. Each event appears in the list as a `data: N` line.

The URL uses plain `http`, so the app needs an App Transport Security exception for `localhost` (or you can use HTTPS). On a physical device, local-network addresses also need extra permissions.

## Possible Improvements

- Use the custom `session` so the infinite timeouts work.
- Parse lines into a typed `SSEEvent` (`event`, `data`, `id`).
- Pass in the URL instead of writing it directly in the code.
- Add reconnection with backoff, and send `Last-Event-ID` when you reconnect.
- Show errors in the UI instead of using `print`.

## Key Takeaways

- SSE is a simple way, based on HTTP, to stream server events to a client.
- On the server, you only need the `text/event-stream` header, a `data:` line plus a blank line for each event, and `Flush()`.
- `URLSession.bytes(for:)` and `.lines` turn a streaming response into an `AsyncSequence`.
- A `Task` that you can cancel connects the life of the stream to the life of the view.
- `@Observable` keeps the UI in sync as new events arrive.
- Check which `URLSession` you really use, and where you change state (main actor).
