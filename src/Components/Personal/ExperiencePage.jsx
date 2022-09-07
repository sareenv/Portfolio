import React from 'react'
import {Container, Row, Col, Card, Image, ListGroup, Button} from 'react-bootstrap'
import Contact from '../Contact/Contact'


function JobPosition() {
    return <Card style={{marginTop: '1rem'}}>
        
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
            <Image roundedCircle={false} thumbnail={true} style={{ width: '120px', height: '120px', objectFit: 'cover' }}  variant="top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFHIz3iJdalew/company-logo_200_200/0/1646322452937?e=1670457600&v=beta&t=fNjSBVyJ4CIvFoq3b96Hdi3h8kLqh-Iu9kKzusTUL3c" />
        </div>
           
        <Card.Body>
            <ListGroup variant='flush'>
                <ListGroup.Item> 
                    <center>
                        <Button disabled={true}> <i> Carrybags Limited </i>  </Button>
                    </center>  
                </ListGroup.Item>
                <ListGroup.Item > <b>Position: </b> <i> Associate Software Engineer ~ FullStack Application Developer </i> </ListGroup.Item>
                <ListGroup.Item> <b>Type:</b> Part-time</ListGroup.Item>
                <ListGroup.Item> <b>Office Location: </b> Carrybags Limited
                    The Enterprise Hub 5, Whitefriars Street, Coventry, United Kingdom
                 </ListGroup.Item>
                <ListGroup.Item> <b>Role desciption: </b> 
                    <ul>
                        <li> Manged Development Team of 4 developers across three different time zones ~ Canada, UK and India</li>
                        <li> Developed Mobile Application ~ iOS Application with Swift</li>
                        <li> Attended meetings with the stakeholders to negotiate and explain the supporting services ~ Stripe UK, DPD</li>
                        <li> Performed unit and Acceptance Testing along with the QA team ~ XCTests </li>
                        <li> Setup the CI/CD Pipeline to automate the deployment of Node.js application to AWS EC2 instances ~ GitLabs </li>
                        <li> Worked on the OAuth2 and authentication related features of the REST API ~ Node.js</li>
                    </ul>
                </ListGroup.Item>
                
            </ListGroup>

        </Card.Body>
    </Card>
}



const ExperiencePage = () => {
    return(
        <Container >
            <Row style={{marginTop: '0.5rem'}}>
                <Col  sm={12} md={12} lg={12} style={{backgroundColor: 'whitesmoke', minHeight: '40rem'}}>
                    {JobPosition()}                  
                </Col>
            </Row>

            <Row>
                <Col>
                    <Contact />
                </Col>
            </Row>

        </Container>
    )
}

export default ExperiencePage;
export {JobPosition};

