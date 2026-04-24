# The TCP Three-Way Handshake

## Introduction

TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission. Before any data can be sent, TCP establishes a connection using a process called the "three-way handshake."

## The Three Steps

### Step 1: SYN (Synchronize)
The client sends a SYN packet to the server with an initial sequence number (ISN).

```
Client → Server: SYN, Seq=100
```

### Step 2: SYN-ACK (Synchronize-Acknowledge)
The server responds with its own SYN and acknowledges the client's sequence number.

```
Server → Client: SYN-ACK, Seq=300, Ack=101
```

### Step 3: ACK (Acknowledge)
The client acknowledges the server's sequence number, completing the handshake.

```
Client → Server: ACK, Seq=101, Ack=301
```

## Visual Representation

```
    Client                Server
       |                     |
       |-------- SYN ------->|
       |                     |
       |<----- SYN-ACK ------|
       |                     |
       |-------- ACK ------->|
       |                     |
       |   Connection Open   |
```

## Why Three Steps?

1. **Bidirectional communication**: Both parties confirm they can send and receive
2. **Sequence number synchronization**: Both sides know where to start counting
3. **Prevent old connection confusion**: Ensures fresh connections

## Connection Termination (Four-Way Handshake)

Closing is more complex because connections are full-duplex:

```
Client → Server: FIN
Server → Client: ACK
Server → Client: FIN
Client → Server: ACK
```

## Key Takeaways

- The handshake ensures reliable, ordered connections
- Sequence numbers prevent data confusion
- Understanding TCP helps debug network issues
