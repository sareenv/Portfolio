# Introduction to Load Balancing

## What is Load Balancing?

Load balancing is the process of distributing network traffic across multiple servers to ensure no single server bears too much load. This improves:

- **Availability**: If one server fails, others handle the traffic
- **Performance**: Requests are spread evenly
- **Scalability**: Easy to add more servers

## Load Balancing Algorithms

### 1. Round Robin
Requests are distributed sequentially across servers.

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A (cycle repeats)
```

**Pros**: Simple, fair distribution
**Cons**: Doesn't account for server capacity or current load

### 2. Weighted Round Robin
Servers with higher capacity get more requests.

```
Server A (weight: 3) → Gets 3 requests
Server B (weight: 1) → Gets 1 request
Server C (weight: 2) → Gets 2 requests
```

### 3. Least Connections
Routes to the server with fewest active connections.

### 4. IP Hash
Uses client IP to consistently route to the same server (useful for session persistence).

### 5. Least Response Time
Routes to the server with the fastest response time.

## Types of Load Balancers

### Layer 4 (Transport Layer)
- Works at TCP/UDP level
- Fast, low overhead
- Can't inspect HTTP content

### Layer 7 (Application Layer)
- Works at HTTP level
- Can route based on URL, headers, cookies
- More flexible but slightly slower

## Health Checks

Load balancers regularly check server health:

```
GET /health HTTP/1.1

Response: 200 OK
{
  "status": "healthy",
  "uptime": 99.9
}
```

## Popular Load Balancers

- **NGINX**: Popular for web applications
- **HAProxy**: High-performance TCP/HTTP load balancer
- **AWS ELB**: Cloud-native solution
- **Cloudflare**: CDN with load balancing

## Key Takeaways

- Load balancing is essential for scalable systems
- Choose algorithm based on your use case
- Always implement health checks
- Consider both L4 and L7 options
