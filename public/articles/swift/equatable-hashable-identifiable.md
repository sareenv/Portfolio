# Core Swift Protocols: Equatable, Hashable, and Identifiable

In Swift's type system, writing safe, expressive, and performant code relies heavily on standard library protocols. Three of the most foundational protocols you encounter every day are **`Equatable`**, **`Hashable`**, and **`Identifiable`**.

While they might appear straightforward on the surface, each serves a distinct architectural purpose:
- **`Equatable`** defines **value equivalence** (are these two values logically identical?).
- **`Hashable`** enables **fast lookups** by mapping an instance to an integer hash value (essential for `Set` and `Dictionary`).
- **`Identifiable`** establishes **entity identity** (does this instance represent the same unique entity across time and state transitions, even when its properties change?).

Understanding how they work individually, how they inherit from one another, and how the Swift compiler automates their implementation will make your models cleaner and your SwiftUI views significantly more efficient.

---

## 1. Equatable: Value Equivalence

The `Equatable` protocol allows instances of a type to be compared for value equality using the `==` and `!=` operators.

### The Protocol Contract

```swift
public protocol Equatable {
    static func == (lhs: Self, rhs: Self) -> Bool
}
```

When two instances are compared using `lhs == rhs`, Swift invokes this static function and returns `true` if the two instances represent the exact same logical value.

### Playground Example: Custom Equality

Let's start with a foundational example featuring a `Country` enum and a `User` struct:

```swift
import Foundation

enum Country: String {
    case UK
    case USA
    case Canada
    case Japan
    case China
    case India
}

// Conforming to Equatable to determine if two User objects are equal
struct User: Equatable {
    let name: String
    let age: Int
    let residency: Country
    
    // Explicit implementation of the Equatable contract
    static func == (lhs: User, rhs: User) -> Bool {
        lhs.name == rhs.name &&
        lhs.age == rhs.age &&
        lhs.residency.rawValue == rhs.residency.rawValue
    }
}

let john = User(name: "John", age: 29, residency: .Canada)
let jenny = User(name: "Jenny", age: 29, residency: .Canada)
let anotherJohn = User(name: "John", age: 29, residency: .Canada)

print(john == jenny)        // false
print(john == anotherJohn)  // true
```

### Compiler Synthesis: Automatic Equatable

In Swift, you rarely need to write the `static func ==` implementation by hand. The Swift compiler will **automatically synthesize** conformance to `Equatable` for:
1. **Structs**: If all stored properties already conform to `Equatable`.
2. **Enums**: If all associated values (if any) conform to `Equatable`. (Enums with no associated values conform automatically without explicit declaration).

Because `String`, `Int`, and our `Country` enum (backed by `String`) all conform to `Equatable`, the `User` struct could simply be written as:

```swift
struct User: Equatable {
    let name: String
    let age: Int
    let residency: Country
    // The compiler automatically generates the memberwise '==' function!
}
```

### When Should You Implement `==` Manually?
1. **Ignoring cached or transient state**: If a struct contains temporary flags (e.g. `var isDownloading: Bool`, cached calculations, or image cache references) that should not affect logical equivalence.
2. **Case-insensitive or normalized comparisons**: When comparing strings or tokens that should match regardless of casing or formatting.
3. **Reference types (`class`)**: The compiler **never** synthesizes `Equatable` for classes; class types must always provide explicit implementations.

### Mathematical Invariants of Equivalence
Any implementation of `==` must satisfy three formal axioms:
- **Reflexive**: `a == a` is always `true`.
- **Symmetric**: `a == b` implies `b == a`.
- **Transitive**: `a == b` and `b == c` implies `a == c`.

---

## 2. Hashable: Fast Lookups & Unique Collections

`Hashable` extends `Equatable`. Any type conforming to `Hashable` can be hashed into an integer digest via a `Hasher`, allowing instances to serve as keys in a `Dictionary` or elements in a `Set`.

### The Protocol Contract & Hierarchy

