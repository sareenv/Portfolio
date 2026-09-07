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

To adhere to SRP, we isolate the user fetching logic into a separate component and use aggregation—ideally behind an interface/protocol—making it easily swappable for testability:

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

### Swift Example

## L - Liskov Substitution Principle (LSP)

### Swift Example

## I - Interface Segregation Principle (ISP)

### Swift Example

## D - Dependency Inversion Principle (DIP)

### Swift Example

## Conclusion
