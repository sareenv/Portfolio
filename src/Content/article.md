<h3 style="textAlign: center"> <i>Memory Management in Swift </i></h3>

<img src="https://images.unsplash.com/photo-1572509018340-1fc13b5df491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>

<p style="margin-top: 1rem">Memory management is a critical part of application development, and it is the Software developer's responsibility to handle the user's resources as efficiently as possible. However, the basics of memory management are not a centre point of interest for many new developers. So, this article will serve as the entry point to understanding the problem and why we should tackle it properly</p>

<h4> What is Retain Cycle? </h4>
Retain cycles: The state where two objects hold a strong reference to each other, and none of the resources is freed from the memory.

<note style="margin: 1rem">
    An essential concept one has to understand is that Apple uses ARC [Automatic Reference Count]: To capture if the resource must be deallocated from memory or not based on if it’s referenced anywhere in the program. If it is not used anywhere in the program, the reference count becomes zero, and it’s deallocated from memory.
</note>

<code>
```import Foundation 
class IdentificationCard {

    let identificationNumber: String

    public init(identificationNumber: String) {

        self.identificationNumber = identificationNumber

    }
    deinit {

        print("Deallocated memory for the identification card")

    }
}

IdentificationCard(identificationNumber: "40186182")```
</code>







