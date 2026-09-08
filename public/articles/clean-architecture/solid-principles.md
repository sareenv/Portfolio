# SOLID Principles in Clean Architecture

## 1. What is SOLID Principles?

The **SOLID** principles are five foundational software design guidelines popularized by Robert C. Martin ("Uncle Bob"), prominently detailed in *Clean Architecture*. 

SOLID is an acronym representing:
- **S**: Single Responsibility Principle
- **O**: Open/Closed Principle
- **L**: Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Inversion Principle

Together, they provide a proven blueprint for structuring clean, resilient, and maintainable software.

## 2. Why Do We Need SOLID?

### The Need for Clean Architecture & SOLID

Adopting Clean Architecture and SOLID principles provides a structured foundation for building robust systems:

- **Maintainability, Testability & Scalability**: Makes code significantly more maintainable, thoroughly testable, and easier to manage as systems and teams grow at a large scale.
- **Safer Iteration & Zero Regressions**: Makes it easier to introduce new features and changes without triggering unintended side effects or regressions across the codebase.
- **Industry-Grade Standards**: Promotes engineering best practices essential for developing, scaling, and reliably shipping commercial software.
- **Loose Coupling & No Vendor Lock-in**: Decouples business logic from external frameworks and libraries, making it straightforward to swap out dependencies without risking vendor lock-in.

### What Would Happen Without It

Without these principles, codebases quickly deteriorate into technical debt:

- **Spaghetti Code & Fragility**: Small tweaks trigger unexpected breakage elsewhere (e.g., editing user validation breaks invoice email delivery).
- **Hard to Test**: Tight coupling prevents mocking external systems (e.g., unit tests cannot run without a live production database connection).
- **Fear-Driven Development**: Teams slow down because every release risks catastrophic regressions.
- **Vendor Lock-in & Rewrite Traps**: Swapping an infrastructure component requires rewriting core business logic (e.g., moving from AWS S3 to Google Cloud Storage requires changing 40 service files).

## S - Single Responsibility Principle (SRP)

SRP states that a class or component should focus on one reason or responsibility, and should only change because of this single responsibility.

### Swift Example

Consider the following code block:

```swift
struct User {
  let id: Int
  let firstName: String
  let lastName: String
  let email: String
}

final class NotificationService {
  
  func findUser(_ id: Int) -> User {
     return User(
                 id: id, 
                 firstName: "Edvin", 
                 lastName: "Smith", 
                 email: "smith_edvin@yahoo.com"
                )   
  }

  func sendNotification(content: String, _ userID: Int) {
    let email = findUser(userID).email
    notification(content, email)
  }
}
```

This violates the SRP because if the logic for obtaining user details from an ID changes, `NotificationService` must also change. This introduces a risk of regression in the codebase and makes testing harder. 

To adhere to SRP, we isolate the user fetching logic into a separate component and use aggregation, ideally behind an interface/protocol, making it easily swappable for testability:

```swift
protocol UserRepository {
  func findUser(_ id: Int) -> User
}

final class DefaultUserRepository: UserRepository {
  func findUser(_ id: Int) -> User {
    return User(
      id: id,
      firstName: "Edvin",
      lastName: "Smith",
      email: "smith_edvin@yahoo.com"
    )
  }
}

final class NotificationService {
  private let userRepository: UserRepository

  init(userRepository: UserRepository) {
    self.userRepository = userRepository
  }

  func sendNotification(content: String, _ userID: Int) {
    let email = userRepository.findUser(userID).email
    notification(content, email)
  }
}
```

Now `NotificationService` is only responsible for dispatching notifications. If the database schema or user lookup logic changes, only `DefaultUserRepository` changes, keeping both components decoupled and easily unit-testable with mock implementations.

#### Unit Test Example

Because `NotificationService` now depends on the `UserRepository` protocol rather than a concrete implementation, we can easily inject a mock repository in our unit tests:

```swift
import XCTest

final class MockUserRepository: UserRepository {
  var invokedFindUser = false
  var stubbedUser: User?

  func findUser(_ id: Int) -> User {
    invokedFindUser = true
    return stubbedUser ?? User(
      id: id,
      firstName: "Test",
      lastName: "User",
      email: "test@example.com"
    )
  }
}

final class NotificationServiceTests: XCTestCase {
  func test_sendNotification_fetchesUserAndDispatchesNotification() {
    let mockRepo = MockUserRepository()
    let sut = NotificationService(userRepository: mockRepo)
    
    sut.sendNotification(content: "Welcome!", 42)
    
    XCTAssertTrue(mockRepo.invokedFindUser)
  }
}
```

