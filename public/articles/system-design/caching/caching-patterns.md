# Common Caching Patterns

## Why Cache?

Caching reduces latency and load by storing frequently accessed data closer to where it's needed. A well-designed cache can:

- Reduce database load by 90%+
- Improve response times from seconds to milliseconds
- Handle traffic spikes gracefully

## Caching Patterns

### 1. Cache-Aside (Lazy Loading)

Application manages the cache directly:

```javascript
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
```

**Pros**: Only requested data is cached
**Cons**: Cache misses are slow, potential for stale data

### 2. Write-Through

Data is written to cache and database simultaneously:

```javascript
async function saveData(key, value) {
  await cache.set(key, value);
  await database.set(key, value);
}
```

**Pros**: Cache is always consistent
**Cons**: Higher write latency

### 3. Write-Behind (Write-Back)

Data is written to cache immediately, database asynchronously:

```javascript
async function saveData(key, value) {
  await cache.set(key, value);
  queue.push({ key, value }); // Async write to DB
}
```

**Pros**: Fast writes
**Cons**: Risk of data loss if cache fails

### 4. Read-Through

Cache handles fetching from database on miss:

```
Application → Cache (miss) → Database
                ↓
           Updates itself
```

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
