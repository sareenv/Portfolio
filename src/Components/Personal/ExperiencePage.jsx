import React from 'react'
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import Contact from '../Contact/Contact'


function JobPosition() {
    return <Card>
        <Card.Title style={{ padding: '1rem' }}> Carrybags Limited </Card.Title>
        <Image thumbnail={true} style={{ width: '200px', height: '200px', objectFit: 'cover' }} roundedCircle={true} variant="top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFHIz3iJdalew/company-logo_200_200/0/1646322452937?e=1670457600&v=beta&t=fNjSBVyJ4CIvFoq3b96Hdi3h8kLqh-Iu9kKzusTUL3c" />

        <hr></hr>
        <Card.Body>

            <ul>
                <li> <b>Position: </b> Associate Software Engineer </li>
                <li> <b>Location: </b> Coventry, United Kingdom </li>
                <li> <b>Responsibilities: </b> <ol>
                    <li> Manged Development Team of 4 developers across three different time zones</li>
                    <li> Developed Mobile Application</li>
                    <li> Attended meetings with the stakeholders to negotiate and explain the supporting services</li>
                    <li> Performed unit and Acceptance Testing along with the QA team </li>
                    <li> Setup the CI/CD Pipeline to automate the deployment of Node.js application to ec2 instances </li>
                    <li> Worked on the OAuth2 and authentication related features of the backend APi</li>
                </ol>

                </li>
            </ul>

        </Card.Body>
    </Card>
}



const ExperiencePage = () => {
    return(
        <Container >
            <Row style={{marginTop: '0.5rem'}}>
                <Col  sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '40rem'}}>
                    {JobPosition()}
                                              
                </Col>

                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '40rem'}}>
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