## O - Open/Closed Principle (OCP)

The **Open/Closed Principle** states that software entities (classes, modules, functions) should be **open for extension**, but **closed for modification**. In other words, you should be able to introduce new behavior without altering existing, tested source code.

### Swift Example: The Problem

Consider an initial implementation where discounting logic is driven by an enumeration:

```swift
enum CustomerType {
  case premium
  case regular
}

struct Product {
  let price: Double
  let name: String
  let description: String
}

final class DiscountingEngine {
  func findDiscount(_ customerType: CustomerType, product: Product) -> Double {
    switch customerType {
    case .premium: 
      return Double.min((product.price * 0.20), 20)
    case .regular:
      return Double.min((product.price * 0.10), 20)
    }
  }
}
```

In this implementation, `DiscountingEngine` is coupled directly to `CustomerType`. If a new tier is introduced, such as a `vip` customer, we are forced to modify the existing `CustomerType` enum and alter the `switch` statement inside `DiscountingEngine`. 

Every time a business rule changes or a new tier is added, we risk breaking existing, verified logic and introducing regressions.

### Refactoring to Follow OCP

To adhere to the Open/Closed Principle, we decouple discounting rules behind a protocol (`DiscountingRule`), making the calculation logic pluggable and extensible:

```swift
struct Product {
  let price: Double
  let name: String
  let description: String
}

protocol DiscountingRule {
  func calculateDiscount(_ product: Product) -> Double
}

final class RegularDiscounting: DiscountingRule {
  func calculateDiscount(_ product: Product) -> Double {
    Double.min((product.price * 0.10), 20)
  }
}

final class PremiumDiscounting: DiscountingRule {
  func calculateDiscount(_ product: Product) -> Double {
    Double.min((product.price * 0.20), 20)
  }
}

final class DiscountingEngine {
  private let rule: DiscountingRule 

  init(rule: DiscountingRule) {
    self.rule = rule
  }

  func calculate(product: Product) -> Double {
    rule.calculateDiscount(product)
  }
}
```

### Extending Without Modifying

Now, when a new requirement arises (e.g., adding a VIP discounting strategy), we can extend the system by simply creating a new conforming class without touching `DiscountingEngine`:

```swift
final class VIPDiscounting: DiscountingRule {
  func calculateDiscount(_ product: Product) -> Double {
    Double.min((product.price * 0.30), 50)
  }
}

// Usage:
let product = Product(price: 800, name: "PS5", description: "Gaming console")

// Regular customer
let regularEngine = DiscountingEngine(rule: RegularDiscounting())
let regularDiscount = regularEngine.calculate(product: product)

// Premium customer
let premiumEngine = DiscountingEngine(rule: PremiumDiscounting())
let premiumDiscount = premiumEngine.calculate(product: product)

// VIP customer: cleanly extended with zero changes to existing engine code
let vipEngine = DiscountingEngine(rule: VIPDiscounting())
let vipDiscount = vipEngine.calculate(product: product)
```

#### Unit Test Example

Decoupling the rules also makes both the engine and individual rules straightforward to test in isolation:

```swift
import XCTest

final class MockDiscountingRule: DiscountingRule {
  var invokedCalculateDiscount = false
  var stubbedDiscount: Double = 15.0

  func calculateDiscount(_ product: Product) -> Double {
    invokedCalculateDiscount = true
    return stubbedDiscount
  }
}

final class DiscountingEngineTests: XCTestCase {
  func test_calculate_delegatesToRule() {
    let mockRule = MockDiscountingRule()
    let sut = DiscountingEngine(rule: mockRule)
    let product = Product(price: 100, name: "Sample", description: "Desc")

    let discount = sut.calculate(product: product)

    XCTAssertTrue(mockRule.invokedCalculateDiscount)
    XCTAssertEqual(discount, 15.0)
  }

  func test_regularDiscounting_calculatesCappedDiscount() {
    let rule = RegularDiscounting()
    let product = Product(price: 800, name: "PS5", description: "Gaming console")

    let discount = rule.calculateDiscount(product)

    // 10% of 800 is 80, capped at 20
    XCTAssertEqual(discount, 20.0)
  }
}
```

