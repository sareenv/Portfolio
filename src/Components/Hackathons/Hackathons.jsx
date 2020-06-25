import React from 'react'
import hackathonImage from '../../CovHack.jpg'
import { Button, Container, Row, Col } from 'react-bootstrap'

const HackathonProject = () => {
    return (
        <Container fluid style={{margin: 10}}>
                    <Row>
                        <Col>
                            <img src={hackathonImage} style={{height: 210}}/>
                        </Col>

                        <Col>
                            <img src={hackathonImage} style={{height: 210}}/>
                        </Col>

                        <Col>
                            <div>
                                <img src={hackathonImage} style={{height: 210}}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
    )
}

const HackathonPage = () => {
    return(
        <div style={{margin: 20}}>
            <div>
            <h2 style={{margin: 15}}> COVHACK2020 </h2>
                <HackathonProject />
                <HackathonProject />
            </div>
        </div>
    )
}

export default HackathonPage
