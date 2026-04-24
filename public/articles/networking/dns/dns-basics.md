# DNS Basics: From Domain to IP

## What is DNS?

The Domain Name System (DNS) is often called the "phonebook of the internet." It's a hierarchical, distributed database that translates human-readable domain names like www.sareenv.com into IP addresses like 192.168.1.1 that computers use to identify each other on the network.

## Why Do We Need DNS?

Imagine having to remember 172.217.14.206 every time you wanted to visit Google. DNS makes the internet user-friendly by allowing us to use memorable names instead of numerical addresses.

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

```
User → Browser Cache → OS Cache → Recursive Resolver → Root Server → TLD Server → Authoritative Server
```

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