### An Important Practical Note: Did We Really Solve Anything?

Even after this refactor, somewhere we still need to decide:

```swift
switch customerType {
case .premium:
    return PremiumDiscounting()

case .regular:
    return RegularDiscounting()
}
```

So the question becomes: **did we really solve anything?**

We did, but only partially. The goal of OCP is not "there must never be a switch statement anywhere." The goal is to keep frequently changing business behavior out of stable parts of the system.

For example, this would still be much better:

```swift
struct DiscountRuleFactory {
    func makeRule(for customerType: CustomerType) -> DiscountingRule {
        switch customerType {
        case .premium:
            return PremiumDiscounting()

        case .regular:
            return RegularDiscounting()
        }
    }
}
```

Now the business logic is separated:

```
PremiumDiscounting
RegularDiscounting
DiscountingEngine
```

and only the **construction/composition layer** knows which implementation to choose.

That distinction matters.

## L - Liskov Substitution Principle (LSP)

The **Liskov Substitution Principle** states that subtypes must be substitutable for their base types or interfaces without altering the correctness of the program. If a client expects a type conforming to an abstraction, any conforming implementation should behave predictably and honor the contract without crashing, throwing unexpected unsupported errors, or changing expected semantics.

### Swift Example: The Problem (LSP Violation)

Consider a payment processing contract that bundles both payment and direct transfer operations into a single interface:

```swift
protocol PaymentProcessor {
  func pay(_ amount: Double) throws
  func transfer(_ amount: Double, to accountNumber: Int) throws
}

final class StripePaymentProcessor: PaymentProcessor {
  private(set) var balance: Double = 100.0

  func pay(_ amount: Double) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
  }

  func transfer(_ amount: Double, to accountNumber: Int) throws {
    // Stripe in this scenario does not support direct bank-to-bank account transfers
    throw PaymentError.unsupportedOperation("Direct account transfer is not supported by Stripe")
  }
}
```

In this case, `StripePaymentProcessor` cannot honor the `transfer` method because the functionality is simply not available for this processor. 

When client code relies on `PaymentProcessor`, it expects both `pay` and `transfer` to work reliably:

```swift
func processMonthlyTransfer(processor: PaymentProcessor, amount: Double, account: Int) throws {
  // If a StripePaymentProcessor is passed in, this unexpectedly fails at runtime
  try processor.transfer(amount, to: account)
}
```

Because `StripePaymentProcessor` cannot be safely substituted wherever a `PaymentProcessor` is expected without causing runtime failures, it violates the Liskov Substitution Principle.

### Honoring the Contract with a Compatible Class

Now consider another processor, such as a direct banking processor, that can fully honor both operations:

```swift
final class BankWirePaymentProcessor: PaymentProcessor {
  private(set) var balance: Double = 5000.0

  func pay(_ amount: Double) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
  }

  func transfer(_ amount: Double, to accountNumber: Int) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
    // Wire funds directly to recipient bank account
    print("Transferred $\(amount) to account \(accountNumber)")
  }
}
```

`BankWirePaymentProcessor` genuinely fulfills the entire contract, so it can be substituted anywhere `PaymentProcessor` is used without unexpected surprises.

### The True Fix: Refining the Abstraction

When an implementation cannot honor parts of a protocol, it is often a sign of an overly broad abstraction (leading directly into the Interface Segregation Principle). We can split the capabilities into smaller, focused contracts:

```swift
protocol Payable {
  func pay(_ amount: Double) throws
}

protocol Transferable {
  func transfer(_ amount: Double, to accountNumber: Int) throws
}

// Stripe only adopts what it can genuinely support
final class StripeProcessor: Payable {
  private(set) var balance: Double = 100.0

  func pay(_ amount: Double) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
  }
}

// Bank Wire supports both
final class BankWireProcessor: Payable, Transferable {
  private(set) var balance: Double = 5000.0

  func pay(_ amount: Double) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
  }

  func transfer(_ amount: Double, to accountNumber: Int) throws {
    guard amount <= balance else {
      throw PaymentError.insufficientFunds
    }
    balance -= amount
    print("Transferred $\(amount) to account \(accountNumber)")
  }
}
```

