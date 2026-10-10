# Push Notifications Series, Part 1: APNS and the Registration Flow

## What is APNS?

APNS stands for **Apple Push Notification Service**. It is the service from Apple that sends push notifications to your users' devices.

This is the first article in a series about push notifications and APNS. Here we look at the high-level flow of the first phase: **registration**. Later articles will go deeper.

## The Big Picture

![APNS registration flow diagram](/Assets/articles/apns-registration-flow.png)

The diagram shows **Phase 1: Registration**. It happens once, when the app starts.

There are three parts in this flow:

| Part | Role |
|------|------|
| iPhone | Asks Apple for a device token and sends it to your server |
| Apple | Gives the iPhone a device token |
| Your server | Receives the device token and saves it in the database |

## Before You Start: Two Things on the Client

On the iPhone, the registration starts with two things:

1. `UNUserNotificationCenter`
2. Register for remote notifications

Apple is contacted using `UNUserNotificationCenter`.

## The Four Steps

### Step 1: The iPhone asks for a device token

The iPhone asks Apple, using `UNUserNotificationCenter`: "Give me a device token, please."

### Step 2: Apple assigns a device token

Apple gives a device token to the iPhone.

### Step 3: The iPhone sends the token to your server

The iPhone sends the device token to your server.

### Step 4: The server saves the token

The server saves the token in the database.

## Details: How Step 2 Works

Step 2 can pass or fail. The iPhone finds out through two delegate methods.

### If it passes

The delegate method `didRegisterForRemoteNotificationsWithDeviceToken` is called. This is where you receive the device token.

### If it fails

The delegate method `didFailToRegisterForRemoteNotificationsWithError` is called. Apple could not create a device token, so you need to handle the error on the client side.

## Key Takeaways

- APNS is the Apple Push Notification Service.
- Registration is Phase 1. It happens once, when the app starts.
- The iPhone asks Apple for a device token, Apple assigns it, the iPhone sends it to your server, and the server saves it in the database.
- `didRegisterForRemoteNotificationsWithDeviceToken` tells you that step 2 passed.
- `didFailToRegisterForRemoteNotificationsWithError` tells you that step 2 failed. Handle this error on the client side.
