# Understanding How Closures Capture Values in Swift

Closures can keep access to variables from the function where they were created.

## A closure keeps a variable after a function returns

Local variables normally live in a function's stack frame. When the function ends, that frame is removed.

But what happens when a function returns a closure that uses one of its local variables?

```swift
func makePrinter() -> () -> Void {
    var message = "a"

    let printer = {
        print(message)
    }

    message = "goodbye"
    return printer
}

let printer = makePrinter()
printer() // goodbye
```

The closure prints `"goodbye"`. It captured the variable `message`, not just its first value, `"a"`.

The variable must stay available after `makePrinter()` returns, because the closure still uses it. The notes describe Swift as moving a captured local variable from the stack to the heap in a shared box. The closure uses that shared variable.

## Two closures can share one variable

Both closures in this example use the same `count` variable:

```swift
func makeCounterPair() -> (() -> Void, () -> Void) {
    var count = 0

    let increment = {
        count += 1
        print("increment -> count \(count)")
    }

    let decrement = {
        count -= 1
        print("decrement -> count \(count)")
    }

    return (increment, decrement)
}

let (increment, decrement) = makeCounterPair()

increment() // increment -> count 1
decrement() // decrement -> count 0
```

The function returns both closures. Neither closure has its own separate `count`. They use the same captured variable in shared memory.

## Closures created in a loop

The first loop makes three closures and saves them in an array:

```swift
var actions: [() -> Void] = []

for index in 1...3 {
    actions.append {
        print(index)
    }
}

for action in actions {
    action()
}
```

Each closure captures that loop's `index`. When the closures are called later, they print `1`, `2`, and `3`.

The notes compare this with a `while` loop:

```swift
var index = 1
var loopActions: [() -> Void] = []

while index <= 3 {
    loopActions.append {
        print(index)
    }
    index += 1
}

for action in loopActions {
    action()
}
```

Here, all three closures use the same `index` variable. The loop increases it until it becomes `4`. When the closures run, they all print `4`.

## Look at a closure's function and context

The screenshot uses `unsafeBitCast` to inspect two parts of a closure: `fn` and `ctx`.

```swift
let closure: () -> Int = {
    return 12
}

let a = closure
let b = closure

func address(
    of closure: @escaping () -> Int
) -> (fn: UnsafeRawPointer?, ctx: UnsafeRawPointer?) {
    unsafeBitCast(
        closure,
        to: (UnsafeRawPointer?, UnsafeRawPointer?).self
    )
}

print(address(of: a))
print(address(of: b))
```

In the screenshot's output, `a` and `b` have the same `fn` address, but different `ctx` addresses. The example shows the function and context values that the screenshot prints for each closure.

## Key points

- A closure can keep using a local variable after its function returns.
- When a closure captures a variable, it uses the captured variable.
- Two closures can share access to the same captured variable.
- In the loop examples, the `for` closures print `1`, `2`, and `3`, while the `while` closures all print `4`.
- Closures can be stored in a variable or an array and called later.
