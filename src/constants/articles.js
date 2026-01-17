/**
 * Articles Data Structure
 * Organized as: Topic > Concepts > Articles
 * 
 * Structure:
 * - topic: Main category (e.g., Networking, System Design)
 * - concepts: Sub-categories within a topic
 * - articles: Individual articles within a concept
 */

export const articlesData = [
    {
        id: 'networking',
        topic: 'Networking',
        icon: '🌐',
        description: 'Understanding how computer networks work, from DNS to TCP/IP',
        concepts: [
            {
                id: 'dns',
                name: 'How DNS Works',
                description: 'Domain Name System fundamentals and resolution process',
                articles: [
                    {
                        id: 'dns-basics',
                        title: 'DNS Basics: From Domain to IP',
                        slug: 'dns-basics',
                        summary: 'Learn how DNS translates human-readable domain names into IP addresses.',
                        readTime: '8 min read',
                        date: '2024-12-15',
                        tags: ['DNS', 'Networking', 'Fundamentals'],
                        content: `
# DNS Basics: From Domain to IP

## What is DNS?

The Domain Name System (DNS) is often called the "phonebook of the internet." It's a hierarchical, distributed database that translates human-readable domain names like www.sareenv.com into IP addresses like 192.168.1.1 that computers use to identify each other on the network.

## Why Do We Need DNS?

Imagine having to remember \`172.217.14.206\` every time you wanted to visit Google. DNS makes the internet user-friendly by allowing us to use memorable names instead of numerical addresses.

## How DNS Resolution Works

When you type a URL in your browser, here's what happens:

### 1. Browser Cache Check
Your browser first checks its local cache to see if it has recently resolved this domain.

### 2. Operating System Cache
If not found, the request goes to the OS resolver cache.

### 3. Recursive DNS Resolver
The query is sent to a recursive resolver (usually provided by your ISP or a public DNS service like 8.8.8.8).

### 4. Root Name Servers
The resolver queries a root name server, which directs it to the appropriate TLD server.

### 5. TLD Name Servers
The Top-Level Domain server (like .com, .org) points to the authoritative name server.

### 6. Authoritative Name Server
This server has the actual DNS record and returns the IP address.

\`\`\`
User → Browser Cache → OS Cache → Recursive Resolver → Root Server → TLD Server → Authoritative Server
\`\`\`

## DNS Record Types

| Type | Purpose | Example |
|------|---------|---------|
| A | Maps domain to IPv4 | example.com → 93.184.216.34 |
| AAAA | Maps domain to IPv6 | example.com → 2606:2800:220:1:... |
| CNAME | Alias for another domain | www.example.com → example.com |
| MX | Mail server records | example.com → mail.example.com |
| TXT | Text records (SPF, DKIM) | Various verification records |

## Key Takeaways

- DNS is essential for making the internet navigable
- Resolution happens in milliseconds through a hierarchical system
- Caching at multiple levels improves performance
- Understanding DNS helps with debugging network issues
                        `
                    },
                    {
                        id: 'dns-caching',
                        title: 'DNS Caching and TTL',
                        slug: 'dns-caching',
                        summary: 'Understand how DNS caching works and the role of Time-To-Live values.',
                        readTime: '6 min read',
                        date: '2024-12-20',
                        tags: ['DNS', 'Caching', 'Performance'],
                        content: `
# DNS Caching and TTL

## What is DNS Caching?

DNS caching is a mechanism that stores DNS query results temporarily to speed up subsequent requests. Instead of going through the entire resolution process every time, cached results can be returned immediately.

## Levels of DNS Caching

### 1. Browser Cache
Modern browsers maintain their own DNS cache. Chrome, for example, caches DNS results for about 60 seconds by default.

### 2. Operating System Cache
Your OS maintains a DNS cache that serves all applications. On macOS, you can view it with:
\`\`\`bash
sudo dscacheutil -cachedump
\`\`\`

### 3. Router Cache
Home routers often cache DNS responses to reduce external queries.

### 4. ISP Recursive Resolver Cache
Your ISP's DNS servers cache results for all their customers.

## Understanding TTL (Time-To-Live)

TTL is a value in a DNS record that specifies how long a resolver should cache the query before requesting a new one.

\`\`\`
example.com.    300    IN    A    93.184.216.34
                 ↑
                TTL (300 seconds = 5 minutes)
\`\`\`

## TTL Best Practices

| Scenario | Recommended TTL |
|----------|-----------------|
| Stable websites | 24-48 hours |
| Before DNS changes | 5-15 minutes |
| Load-balanced services | 1-5 minutes |
| Failover scenarios | 30-60 seconds |

## Flushing DNS Cache

Sometimes you need to clear your DNS cache:

**macOS:**
\`\`\`bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
\`\`\`

**Windows:**
\`\`\`cmd
ipconfig /flushdns
\`\`\`

**Linux:**
\`\`\`bash
sudo systemd-resolve --flush-caches
\`\`\`
                        `
                    }
                ]
            },
            {
                id: 'tcp-ip',
                name: 'TCP/IP Protocol',
                description: 'The foundational protocol suite of the internet',
                articles: [
                    {
                        id: 'tcp-handshake',
                        title: 'The TCP Three-Way Handshake',
                        slug: 'tcp-handshake',
                        summary: 'Deep dive into how TCP connections are established.',
                        readTime: '7 min read',
                        date: '2024-12-25',
                        tags: ['TCP', 'Networking', 'Protocols'],
                        content: `
# The TCP Three-Way Handshake

## Introduction

TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission. Before any data can be sent, TCP establishes a connection using a process called the "three-way handshake."

## The Three Steps

### Step 1: SYN (Synchronize)
The client sends a SYN packet to the server with an initial sequence number (ISN).

\`\`\`
Client → Server: SYN, Seq=100
\`\`\`

### Step 2: SYN-ACK (Synchronize-Acknowledge)
The server responds with its own SYN and acknowledges the client's sequence number.

\`\`\`
Server → Client: SYN-ACK, Seq=300, Ack=101
\`\`\`

### Step 3: ACK (Acknowledge)
The client acknowledges the server's sequence number, completing the handshake.

\`\`\`
Client → Server: ACK, Seq=101, Ack=301
\`\`\`

## Visual Representation

\`\`\`
    Client                Server
       |                     |
       |-------- SYN ------->|
       |                     |
       |<----- SYN-ACK ------|
       |                     |
       |-------- ACK ------->|
       |                     |
       |   Connection Open   |
\`\`\`

## Why Three Steps?

1. **Bidirectional communication**: Both parties confirm they can send and receive
2. **Sequence number synchronization**: Both sides know where to start counting
3. **Prevent old connection confusion**: Ensures fresh connections

## Connection Termination (Four-Way Handshake)

Closing is more complex because connections are full-duplex:

\`\`\`
Client → Server: FIN
Server → Client: ACK
Server → Client: FIN
Client → Server: ACK
\`\`\`

## Key Takeaways

- The handshake ensures reliable, ordered connections
- Sequence numbers prevent data confusion
- Understanding TCP helps debug network issues
                        `
                    }
                ]
            }
        ]
    },
    {
        id: 'system-design',
        topic: 'System Design',
        icon: '🏗️',
        description: 'Principles and patterns for building scalable systems',
        concepts: [
            {
                id: 'load-balancing',
                name: 'Load Balancing',
                description: 'Distributing traffic across multiple servers',
                articles: [
                    {
                        id: 'load-balancing-intro',
                        title: 'Introduction to Load Balancing',
                        slug: 'load-balancing-intro',
                        summary: 'Learn the fundamentals of load balancing and common algorithms.',
                        readTime: '10 min read',
                        date: '2024-12-28',
                        tags: ['System Design', 'Load Balancing', 'Scalability'],
                        content: `
# Introduction to Load Balancing

## What is Load Balancing?

Load balancing is the process of distributing network traffic across multiple servers to ensure no single server bears too much load. This improves:

- **Availability**: If one server fails, others handle the traffic
- **Performance**: Requests are spread evenly
- **Scalability**: Easy to add more servers

## Load Balancing Algorithms

### 1. Round Robin
Requests are distributed sequentially across servers.

\`\`\`
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A (cycle repeats)
\`\`\`

**Pros**: Simple, fair distribution
**Cons**: Doesn't account for server capacity or current load

### 2. Weighted Round Robin
Servers with higher capacity get more requests.

\`\`\`
Server A (weight: 3) → Gets 3 requests
Server B (weight: 1) → Gets 1 request
Server C (weight: 2) → Gets 2 requests
\`\`\`

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

\`\`\`
GET /health HTTP/1.1

Response: 200 OK
{
  "status": "healthy",
  "uptime": 99.9
}
\`\`\`

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
                        `
                    }
                ]
            },
            {
                id: 'caching',
                name: 'Caching Strategies',
                description: 'Improving performance through intelligent caching',
                articles: [
                    {
                        id: 'caching-patterns',
                        title: 'Common Caching Patterns',
                        slug: 'caching-patterns',
                        summary: 'Explore different caching strategies and when to use them.',
                        readTime: '9 min read',
                        date: '2024-12-30',
                        tags: ['Caching', 'Performance', 'System Design'],
                        content: `
# Common Caching Patterns

## Why Cache?

Caching reduces latency and load by storing frequently accessed data closer to where it's needed. A well-designed cache can:

- Reduce database load by 90%+
- Improve response times from seconds to milliseconds
- Handle traffic spikes gracefully

## Caching Patterns

### 1. Cache-Aside (Lazy Loading)

Application manages the cache directly:

\`\`\`javascript
async function getData(key) {
  // Try cache first
  let data = await cache.get(key);
  
  if (!data) {
    // Cache miss - fetch from database
    data = await database.get(key);
    // Store in cache for future requests
    await cache.set(key, data, TTL);
  }
  
  return data;
}
\`\`\`

**Pros**: Only requested data is cached
**Cons**: Cache misses are slow, potential for stale data

### 2. Write-Through

Data is written to cache and database simultaneously:

\`\`\`javascript
async function saveData(key, value) {
  await cache.set(key, value);
  await database.set(key, value);
}
\`\`\`

**Pros**: Cache is always consistent
**Cons**: Higher write latency

### 3. Write-Behind (Write-Back)

Data is written to cache immediately, database asynchronously:

\`\`\`javascript
async function saveData(key, value) {
  await cache.set(key, value);
  queue.push({ key, value }); // Async write to DB
}
\`\`\`

**Pros**: Fast writes
**Cons**: Risk of data loss if cache fails

### 4. Read-Through

Cache handles fetching from database on miss:

\`\`\`
Application → Cache (miss) → Database
                ↓
           Updates itself
\`\`\`

## Cache Eviction Policies

| Policy | Description | Use Case |
|--------|-------------|----------|
| LRU | Least Recently Used | General purpose |
| LFU | Least Frequently Used | Popular content |
| FIFO | First In, First Out | Simple scenarios |
| TTL | Time-based expiration | Time-sensitive data |

## Best Practices

1. **Set appropriate TTLs**: Balance freshness vs. performance
2. **Use cache tags**: For bulk invalidation
3. **Monitor hit rates**: Aim for 90%+
4. **Plan for cache failures**: Have fallback strategies

## Key Takeaways

- Choose the pattern that fits your read/write ratio
- Always plan for cache invalidation
- Monitor and tune cache performance
                        `
                    }
                ]
            }
        ]
    },
    
];

// Helper function to get all articles flattened
export const getAllArticles = () => {
    const articles = [];
    articlesData.forEach(topic => {
        topic.concepts.forEach(concept => {
            concept.articles.forEach(article => {
                articles.push({
                    ...article,
                    topicId: topic.id,
                    topicName: topic.topic,
                    topicIcon: topic.icon,
                    conceptId: concept.id,
                    conceptName: concept.name
                });
            });
        });
    });
    return articles;
};

// Helper function to find an article by slug
export const getArticleBySlug = (slug) => {
    return getAllArticles().find(article => article.slug === slug);
};

// Helper function to get topic by id
export const getTopicById = (topicId) => {
    return articlesData.find(topic => topic.id === topicId);
};

// Helper function to get concept by id within a topic
export const getConceptById = (topicId, conceptId) => {
    const topic = getTopicById(topicId);
    if (!topic) return null;
    return topic.concepts.find(concept => concept.id === conceptId);
};
