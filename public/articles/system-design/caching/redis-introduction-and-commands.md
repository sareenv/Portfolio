# Redis Introduction and Essential Commands

Redis is an in-memory key-value data store commonly used as a cache, session store, rate limiter, queue, and lightweight real-time data layer. It stores data by key, so the most important habit is choosing clear, meaningful key names and setting expiration rules for data that should not live forever.

Redis supports several data structures:

- **Strings**: Basic key-value pairs
- **Lists**: Ordered collections of values
- **Hashes**: Field-value maps stored under one key
- **Sets**: Unique unordered values
- **Sorted sets**: Unique values ordered by score

## Installing and Connecting

On Ubuntu, install and start Redis with:

```bash
sudo apt install redis-server
sudo systemctl enable redis-server
sudo systemctl start redis-server
sudo systemctl status redis-server
```

Connect with the Redis CLI and test the server:

```bash
redis-cli ping
# PONG
```

Useful server information commands:

```bash
redis-cli info server
redis-cli info clients
```

## Basic Key Commands

| Command | Purpose |
|---------|---------|
| `SET name Vinayak` | Stores a value for a key |
| `GET name` | Reads the value stored at a key |
| `DEL key1 key2` | Deletes one or more keys synchronously |
| `UNLINK key1 key2` | Deletes one or more keys asynchronously, which is safer for large keys |
| `EXISTS name` | Returns `1` if the key exists, otherwise `0` |
| `TYPE name` | Shows the Redis data type stored at a key |

Example:

```bash
SET language swift
GET language
# "swift"

RENAME language primary-language
GET primary-language
# "swift"

RENAMENX primary-language favorite-language
```

Use `RENAMENX` when you only want to rename a key if the destination key does not already exist.

## Expiration and TTL Commands

Redis keys can expire automatically, which is one of the main reasons Redis works well as a cache.

```bash
SETEX session:123 120 active
TTL session:123

EXPIRE session:123 300
TTL session:123

PSETEX otp:123 10000 valid
PTTL otp:123

PERSIST session:123
```

| Command | Purpose |
|---------|---------|
| `SETEX key seconds value` | Sets a key with an expiration in seconds |
| `TTL key` | Shows the remaining time to live in seconds |
| `EXPIRE key seconds` | Adds or updates expiration for an existing key |
| `PSETEX key milliseconds value` | Sets a key with an expiration in milliseconds |
| `PTTL key` | Shows the remaining time to live in milliseconds |
| `PERSIST key` | Removes the expiration and keeps the key permanently |

## Key Naming and Lookup

Good Redis keys are descriptive and structured:

```bash
user:123:profile
session:abc123
cache:article:caching-patterns
```

Avoid very short or unclear names such as `a` or `x1`, especially in shared environments. Redis allows large keys, but meaningful, consistent names make debugging and maintenance easier.

Redis supports pattern matching:

```bash
KEYS user:*
KEYS h?llo
KEYS h[ae]llo
```

Be careful with `KEYS` in production because it can block Redis while scanning the keyspace. Prefer `SCAN` for safer incremental iteration:

```bash
SCAN 0 MATCH user:* COUNT 100
```

## Shutdown Commands

Redis can shut down with or without saving data:

```bash
SHUTDOWN SAVE
SHUTDOWN NOSAVE
```

Use `SHUTDOWN SAVE` when you want Redis to persist data to disk before stopping. Use `SHUTDOWN NOSAVE` only when it is acceptable to stop without saving the latest in-memory data.
