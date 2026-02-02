# Memory Management in Swift

## Introduction

Memory management is a crucial aspect of iOS development. Swift uses **Automatic Reference Counting (ARC)** to manage memory automatically, but understanding how it works is essential to avoid common pitfalls like retain cycles.

## What is ARC?

**Automatic Reference Counting (ARC)** is Swift's memory management system. It automatically tracks and manages your app's memory usage by keeping count of how many references point to each class instance.

### How ARC Works

When you create an instance of a class:
1. ARC allocates memory to store the instance
2. ARC keeps track of how many properties, constants, and variables are referring to that instance
3. When references drop to zero, ARC deallocates the instance

```swift
class Person {
    let name: String
    init(name: String) {
        self.name = name
        print("\(name) is being initialized")
    }
    deinit {
        print("\(name) is being deinitialized")
    }
}

var reference1: Person? = Person(name: "John") // Reference count: 1
var reference2 = reference1 // Reference count: 2
var reference3 = reference1 // Reference count: 3

reference1 = nil // Reference count: 2
reference2 = nil // Reference count: 1
reference3 = nil // Reference count: 0 → "John is being deinitialized"
```

## Strong vs Weak vs Unowned References

### Strong References (Default)

By default, all references in Swift are **strong**. A strong reference keeps the object alive as long as the reference exists.

```swift
class Apartment {
    var tenant: Person? // Strong reference
}
```

### Weak References

A **weak** reference doesn't keep the object alive. When the object is deallocated, the weak reference automatically becomes nil.

```swift
class Apartment {
    weak var tenant: Person? // Weak reference - must be optional
}
```

**Use weak when:**
- The reference can become nil during its lifetime
- You want to break a potential retain cycle
- The referenced object has a shorter lifespan

### Unowned References

An **unowned** reference doesn't keep the object alive, but unlike weak, it's assumed to always have a value during its lifetime.

```swift
class Customer {
    let name: String
    var card: CreditCard?
    
    init(name: String) { self.name = name }
}

class CreditCard {
    let number: UInt64
    unowned let customer: Customer // Unowned - always has a value
    
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
}
```

**Use unowned when:**
- The reference will never be nil during its lifetime
- The referenced object has an equal or longer lifespan

## Retain Cycles

A **retain cycle** (also called a strong reference cycle) occurs when two or more objects hold strong references to each other, preventing ARC from deallocating them.

### Example of a Retain Cycle

```swift
class Person {
    let name: String
    var apartment: Apartment?
    
    init(name: String) { self.name = name }
    deinit { print("\(name) is being deinitialized") }
}

class Apartment {
    let unit: String
    var tenant: Person? // Strong reference creates cycle!
    
    init(unit: String) { self.unit = unit }
    deinit { print("Apartment \(unit) is being deinitialized") }
}

var john: Person? = Person(name: "John")
var unit4A: Apartment? = Apartment(unit: "4A")

john?.apartment = unit4A
unit4A?.tenant = john

// Setting both to nil doesn't deallocate them - MEMORY LEAK!
john = nil
unit4A = nil
// Neither deinit is called because they still reference each other
```

### Breaking the Cycle with Weak

```swift
class Apartment {
    let unit: String
    weak var tenant: Person? // Weak breaks the cycle
    
    init(unit: String) { self.unit = unit }
    deinit { print("Apartment \(unit) is being deinitialized") }
}
```

## Closures and Retain Cycles

Closures can also create retain cycles because they capture references to objects used inside them.

### The Problem

```swift
class HTMLElement {
    let name: String
    let text: String?
    
    lazy var asHTML: () -> String = {
        // self is captured strongly!
        if let text = self.text {
            return "<\(self.name)>\(text)</\(self.name)>"
        } else {
            return "<\(self.name) />"
        }
    }
    
    init(name: String, text: String? = nil) {
        self.name = name
        self.text = text
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

var heading: HTMLElement? = HTMLElement(name: "h1", text: "Hello")
print(heading!.asHTML()) // <h1>Hello</h1>

heading = nil // deinit is NEVER called - retain cycle!
```

### The Solution: Capture Lists

Use a **capture list** to define how values should be captured in the closure:

```swift
lazy var asHTML: () -> String = { [weak self] in
    guard let self = self else { return "" }
    if let text = self.text {
        return "<\(self.name)>\(text)</\(self.name)>"
    } else {
        return "<\(self.name) />"
    }
}

// Or with unowned if self will always exist
lazy var asHTML: () -> String = { [unowned self] in
    if let text = self.text {
        return "<\(self.name)>\(text)</\(self.name)>"
    } else {
        return "<\(self.name) />"
    }
}
```

## Best Practices

| Scenario | Reference Type |
|----------|---------------|
| Parent → Child | Strong |
| Child → Parent | Weak or Unowned |
| Delegate pattern | Weak |
| Closure capturing self | Weak or Unowned |
| Singleton references | Weak |

### Quick Reference

1. **Default to strong** - Most references should be strong
2. **Use weak for delegates** - Delegates should almost always be weak
3. **Use capture lists in closures** - When closures reference `self`
4. **Use unowned carefully** - Only when you're certain the object won't be nil
5. **Test with Instruments** - Use the Leaks and Allocations tools

## Debugging Memory Issues

### Using Xcode Instruments

1. **Leaks Instrument**: Detects memory that's allocated but no longer referenced
2. **Allocations Instrument**: Shows all memory allocations and helps identify retain cycles

### Adding Debug Prints

```swift
deinit {
    print("\(type(of: self)) is being deinitialized")
}
```

## Key Takeaways

- ARC manages memory automatically but you need to understand it to avoid leaks
- Strong references keep objects alive, weak and unowned don't
- Retain cycles occur when objects hold strong references to each other
- Use weak for optional references that can become nil
- Use unowned for non-optional references that won't outlive the referenced object
- Always use capture lists in closures that reference self
