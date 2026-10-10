# Push Notifications Series, Part 2: Identity and How Your Server Connects to APNS

## Why Does APNS Need to Know Your Server's Identity?

In the first article, we saw how the iPhone gets a device token and your server saves it. Now we look at how your server talks to APNS. The main idea is **identity**.

There are two reasons why APNS needs to know who your server is:

1. Imagine an attacker gets the device ID of one of your customers. If the attacker pretends to be your server, they can send push notifications to that customer.
2. Because of this, Apple needs two things from our side:
   - Is this a registered developer?
   - Is this developer allowed to send push notifications to these devices?

As a result, **the developer identity is required**. Just the device is not enough.

![APNS diagram](/Assets/articles/apns-final.png)

## Two Ways to Prove Your Identity: `.p8` and `.p12`

Apple gives you two kinds of files to prove who you are.

| | `.p8` | `.p12` |
|---|---|---|
| Type | Token-based key file (a short-lived password) | Older way |
| Tied to | All the apps in the developer account | Only one app |
| Expires | You do not need to renew it every year | Expires every single year |
| Apple's advice | Newer way | Apple does not recommend it anymore |

The `.p8` file is the newer way. You do not need to renew it every year, so there are no more surprises if the team forgets to do it.

The `.p12` file is the older way. It expires every year and it is tied to only one app. Apple does not recommend it, so **we are not going to use it**.

## What is a `.p8` File Really?

A `.p8` file is a **private key**. Apple already has the matching **public key**.

So how do we use it?

## The Problem: Proving You Own the Key Without Sending It

The problem we want to solve is this: how can we prove that we are the owner of the key without sending the key?

The answer is a **signature**. Think of the signature as the wax seal on a letter.

- The stamp is your `.p8` private key.
- Apple uses the public key to check that the seal is real and that we are the owners.

## What Are We Signing? A JWT

The letter that we sign is a **JWT**. It has three parts:

1. Header
2. Claims
3. Signature

### Header

The header answers this question: which key was used to sign the JWT?

You can have more than one `.p8` file, so we need to know the key ID.

```json
{
  "alg": "",
  "kid": ""
}
```

### Claims

The claims answer this question: which team ID was used?

```json
{
  "iss": "",
  "iat": ""
}
```

- `iss` is the issuer, which is the team ID.
- `iat` means "issued at".

### Signature

The signature is created from the private key and the header. It acts as the seal.

## Key Takeaways

- APNS needs to know your server's identity. If an attacker pretends to be your server, they could send push notifications to your customers.
- Apple needs to know that you are a registered developer and that you are allowed to send push notifications to the devices.
- Use a `.p8` file. It is tied to all the apps in your developer account and you do not need to renew it every year.
- Do not use `.p12`. It expires every year, it is tied to only one app, and Apple does not recommend it.
- A `.p8` file is a private key. Apple already has the public key.
- You prove that you own the key with a signature, like the wax seal on a letter, without sending the key.
- The letter is a JWT with a header (`alg`, `kid`), claims (`iss`, `iat`), and a signature.
