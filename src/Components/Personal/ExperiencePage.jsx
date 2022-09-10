import React from 'react'
import {Container, Row, Col, Card, Image, ListGroup, Button} from 'react-bootstrap'
import Contact from '../Contact/Contact'


const JobPosition = (props) => {
    return (<Card style={{marginTop: '1rem'}}>
        
        <div style={{backgroundColor: props.color ,display: 'flex', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '2rem'}}>
            <Image roundedCircle={false} thumbnail={true} style={{ width: '120px', height: '120px', objectFit: 'cover' }}  variant="top" src = {props.logo} />
        </div>
        
           
        <Card.Body style={{padding: '0rem'}}>
            <ListGroup variant='flush'>
                <ListGroup.Item> 
                    <center>
                        <Button disabled={true} style={{opacity: '1'}} variant="dark"> <i> {props.company} </i>  </Button>
                    </center>  
                </ListGroup.Item>
                <ListGroup.Item > <b>Position: </b> <i> {props.title} </i> </ListGroup.Item>
                <ListGroup.Item> <b>Type:</b> {props.type}</ListGroup.Item>
                <ListGroup.Item> <b>Office Location: </b>
                    {props.location}
                 </ListGroup.Item>
                <ListGroup.Item> <b>Role desciption: </b> 
                    <ul style={{paddingLeft: '1rem'}}>
                        <li> Manged Development Team of 4 developers across three different time zones ~ Canada, UK and India</li>
                        <li> Developed Mobile Application ~ iOS Application with Swift & MVC architectural pattern</li>
                        <li> Attended meetings with the stakeholders to negotiate and explain the supporting services ~ Stripe UK, DPD</li>
                        <li> Performed unit and Acceptance Testing along with the QA team ~ XCTests </li>
                        <li> Setup the CI/CD Pipeline to automate the deployment of Node.js application to AWS EC2 instances ~ GitLabs </li>
                        <li> Worked on the OAuth2 and authentication related features of the REST API ~ Node.js</li>
                    </ul>
                </ListGroup.Item>
                
            </ListGroup>

        </Card.Body>
    </Card>
    )
}



const ExperiencePage = () => {
    return(
        <Container >
            <h3 style={{marginTop: '1rem'}}> Applied Experience </h3>
            <Row style={{marginTop: '0.5rem'}}>

                <Col  sm={12} md={12} lg={12} style={{backgroundColor: 'whitesmoke', minHeight: '40rem'}}>
                    <JobPosition
                        company = "Carrybags Limited"
                        color = "rgb(244 201 42)"
                        title="Associate Software Engineer"
                        type="Part-time"
                        location="The Enterprise Hub 5, Whitefriars Street, Coventry, United Kingdom"
                        logo="https://media-exp1.licdn.com/dms/image/C4E0BAQFHIz3iJdalew/company-logo_200_200/0/1646322452937?e=1670457600&v=beta&t=fNjSBVyJ4CIvFoq3b96Hdi3h8kLqh-Iu9kKzusTUL3c"
                    />            
                </Col>

                <Col sm={12} md={12} lg={12} style={{backgroundColor: 'whitesmoke', minHeight: '40rem', marginTop: '2rem'}}>
                    <JobPosition
                        company = "ASOP Pvt Ltd"
                        color = "rgb(175 25 25)"
                        title = "Junior Mobile Application Developer"
                        type = "Contract" 
                        location = "SBS Nagar Nawanshahr Punjab, India"
                        logo="https://media-exp1.licdn.com/dms/image/C560BAQEjCSpbKs2q1g/company-logo_200_200/0/1567672229702?e=1671062400&v=beta&t=7IVTLIm9o425c3izi5Rsy73zKejl20RJAphN2BTYyCA"
                    />       
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


