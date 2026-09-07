# Introduction to the CAP Theorem

The CAP theorem addresses the fundamental constraints of distributed systems.

## What is a Network Partition?

To understand this concept at its core, imagine a scenario where two servers are hosted in different physical locations and suddenly lose the ability to communicate due to a network interruption. 

When these servers continue to function independently but can no longer interact or synchronize with each other, the system experiences what is known as a **network partition**.

## The Core Dilemma: Consistency vs. Availability

To build on this idea, consider the example of two bank servers, **S1** and **S2**:
- **S1** is hosted in Canada.
- **S2** is hosted in the USA.

![CAP Theorem Diagram](/Assets/articles/CAP.png)

During a network partition, the system is forced to make a choice between **consistency** and **availability**.

### Prioritizing Availability

If you decide to prioritize availability over consistency, the system simply serves whatever data is available on the local server where the request lands. 

While this keeps the system running, it is typically a poor choice for banking:
- A user could see inconsistent or incorrect data depending on which server they hit.
- Because banks require very strong consistency, they choose to trade off availability by returning an error code rather than displaying potentially wrong information.

### When Availability Is the Right Trade-Off

On the other hand, there are many situations where strict consistency is not as critical as it is in finance:
- **User Profiles**: When displaying a user's profile, it is often acceptable to make a trade-off in favor of availability. Even if the profile information is not the most up-to-date version, the impact is minimal.
- **Account Balances**: This flexibility does not apply to banking scenarios. When a user's actual balance is displayed, accuracy must take precedence over availability.