Now, any client expecting a `Payable` can safely substitute `StripeProcessor` or `BankWireProcessor` with full confidence that the contract will be honored.

#### Unit Test Example

```swift
import XCTest

final class PaymentProcessorTests: XCTestCase {
  func test_bankWireProcessor_successfullyTransfers() throws {
    let sut = BankWireProcessor()
    
    XCTAssertNoThrow(try sut.transfer(150.0, to: 987654321))
    XCTAssertEqual(sut.balance, 4850.0)
  }

  func test_stripeProcessor_canBeSubstitutedAsPayable() throws {
    let sut: Payable = StripeProcessor()
    
    XCTAssertNoThrow(try sut.pay(50.0))
  }
}
```

## I - Interface Segregation Principle (ISP)

The **Interface Segregation Principle** states that clients should not be forced to depend on methods they do not use. Interfaces and protocols should be fine-grained and client-specific rather than bloated and general-purpose.

### The Core Idea

An interface should not be too "fat." When a protocol contains too many disparate requirements:
1. **Difficult to Mock in Unit Tests**: When writing unit tests for a component that only needs one method, you are forced to stub out multiple irrelevant methods, often littering test suites with dummy returns or `fatalError("Not needed")`.
2. **Smell for SRP Violation**: A bloated interface is usually a strong indicator that the Single Responsibility Principle is being violated under the hood, and responsibilities need to be re-evaluated.

### Swift Example: The Problem (Fat Protocol)

Consider a `UserService` protocol that groups together user querying, profile mutation, deletion, and media uploads:

```swift
protocol UserService {
    func fetchUser(id: String) async throws -> User
    func updateUser(_ user: User) async throws
    func deleteUser(id: String) async throws
    func uploadProfileImage(_ data: Data) async throws
}
```

If we want to write a unit test for a presenter or view model that only displays user profile information, we are forced to implement every single requirement:

```swift
final class MockUserService: UserService {
    func fetchUser(id: String) async throws -> User {
        return User(id: 42, firstName: "Edvin", lastName: "Smith", email: "smith_edvin@yahoo.com")
    }

    func updateUser(_ user: User) async throws {
        fatalError("Not needed")
    }

    func deleteUser(id: String) async throws {
        fatalError("Not needed")
    }

    func uploadProfileImage(_ data: Data) async throws {
        fatalError("Not needed")
    }
}
```

This mock is noisy, brittle, and dangerous. If someone accidentally invokes `updateUser` during a test run, the test process crashes with `fatalError`.

### Refactoring to Follow ISP

ISP advises splitting the protocol according to distinct responsibilities into granular, focused protocols:

```swift
protocol UserFetching {
    func fetchUser(id: String) async throws -> User
}

protocol UserUpdating {
    func updateUser(_ user: User) async throws
}

protocol UserDeleting {
    func deleteUser(id: String) async throws
}

protocol ProfileImageUploading {
    func uploadProfileImage(_ data: Data) async throws
}
```

A concrete networking service can still conform to multiple protocols if needed:

```swift
final class NetworkUserService: UserFetching, UserUpdating, UserDeleting, ProfileImageUploading {
    func fetchUser(id: String) async throws -> User { /* networking call */ }
    func updateUser(_ user: User) async throws { /* networking call */ }
    func deleteUser(id: String) async throws { /* networking call */ }
    func uploadProfileImage(_ data: Data) async throws { /* networking call */ }
}
```

### Using Only the Exact Dependencies Needed

Now, consuming classes only declare the exact dependencies they require:

```swift
final class UserProfilePresenter {
    private let userFetcher: UserFetching

    init(userFetcher: UserFetching) {
        self.userFetcher = userFetcher
    }

    func loadProfile(for id: String) async throws -> User {
        try await userFetcher.fetchUser(id: id)
    }
}
```

#### Unit Test Example

Creating mocks becomes lightweight, safe, and focused strictly on the behavior being tested:

```swift
import XCTest

final class MockUserFetcher: UserFetching {
    var stubbedUser: User?

    func fetchUser(id: String) async throws -> User {
        guard let stubbedUser = stubbedUser else {
            throw TestError.userNotFound
        }
        return stubbedUser
    }
}

final class UserProfilePresenterTests: XCTestCase {
    func test_loadProfile_returnsExpectedUser() async throws {
        let mockFetcher = MockUserFetcher()
        let expectedUser = User(id: 1, firstName: "Edvin", lastName: "Smith", email: "smith_edvin@yahoo.com")
        mockFetcher.stubbedUser = expectedUser

        let sut = UserProfilePresenter(userFetcher: mockFetcher)
        let result = try await sut.loadProfile(for: "1")

        XCTAssertEqual(result.id, expectedUser.id)
        XCTAssertEqual(result.email, expectedUser.email)
    }
}
```

