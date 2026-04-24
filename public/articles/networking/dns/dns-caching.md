# DNS Caching and TTL

## What is DNS Caching?

DNS caching is a mechanism that stores DNS query results temporarily to speed up subsequent requests. Instead of going through the entire resolution process every time, cached results can be returned immediately.

## Levels of DNS Caching

### 1. Browser Cache
Modern browsers maintain their own DNS cache. Chrome, for example, caches DNS results for about 60 seconds by default.

### 2. Operating System Cache
Your OS maintains a DNS cache that serves all applications. On macOS, you can view it with:
```bash
sudo dscacheutil -cachedump
```

### 3. Router Cache
Home routers often cache DNS responses to reduce external queries.

### 4. ISP Recursive Resolver Cache
Your ISP's DNS servers cache results for all their customers.

## Understanding TTL (Time-To-Live)

TTL is a value in a DNS record that specifies how long a resolver should cache the query before requesting a new one.

```
example.com.    300    IN    A    93.184.216.34
                 ↑
                TTL (300 seconds = 5 minutes)
```

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
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Windows:**
```cmd
ipconfig /flushdns
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
```
