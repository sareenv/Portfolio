# Implementing OIDC on iOS using AppAuth

## 1. Introduction to AppAuth-iOS

## 2. Setup & Installation

### Swift Package Manager / CocoaPods

## 3. URL Schemes & Universal Links Configuration

### `Info.plist` Configuration

### Redirect URI Handling

## 4. AppAuth Architecture Components

### `OIDServiceConfiguration`

### `OIDAuthorizationRequest`

### `OIDAuthState`

## 5. Authentication Flow Implementation

### Discovering the Issuer Configuration

### Creating the Authorization Request with PKCE

### Triggering the Authentication Session (`ASWebAuthenticationSession`)

### Handling the Redirect Callback

## 6. Token Management & API Requests

### Storing `OIDAuthState` Securely in Keychain

### Performing Authorized Requests with Automatic Token Refresh

## 7. Logout & Session Termination

## 8. Summary