## D - Dependency Inversion Principle (DIP)

The **Dependency Inversion Principle** states that:
1. High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces or protocols).
2. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

### The Core Benefits

Using abstractions instead of concrete dependencies significantly reduces coupling across the system:
- **Loose Coupling**: High-level business logic is isolated from low-level infrastructure, SDKs, and third-party vendors.
- **Easy to Mock for Unit Testing**: You can substitute real network or persistence layers with test doubles without changing client code.
- **Phased Provider Swaps**: You can transition to a different third-party provider (such as moving from Stripe to Adyen or PayPal) incrementally in a phased approach without rewriting consuming view models or controllers.

### Swift Example: The Problem (Tight Coupling)

Consider a checkout view model that instantiates its payment processor directly:

```swift
final class StripePaymentService {
    func pay(amount: Double) {
        print("Paid \(amount) using Stripe")
    }
}

final class CheckoutViewModel {
    private let paymentService = StripePaymentService()

    func checkout() {
        paymentService.pay(amount: 100)
    }
}
```

The problem is that `CheckoutViewModel` directly depends on `StripePaymentService`:

```
CheckoutViewModel
        ↓
StripePaymentService
```

If tomorrow you want to move from Stripe to Adyen, PayPal, or an internal payment gateway, you are forced to modify `CheckoutViewModel`. Testing is also impaired because running `checkout()` will execute real Stripe logic unless altered.

That is tight coupling.

### Refactoring using Dependency Inversion

To invert the dependency, high-level code should depend on abstractions, not concrete implementations.

First, define the abstraction:

```swift
protocol PaymentProcessing {
    func pay(amount: Double)
}
```

Next, make concrete payment services conform to this abstraction:

```swift
final class StripePaymentService: PaymentProcessing {
    func pay(amount: Double) {
        print("Paid \(amount) using Stripe")
    }
}

final class AdyenPaymentService: PaymentProcessing {
    func pay(amount: Double) {
        print("Paid \(amount) using Adyen")
    }
}
```

Now, inject the abstraction into `CheckoutViewModel`:

```swift
final class CheckoutViewModel {
    private let paymentService: PaymentProcessing

    init(paymentService: PaymentProcessing) {
        self.paymentService = paymentService
    }

    func checkout() {
        paymentService.pay(amount: 100)
    }
}
```

With this inversion, the dependency graph is flipped:

```
CheckoutViewModel → [ PaymentProcessing ] ← StripePaymentService / AdyenPaymentService
```

Both high-level code (`CheckoutViewModel`) and low-level code (`StripePaymentService`) now depend on the shared abstraction (`PaymentProcessing`).

#### Unit Test Example

Testing `CheckoutViewModel` is now straightforward because you can inject a mock payment service without any external side effects:

```swift
import XCTest

final class MockPaymentService: PaymentProcessing {
    var invokedPay = false
    var lastAmountPaid: Double?

    func pay(amount: Double) {
        invokedPay = true
        lastAmountPaid = amount
    }
}

final class CheckoutViewModelTests: XCTestCase {
    func test_checkout_delegatesPaymentToProcessor() {
        let mockService = MockPaymentService()
        let sut = CheckoutViewModel(paymentService: mockService)

        sut.checkout()

        XCTAssertTrue(mockService.invokedPay)
        XCTAssertEqual(mockService.lastAmountPaid, 100)
    }
}
```

## Conclusion

Understanding and applying the SOLID principles in Swift leads to architectures that are modular, resilient to change, and straightforward to test. By designing focused components with clear abstractions, systems can evolve and scale smoothly over time.

## References

- [Clean Architecture: A Craftsman's Guide to Software Structure and Design by Robert C. Martin](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)
- [S.O.L.I.D: The First 5 Principles of Object Oriented Design by DigitalOcean](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [ChatGPT](https://chatgpt.com/) (used for refining the content, reviewing explanations, and identifying writing mistakes)


