# Closures in Swift

A closure is a block of code that you can pass around and use in your program. Closures do not need a name. You can save one in a variable or pass it to a function.

Functions can also be saved in variables and passed to other functions. This makes functions and closures useful as values in Swift.

## A simple closure

This closure takes a `String` and prints it:

```swift
let printer: (String) -> Void = { (value: String) in
    print("The passed value is \(value)")
}

printer("Hello")
```

The type `(String) -> Void` means that the closure takes a `String` and does not return a value. The code inside `{ }` is the closure body. The word `in` marks the start of that body.

Here is a closure that takes an integer and returns its doubled value:

```swift
let double: (Int) -> Int = { (number: Int) -> Int in
    let doubledValue = number * 2
    return doubledValue
}

let result = double(3)
print("result is \(result)")
```

Because the type already tells Swift what goes in and what comes out, Swift can often work out the types for you. We can also leave out `return` when the closure has one expression:

```swift
let double: (Int) -> Int = { number in number * 2 }
```

## Pass a closure to a function

Closures are values, so a function can accept one as an argument. A type alias can give a closure type a clear name:

```swift
typealias Formatter = (String) -> String

let capitalizedFormatter: Formatter = { input in
    return input.uppercased()
}

func save(_ value: String, _ formatter: Formatter) {
    let formattedString = formatter(value)
    print(formattedString)
}

save("vaLue", capitalizedFormatter)
```

The `Formatter` closure takes a string and returns a string. The `save` function calls it before printing the result.

## Use closures with arrays

Array methods like `filter` take a closure. The closure tells `filter` what to keep.

First, we can write a named function:

```swift
let userIDs = [12, 33, 2, 39, 29, 99, 193, 202]

func isNumberEven(num: Int) -> Bool {
    num % 2 == 0
}

let evenNumbers = userIDs.filter(isNumberEven(num:))
print(evenNumbers)
```

We can write the same check as a closure:

```swift
print(userIDs.filter({ number in
    number % 2 == 0
}))
```

Swift can infer the type of `number`. It also gives closure arguments short names like `$0` for the first argument:

```swift
print(userIDs.filter { $0 % 2 == 0 })
```

This shorter form is called trailing closure syntax. It works because the closure is the last argument to `filter`.

### Chain closure operations

The following example converts score strings to integers, keeps scores above 60, and sorts them from highest to lowest:

```swift
let scores = ["100", "20", "44", "88"]

let results = scores
    .compactMap { Int($0) }
    .filter { $0 > 60 }
    .sorted { $0 > $1 }

print(results)
```

`compactMap` converts each string to an integer and leaves out values that cannot be converted. `filter` keeps the scores above 60. `sorted` puts the highest score first.

## Write your own function that takes a closure

This function adds two numbers, then sends the result to a closure:

```swift
func addByX(number: Int, x: Int, _ transform: (Int) -> Void) {
    transform(number + x)
}
```

You can use the same idea in an extension:

```swift
extension Int {
    func addBy(_ by: Int, _ transform: (Int) -> Void) {
        transform(self + by)
    }
}

let number = 32
number.addBy(12) {
    print("Result is \($0)")
}
```

The closure receives the result, `44`, and prints it. Since the closure is the last argument, we can write it after the function call.

Closures can also help make a reusable array method:

```swift
extension [Int?] {
    func conditionNonNilMap(_ condition: (Int) -> Bool) -> [Int] {
        var result: [Int] = []

        for item in self {
            if let number = item, condition(number) {
                result.append(number)
            }
        }

        return result
    }
}

let filteredMap = [1, 2, 3, 4, 5, 6, nil]
    .conditionNonNilMap { $0 % 2 == 0 }

print("Filtered map is \(filteredMap)")
```

This method removes `nil` values and keeps the numbers that pass the condition. The closure lets each caller choose the condition.

## Multiple trailing closures

Since Swift 5.3, a function can use more than one trailing closure. This can make calls with several closures easier to read:

```swift
func multiClosure(
    condition: Bool,
    success: () -> Void,
    failure: () -> Void
) {
    if condition {
        success()
    } else {
        failure()
    }
}

multiClosure(condition: true) {
    print("Success")
} failure: {
    print("Failure")
}
```

The function runs the `success` closure when the condition is true. Otherwise, it runs the `failure` closure.

## Set up a UIKit view

In UIKit, a closure can keep related setup code together. This example creates and configures a label:

```swift
import UIKit

let label: UILabel = {
    let label = UILabel()
    label.font = .systemFont(ofSize: 12)
    label.textColor = .red
    return label
}()
```

The `()` at the end runs the closure right away. The finished label is stored in `label`.

## Keep complex logic clear

Closures are useful for short actions and conditions. But a long closure can be hard to read and test. If the logic grows, move it into a named function or method, then pass that function where needed.

## Key points

- A closure is a block of code that you can save or pass to another function.
- Closures do not need names.
- Use type inference and `$0` for short, clear closures.
- Trailing closure syntax works well when a closure is the last argument.
- Keep complex business logic in named functions so it is easier to understand and test.
