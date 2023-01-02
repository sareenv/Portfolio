
import React from 'react'
import CodeBlock from '../Utilities/CodeBlock'
import {Row, Col, Image, Container, ListGroup, Card} from 'react-bootstrap'
import Badger from '../Utilities/Badge'
const Article = () => { 
    return(
        <Row style={{padding: '1rem'}}> 
            
            <Col sm={12} md={12} lg={9} style={{maxWidth: '100%'}} >
                <h3 style={{textAlign: 'center'}}> <i> Memory Management in Swift  </i> </h3>
                <hr />
                <Container style={{backgroundColor: 'white', padding: '0.5rem', maxWidth: '100%'}}>

                    <Image fluid style={{maxHeight: '40rem', width: '100%'}} thumbnail src={"https://images.unsplash.com/photo-1572509018340-1fc13b5df491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
                    <p style={{textAlign: 'justify', fontSize: '18', marginTop: '2rem'}}>
                        Memory management is a critical part of application development, and it is the Software developer's responsibility to handle the user's resources as efficiently as possible.
                        However, the basics of memory management are not a centre point of interest for many new developers. 
                        So, this article will serve as the entry point to understanding the problem and why we should tackle it properly.
                    </p>

                    <ListGroup numbered style={{marginBottom: '1rem'}}>
                        <ListGroup.Item active> Topics </ListGroup.Item>
                        <ListGroup.Item> 1. What are retain cycles and strong references ? </ListGroup.Item>
                        <ListGroup.Item> 2. Why is this a problem, and what is the source of the occurrence ? </ListGroup.Item>
                        <ListGroup.Item> 3. What are the possible solutions? </ListGroup.Item>
                        <ListGroup.Item> 4. More Relevant References </ListGroup.Item>
                    </ListGroup>

                    <div>
                        <b>What is Retain Cycle?</b>
                        <p style={{textAlign: 'justify'}}>
                            Retain cycles: The state where two objects hold a strong reference to each other, 
                                and none of the resources is freed from the memory.
                            <div style={{backgroundColor: 'whitesmoke', padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
                                <b>Note: </b> An essential concept one has to understand is that Apple uses ARC [Automatic Reference Count]: To capture if the resource must be deallocated from memory or not based on if it’s referenced anywhere in the program. If it is not used anywhere in the program, the reference count becomes zero, and it’s deallocated from memory.
                            </div>

                            <h4> Lets consider a few examples to understand the concept </h4>

                        </p>


                        <CodeBlock style={{maxWidth: '1vw'}} language="swift" code={
                                
`import Foundation

class IdentificationCard {
    let identificationNumber: String
    
    public init(identificationNumber: String) {
        self.identificationNumber = identificationNumber
        
    }
    
    deinit {
        print("Deallocated memory for the identification card")
    }
}

IdentificationCard(identificationNumber: "40186182")`
                                                        } />

                        <p style={{textAlign: 'justify'}}>
                        In the code snippet mentioned above, the object of the Identification card has been initialized. Once line 16 has been executed, there is no other line that holds strong references, and the “reference count becomes zero”, and it has been de-initialized and freed from the memory.
                        </p>

                    <h4> Extending this example further </h4>

                    <CodeBlock style={{maxWidth: '1vw'}} language="swift" code={
                                
`import Foundation

class IdentificationCard {
    let identificationNumber: String

    public init(identificationNumber: String) {
        self.identificationNumber = identificationNumber

    }
    
    deinit {
        print("Deallocated memory for the identification card")
    }
}

let identification = IdentificationCard(identificationNumber: "40186182")`
                                                                                } />

                    <p style={{backgroundColor: 'whitesmoke', padding: '1rem'}}>
                    In this example mentioned above, the object has been stored in the variable which holds the reference to the object; as a result, the object has not been freed from the memory <b>because the reference count is not zero. </b>
                    </p>
                        

                    <CodeBlock style={{maxWidth: '1vw'}} language="swift" code={
                                
`import Foundation

class IdentificationCard {

    let identificationNumber: String

    public init(identificationNumber: String) {
        self.identificationNumber = identificationNumber
    }
    
    deinit {
        print("Deallocated memory for the identification card")
    }
}

let identification = IdentificationCard(identificationNumber: "40186182")
identification = nil`
                    } />

                    <p style={{textAlign: 'justify'}}>
                    To resolve this issue, we have to set the identification value to nil on line 17 to deallocate the object, as shown in the example above. I hope this provides a little bit of clarity on the concept of when the object is deallocated from memory. Now, let us understand the topic of Retain cycle with the help of an example.
                    In this example mentioned above, the object has been stored in the variable which holds the reference to the object; as a result, the object has not been freed from the memory because the reference count is not zero.
                    </p>

                    <Image fluid thumbnail src="https://miro.medium.com/max/720/1*04WEyOHpSiUF-bikXZT3_w.webp" style={{marginBottom: '1rem'}}></Image>
                    

                    <CodeBlock style={{maxWidth: '1vw', marginTop: '1rem'}} language="swift" code={ 
`import Foundation

class IdentificationCard {
    let identificationNumber: String
    let student: Student?
    public init(identificationNumber: String, student: Student?) {
        self.identificationNumber = identificationNumber
        self.student = student
    }
    
    deinit {
        print("Deallocated memory for the identification card")
    }
}



class Student {
    let name: String
    let age: Int
    var identificationCard: IdentificationCard?
    
    init(name: String, age: Int, identificationCard: IdentificationCard?) {
        self.name = name
        self.age = age
        self.identificationCard = identificationCard
    }
    
    deinit {
        print("Deallocated memory for the identification card")
    }
}

var student: Student? = Student(name: "Max", age: 21, identificationCard: nil)
var identificationCard: IdentificationCard? = IdentificationCard(identificationNumber: "8901982", student: student)
student?.identificationCard = identificationCard

student = nil
identificationCard = nil`
                                            } />

                    <p style={{backgroundColor: 'whitesmoke', padding: '1rem', textAlign: "justify"}}>
                        For this example, I have created two classes, a Student and an identification card, each referencing the other. 
                        Another representation of the above program is <i>presented as follows : </i>
                    </p>
                    
                    <Image fluid src="https://miro.medium.com/max/720/1*bKt69JqrlgWzAj8R0DuumQ.webp" thumbnail /> <br/>
                    <i> Abstract Diagram for Objects in Memory </i> <br/>
                    
                    The Student object in the memory holds a strong reference to the identification card object and vice versa as shown in the line number 21 and line 8 of the program mentioned above.
                    
                    <ol>
                        <li>
                            Blue circle representation depicts the line 34 ~ variable referencing to the student object.
                        </li>

                        <li>
                            Brown circle representation depicts the line 35 ~ variable referencing to the identification card object.
                        </li>

                        <li>
                            On line 36 we establish link from student to identification.
                        </li>
                    </ol>

                    <div style={{backgroundColor: 'whitesmoke', padding: '1rem', marginBottom: '1rem'}}>
                        <b>Important Question:</b> What will happen if the variables on line line 34 and 35 are set to nil (Does it free up the memory and call the deinit method or not ? )
                    </div>
                    
                    <p style={{textAlign: 'justify'}}>
                        Well, the answer to it is “No” let us discover why the deinit methods will never be called and why the memory is still not free just yet with the diagram as follows:
                    </p>
                    
                    <Image fluid thumbnail src={"https://miro.medium.com/max/720/1*aAE7QnAzQHReLeZQr_ZByQ.webp"}/>
                    <p>
                        As, we can see in the abstract diagram when we set the line 34 and line 35 to nil the links are disconnected to the objects of students and identification card.
                    </p>

                    <h4>What is the possible solution to this problem ? </h4>
                    <p style={{backgroundColor: 'whitesmoke', padding: '1rem', textAlign: "justify"}}>
                        While, there are many solutions to such problem one of the most adopted one is use of “weak” keyword in swift. — if the object holds a weak reference.
                        <br/> <b>Important Note: </b>Not only classes in swift but also the closures are prone to similar problem because it is also reference type. Therefore, if the closures holds a reference to self it needs to be of weak type also to ensure there is not a memory leak in the program.
                    </p>
                              
                    </div>

                </Container>
            </Col>
            <Col sm={12} md={12} lg={3}> 
                <h5 style={{textAlign: 'center', marginTop: '2rem'}}> More Articles </h5>
                <Card style={{display: 'flex', flexType: 'wrap', marginBottom: '2rem'}}>
                    <Image fluid  src={"https://sareenv-projects.s3.amazonaws.com/images/svswiper.png"}></Image>
                    <Card.Body>
                        <h5> iOS Onboarding Library — SVSwiper 2.0.1 </h5>
                        <Badger tag={"iOS Library"}/>
                        <p style={{textAlign: 'justify'}}>
                        In this article, I would love to share the iOS library I developed to be used with the UIKit applications.
                        </p>
                        
                    </Card.Body>
                </Card>
                
                <Card style={{display: 'flex', flexType: 'wrap'}}>
                    <Image fluid  src={"https://images.unsplash.com/photo-1532289608746-8aaaa40620f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}></Image>
                    <Card.Body>
                        <h5> Introduction to closure in Swift </h5>
                        <Badger tag={"UIKit"}/>
                        <p style={{textAlign: 'justify'}}>
                            The Clousers might seem complicated at first, but it is a straightforward concept, and once you understand it, it becomes effortless for you to use.
                        </p>
                        
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    )
}

export default Article;