```swift
public protocol Hashable: Equatable {
    func hash(into hasher: inout Hasher)
}
```

Because `Hashable` inherits from `Equatable`, **every `Hashable` type must also be `Equatable`**.

### The Golden Rule of Hashing
> **If two values are equal according to `==`, they must produce the exact same hash value.**  
> `a == b` $\implies$ `hash(a) == hash(b)`

If this invariant is violated, collections like `Set` and `Dictionary` break down: looking up an item that exists in the set can fail because the collection will look in the wrong internal storage bucket.

### Playground Example: Custom Hashing & Deduplication

Suppose we have a `City` struct where two cities are considered identical if they have the same `name`, regardless of country:

```swift
struct City: Hashable {
    let name: String
    let country: String
    
    // Custom hashing: feed only the properties used in '==' into the hasher
    func hash(into hasher: inout Hasher) {
        hasher.combine(name)
    }
    
    // Matching equality contract
    static func == (lhs: City, rhs: City) -> Bool {
        lhs.name == rhs.name
    }
}
```

> **Important**: Notice how `hash(into:)` only combines `name`, exactly mirroring our `static func ==`. If `country` were hashed in `hash(into:)` while excluded from `==`, two cities with identical names but different countries would be considered equal by `==` but have different hash values, violating the hash invariant!

Now let's use `City` in a `Set`:

```swift
// Without Hashable, this produces a compiler error:
// "Type 'City' does not conform to protocol 'Hashable'"

let visitedCities: Set<City> = [
    City(name: "Tokyo", country: "Japan"),
    City(name: "Paris", country: "France"),
    City(name: "Tokyo", country: "Japan") // Duplicate, ignored by the Set!
]

print("Visited city count is \(visitedCities.count)")
// Output: Visited city count is 2
```

### How Hash Collections Achieve $O(1)$ Lookups

Under the hood, a `Set` or `Dictionary` maintains an array of "buckets":
1. **Compute Bucket Index**: The collection calls `hasher.combine(...)` on your item to produce an integer hash, which is mapped to a bucket index ($O(1)$).
2. **Check for Existing Element**: If multiple elements end up in the same bucket (a hash collision), the collection uses `==` to check if the candidate item already exists.
3. **Deduplication / Insertion**: If `lhs == rhs` evaluates to `true`, the duplicate is dropped; otherwise, it is stored in the bucket.

Just like with `Equatable`, Swift synthesizes `hash(into:)` automatically for structs and enums as long as all stored properties conform to `Hashable`.

---

## 3. Identifiable: Stable Identity

Introduced in Swift 5.1 alongside SwiftUI, the `Identifiable` protocol provides a standardized way to give an instance a **stable, unique identity**.

### The Protocol Contract

```swift
public protocol Identifiable {
    associatedtype ID: Hashable
    var id: Self.ID { get }
}
```

The only requirement is a property named `id` whose type conforms to `Hashable`. Typical ID types include `UUID`, `Int`, `String`, or a custom strongly-typed identifier.

### Value Equality vs. Entity Identity

It is crucial to differentiate between **equality** and **identity**:
- **Equality (`Equatable`)**: Do these two objects have identical values right now?
- **Identity (`Identifiable`)**: Are these two representations referencing the *exact same underlying entity* across time, even if their contents have mutated?

Consider a user editing their profile:
- Their display name changes from `"Alex"` to `"Alexander"`.
- Under `Equatable`, the old profile and new profile are **not equal** (`old != new`).
- Under `Identifiable`, both represent the **same user** because their `id` (e.g., `UUID`) remains identical.

### Playground Example: Modeling Event Logs

```swift
import Foundation

struct LogEntry: Identifiable {
    let id = UUID()
    let message: String
    let timestamp: Date
}

// Instantiating log entries with unique IDs
let entry1 = LogEntry(message: "Database connection established", timestamp: .now)
let entry2 = LogEntry(message: "Request completed with status 200", timestamp: .distantFuture)

print("Entry 1 ID: \(entry1.id)")
print("Entry 2 ID: \(entry2.id)")
```

