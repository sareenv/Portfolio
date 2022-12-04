import React  from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/about.scss'
import '../../Styles/base.scss'
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import {ConcordiaDetails,  CoventryDetails} from "./details"


const Education = (props) => {
    return (    
        <Card style={{display: 'flex', flexType: 'wrap'}}>
                <Image   className="customThumbnail" src={props.image}></Image>
                <Card.Body>
                
                        <span>
                            <div>
                                <b> Qualification: {props.qualification}</b> 
                            </div>

                            <div>
                                <b> Institution: </b> {props.instition}
                            </div>

                            {props.issued != null && 
                                <div>
                                   <b>Issued: </b> {props.issued}
                                </div>
                            }

                            {
                                props.certificateID != null && 
                                <div>
                                    <b>Credential ID:</b> {props.certificateID}
                                </div>
                            }

                            
                            {props.address != null && 
                                <div>
                                    <b> Address: </b> {props.address}
                                </div>
                            }
                            
                            {props.modules === true &&
                                <div>
                                <Card.Header style={{marginTop: '1rem'}}><b>Relevant Modules </b></Card.Header>
                                    <ListGroup variant="flush">
                                        {props.courses != null && props.courses.map(function(course) {
                                            return (
                                                <ListGroup.Item key={course.id}> • {course} </ListGroup.Item>
                                            ) 
                                        })}
                                        
                                    </ListGroup>
                                </div>
                            }       
                        </span>

                    </Card.Body>

                    {props.visible === true && 
                        <Button className="customLink" disabled={false} style={{margin: '1rem'}} href={props.credLink}> {props.bnttitle} </Button>
                    }

                    
        </Card>
    )
}


const About = () => {
    return(
        <div>
            <Container  style={{marginTop: '2rem'}}> 
                <Row style={{backgroundColor: 'white'}}>
                    <Col  sm={12} md={12} lg={5} style={{paddingTop: '3rem'}}>
                        <center>
                        <h2> Education Background </h2>
                        <hr className="customline"></hr>

                        <Container>
                            <Education 
                                image={ConcordiaDetails.image}
                                qualification={ConcordiaDetails.qualification} 
                                instition={ConcordiaDetails.instition} 
                                address={ConcordiaDetails.address}  
                            />
                        </Container>
                        <div style={{height: '55px'}}></div>

                        <Container>
                            <Education style={{marginTop: '2px'}}
                                image={CoventryDetails.image}
                                qualification={CoventryDetails.qualification} 
                                instition={CoventryDetails.instition} 
                                address={CoventryDetails.address}  
                            />
                        </Container>
                        
                    </center>
                    </Col>

                   
                    <Col sm={12} md={12} lg={7}>
                        <div className='aboutSection' style={{padding: 0, margin: '1rem'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h2> About Me </h2>
                            </div>
                            <hr />
                            <div>
                            
                                <p>
                                I am a passionate FullStack Software Development Engineer with hands-on experience in creating iOS mobile applications and web applications in personal, academic and professional environments using Agile methodologies. I'm also an AWS certified Cloud Practitioner (CLF-CO1) with sufficient knowledge of cloud technologies. While I was enrolled in the Master of Software Engineering in Gina Cody School of Computing program at Concordia University, Montreal, Canada. I worked on several academic projects involving diversity of technologies from the topic areas such as Distributed Systems, Advanced Software Architecture, Problem Solving and Applied Artificial Intelligence. </p>
                                <p>
                                In the past I had  worked in the United Kingdom  as Associate Software Engineer where I worked with a team size of four software developers in three time zones (GMT+1, EST and IST) and responsible for developing the mobile scalable Mobile Application for iOS platform and collaborating with software developers to deliver the required functionality using technologies such as RabbitMQ for low coupled communication between the microservices developed in the Node.js and deploying the services to the EC2 instances and auto-scaling group (ASG) in AWS cloud platform. 
                                I strongly believe in adapting to the tools and technology as per the requirements of the project and try to be technology agnostic and develop the requirements as per the internal discussion with the teams. 
                                </p>
                                <p>
                                Please don’t hesitate to contact me over the contact form or email and I’ll try to get back to you as soon as possible. 
                                </p>
                            </div>
                            
                        </div>
                    </Col>
                </Row> 
        </Container>
        </div>
        
    )
}

export default About
export {Education}