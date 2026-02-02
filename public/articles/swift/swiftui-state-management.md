# State Management in SwiftUI

## Introduction

SwiftUI uses a declarative approach where the UI is a function of state. When state changes, SwiftUI automatically updates the views that depend on it. Understanding property wrappers is essential for building reactive SwiftUI applications.

## Property Wrappers Overview

| Wrapper | Use Case | Ownership |
|---------|----------|-----------|
| @State | Local view state | View owns it |
| @Binding | Two-way connection | Parent owns it |
| @ObservedObject | External observable | External ownership |
| @StateObject | Owned observable | View owns it |
| @EnvironmentObject | Shared across views | Environment owns it |
| @Environment | System values | System owns it |

## @State

For simple, local state within a single view:

```swift
struct CounterView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \(count)")
            Button("Increment") {
                count += 1
            }
        }
    }
}
```

**Key Points:**
- Always mark `@State` properties as `private`
- Best for simple value types (Int, String, Bool)
- SwiftUI manages the storage

## @Binding

For passing state to child views with two-way data flow:

```swift
struct ParentView: View {
    @State private var isOn = false
    
    var body: some View {
        ToggleView(isOn: $isOn)
    }
}

struct ToggleView: View {
    @Binding var isOn: Bool
    
    var body: some View {
        Toggle("Toggle", isOn: $isOn)
    }
}
```

**Key Points:**
- Use `$` to pass a binding from @State
- Child can read and write the value
- Changes propagate back to parent

## @StateObject

For observable objects that the view creates and owns:

```swift
class UserViewModel: ObservableObject {
    @Published var name = ""
    @Published var email = ""
    
    func save() {
        // Save logic
    }
}

struct ProfileView: View {
    @StateObject private var viewModel = UserViewModel()
    
    var body: some View {
        Form {
            TextField("Name", text: $viewModel.name)
            TextField("Email", text: $viewModel.email)
            Button("Save", action: viewModel.save)
        }
    }
}
```

**Key Points:**
- Object is created once and persists across view updates
- Use when the view is the source of truth
- Survives view re-renders

## @ObservedObject

For observable objects passed from a parent view:

```swift
struct ChildView: View {
    @ObservedObject var viewModel: UserViewModel
    
    var body: some View {
        Text("Hello, \(viewModel.name)")
    }
}

struct ParentView: View {
    @StateObject private var viewModel = UserViewModel()
    
    var body: some View {
        ChildView(viewModel: viewModel)
    }
}
```

**Key Points:**
- Object is created elsewhere
- View observes but doesn't own
- Can be recreated on parent re-render

## @EnvironmentObject

For sharing data across many views without passing explicitly:

```swift
class AppState: ObservableObject {
    @Published var isLoggedIn = false
    @Published var user: User?
}

@main
struct MyApp: App {
    @StateObject private var appState = AppState()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
        }
    }
}

struct SomeDeepView: View {
    @EnvironmentObject var appState: AppState
    
    var body: some View {
        if appState.isLoggedIn {
            Text("Welcome!")
        }
    }
}
```

**Key Points:**
- Inject at a high level, access anywhere below
- Crashes if not provided in ancestor
- Great for app-wide state

## @Environment

For reading system-provided values:

```swift
struct AdaptiveView: View {
    @Environment(\.colorScheme) var colorScheme
    @Environment(\.horizontalSizeClass) var sizeClass
    
    var body: some View {
        Text("Theme: \(colorScheme == .dark ? "Dark" : "Light")")
    }
}
```

Common environment values:
- `\.colorScheme` - Light or dark mode
- `\.locale` - User's locale
- `\.horizontalSizeClass` - Compact or regular
- `\.dismiss` - Dismiss action

## Choosing the Right Wrapper

```
Is it a simple value type (Int, String, Bool)?
├── Yes → @State (if view owns) or @Binding (if parent owns)
└── No (it's a class/ObservableObject)
    ├── Does this view create it?
    │   └── Yes → @StateObject
    └── No
        ├── Is it passed explicitly?
        │   └── Yes → @ObservedObject
        └── Is it shared across many views?
            └── Yes → @EnvironmentObject
```

## Common Patterns

### View Model Pattern

```swift
class SearchViewModel: ObservableObject {
    @Published var query = ""
    @Published var results: [Item] = []
    
    func search() {
        // Perform search
    }
}

struct SearchView: View {
    @StateObject private var viewModel = SearchViewModel()
    
    var body: some View {
        VStack {
            TextField("Search", text: $viewModel.query)
            List(viewModel.results) { item in
                Text(item.name)
            }
        }
        .onChange(of: viewModel.query) { _ in
            viewModel.search()
        }
    }
}
```

### Derived State

```swift
struct ShoppingCart: View {
    @State private var items: [Item] = []
    
    var total: Double {
        items.reduce(0) { $0 + $1.price }
    }
    
    var body: some View {
        Text("Total: $\(total, specifier: "%.2f")")
    }
}
```

## Key Takeaways

- Use `@State` for simple, local view state
- Use `@StateObject` when creating an observable object
- Use `@ObservedObject` when receiving an observable object
- Use `@Binding` for two-way data flow to child views
- Use `@EnvironmentObject` for app-wide shared state
- The view that creates the object should use `@StateObject`