Every instance of `LogEntry` automatically receives a distinct, globally unique identifier (`UUID`) upon initialization.

### SwiftUI's Diffing Engine: Why `Identifiable` Matters

When your app's state changes, SwiftUI re-evaluates view bodies. To update the screen smoothly and animate row additions, deletions, and moves, SwiftUI's diffing algorithm needs to know:
1. Which rows were newly inserted?
2. Which existing row was re-positioned?
3. Which row was removed?

Without a stable identity, SwiftUI cannot differentiate between two rows with similar text or detect whether an item was swapped or simply updated.

When a type conforms to `Identifiable`, SwiftUI's `List` and `ForEach` can consume it directly without having to manually supply a key path:

```swift
import SwiftUI

struct LogListView: View {
    @State private var logs: [LogEntry] = [
        LogEntry(message: "System boot", timestamp: .now),
        LogEntry(message: "Network reachable", timestamp: .now)
    ]
    
    var body: some View {
        // Because LogEntry conforms to Identifiable,
        // we write List(logs) rather than List(logs, id: \.id)
        List(logs) { log in
            VStack(alignment: .leading, spacing: 4) {
                Text(log.message)
                    .font(.body)
                Text(log.timestamp, style: .time)
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
        }
    }
}
```

### Common Trap: Dynamic ID Generation

A critical anti-pattern when using `Identifiable` is generating an `id` inside a computed property:

```swift
// ❌ ANTI-PATTERN: Never compute a new ID dynamically!
struct BrokenItem: Identifiable {
    var id: UUID { UUID() } // Creates a fresh ID every time the property is read!
    let title: String
}
```

Because `UUID()` is generated anew whenever SwiftUI inspects the view hierarchy, the item's identity changes on every render pass. This causes:
- Lost animation transitions (rows flicker or re-create instead of moving smoothly).
- Broken scroll position restoration in `ScrollView` and `List`.
- Lost focus state and internal child view state.

Always ensure the `id` is a **stored constant or persistent key** (such as a database primary key, API ID, or stored `UUID`).

---

## Protocol Comparison Matrix

| Protocol | Primary Purpose | Key Requirement | Protocol Dependencies | Typical Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **`Equatable`** | Value equivalence (`lhs == rhs`) | `static func == (lhs: Self, rhs: Self) -> Bool` | None | Comparing models, unit assertions, diffing value changes |
| **`Hashable`** | Bucketing & $O(1)$ fast lookups | `func hash(into hasher: inout Hasher)` | Inherits from `Equatable` | `Set` elements, `Dictionary` keys, navigation paths |
| **`Identifiable`** | Entity identity across time & state | `var id: ID { get }` (where `ID: Hashable`) | Requires `id` to be `Hashable` | SwiftUI `List`, `ForEach`, `.sheet(item:)`, animated diffs |

---

## Combining All Three in Production

In real-world iOS architectures, domain models frequently conform to all three protocols:

```swift
struct TaskItem: Identifiable, Hashable {
    let id: UUID
    var title: String
    var isCompleted: Bool
    
    // Hashable synthesis automatically provides both Equatable and Hashable conformance
    // Identifiable provides stable identity for SwiftUI lists and navigation bindings
}
```

With this single declaration:
1. SwiftUI can display tasks seamlessly in a `List(tasks)`.
2. Multiple tasks can be gathered into a `Set<TaskItem>` for multi-selection.
3. Views can compare prior and subsequent task lists to minimize unnecessary re-renders.

---

## Summary Checklist

- **Use `Equatable`** when you need to know if two instances have equivalent content. Let the compiler synthesize it whenever possible.
- **Use `Hashable`** when your type must live inside a `Set` or act as a `Dictionary` key. Ensure that any property used in `hash(into:)` is also evaluated in `==`.
- **Use `Identifiable`** when tracking unique entities across their lifecycle, particularly for SwiftUI `List`, `ForEach`, and presentation sheets. Keep the `id` stable across mutations.
