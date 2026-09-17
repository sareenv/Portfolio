# Understanding Actors in Swift

Actors in Swift are a fundamental language feature designed to ensure safe, serial access to mutable state across concurrent tasks. By synchronizing access to their isolated state, actors prevent data races and ensure that mutable state is captured and modified safely by different tasks.

However, actors are also **reentrant**—a characteristic that introduces nuanced behavior when `await` suspension points are introduced. In this article, we'll examine how actors work, how actor isolation boundaries operate, and how tasks are executed serially, before exploring reentrancy in a follow-up article.

---

## 1. Defining an Actor: The `BankAccount` Example

Let's begin with a simple implementation of an actor modeling a bank account:

```swift
actor BankAccount { 
    private var balance = 100 
    
    func deposit(_ amount: Int) { 
        balance += amount 
    } 
}
```

In the code above, if two tasks call the `deposit` method concurrently, the actor ensures that only one task can access the actor-isolated code at a time.

The `deposit` method is **actor-isolated**:
- **Within the actor**: We can mutate isolated state directly and synchronously as needed.
- **Outside the actor**: To mutate or access state, we must cross an **actor isolation boundary**, requiring an asynchronous call with `await`.

---

## 2. Crossing the Actor Isolation Boundary

Let's extend our `BankAccount` by adding a method to inspect the current balance:

```swift
actor BankAccount { 
    private var balance = 100 
    
    func deposit(_ amount: Int) { 
        balance += amount 
    } 
    
    func getValue() -> Int {
        balance
    }
}
```

Now let's call these methods from outside the actor:

```swift
let account = BankAccount()

await account.deposit(200)
let newBalance = await account.getValue()
```

Even though `deposit` and `getValue` are not declared as `async` within `BankAccount`, callers outside the actor must still use `await` to invoke them. 

Because we are crossing an **actor isolation boundary**, the calling task may need to suspend until the actor's serial executor is available to execute our request.

---

## 3. Serial Execution Under Concurrency

Why do we need this synchronization? Let's extend the example further by adding a withdrawal (`deduct`) method:

```swift
actor BankAccount { 
    private var balance = 100 
    
    func deposit(_ amount: Int) { 
        balance += amount 
    } 
    
    func deduct(_ amount: Int) { 
        if balance < amount {
            // Not enough balance to deduct the money
            return
        }
        balance -= amount 
    } 
    
    func getValue() -> Int {
        balance
    }
}
```

If we execute concurrent operations against the same actor instance using two separate tasks:

```swift
let account = BankAccount()

let taskA = Task {
    await account.deposit(30)
}

let taskB = Task {
    await account.deduct(100)
}

await taskA.value
await taskB.value
```

The actor's serial executor guarantees that actor-isolated executions do not overlap:

```
1. Task A reaches deposit.
2. Task B reaches deduct simultaneously on that same actor.
3. Task A first completes its synchronous, actor-isolated execution.
4. Task B executes the deduct implementation.
```

Neither task can corrupt `balance` because access is strictly serialized.

---

## 4. Exploring Synchronous Execution Order: `FunActor`

Now let's look at another interesting scenario demonstrating how tasks interact with an actor's serial queue:

```swift
actor FunActor {
    
    func methodA() {
        print("A")
        print("B")
        print("C")
    }
    
    func methodB() {
        print("D")
    }
}
```

Let's spawn two separate tasks calling these isolated methods:

```swift
let funActor = FunActor()

let task1 = Task { 
    await funActor.methodA()
}

let task2 = Task { 
    await funActor.methodB()
}

// Wait for both tasks to complete
await task1.value
await task2.value
```

Because `methodA()` is synchronous within the actor, its entire body runs atomically from start to finish without interruption once the actor grants it access.

One possible execution sequence is:

```
1. Task 1 enters the actor and prints "A".
2. Task 2 attempts to call methodB(), but cannot execute at the same time and must wait for Task 1 to complete.
3. Task 1 completes printing "B" and "C", and returns.
4. Task 2 enters the actor and prints "D".
```

> **Note**: The inverse ordering is also entirely valid: if the runtime schedules Task 2 first, Task 2 will print `"D"` to completion before Task 1 begins executing `"A"`, `"B"`, and `"C"`.

---

## 5. What Happens When an Actor Method Is `async`?

The guarantee that a method runs uninterrupted holds true for **synchronous** actor methods. But what happens if an actor method is marked `async` and contains an `await` suspension point?

Does the actor ensure that the async method completes entirely before another task can resume working on the same actor-isolated context?

**The answer is no.** 

When an actor method suspends at an `await`, the actor releases its serial executor, allowing other pending tasks to run on that same actor before the original task resumes. This behavior is known as **actor reentrancy**—a crucial and fascinating concurrency concept that we will explore with detailed examples in our next article.
