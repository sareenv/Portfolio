# Implementing an OIDC Server in Go

## 1. Architecture Overview

## 2. Prerequisites & Libraries

## 3. OpenID Configuration & Discovery Endpoints

### Serving `/.well-known/openid-configuration`

### Serving `/.well-known/jwks.json`

## 4. Client Registration & Store

## 5. Authorization Endpoint (`/authorize`)

### Handling Request & PKCE Challenge Validation

### User Authentication & Consent

### Issuing Authorization Code

## 6. Token Endpoint (`/token`)

### Verifying Authorization Code & PKCE Verifier

### Generating & Signing ID Token

### Generating Access & Refresh Tokens

## 7. UserInfo Endpoint (`/userinfo`)

## 8. Middleware & Protected Resource Verification

## 9. Testing & Verification

## 10. Summary
