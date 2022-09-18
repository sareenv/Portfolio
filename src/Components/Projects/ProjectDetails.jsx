
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import React  from 'react';
import { useEffect, useState } from 'react';
import { FaGithub, FaVideo } from 'react-icons/fa';
import '../../Styles/product-details.scss'

const ProjectDetails = () => {
    const [displayImage, setDisplayImage] = useState("");
    useEffect(() => {
        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato5.png")
    }, [])

    return (
        <Container style={{paddingBottom: '2rem', backgroundColor: 'white'}}>
            <Row style={{marginTop: '1rem'}}>
                <Col lg={6} style={{backgroundColor: 'white'}}>
                    <Image
                        fluid
                        thumbnail = {true}
                        src={displayImage}>
                    </Image>
                        <Row style={{display: 'flex', justifyContent: 'start'}}>
                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato2.png'
                                    onClick={() =>{
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato2.png")
                                    }}
                                    ></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato3.png' 
                                    onClick={ () => {
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato3.png")
                                    }}></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato4.png'
                                    onClick={() => {
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato4.png")
                                    }}
                                    ></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato5.png' 
                                    onClick={() => {
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato5.png")
                                    }}
                                    ></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato6.png' 
                                    onClick={() => {
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato6.png")
                                    }}
                                    ></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid thumbnail={true}
                                    src='https://sareenv-projects.s3.amazonaws.com/images/cinemato7.png' 
                                    onClick={() => {
                                        setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato7.png")
                                    }}
                                    ></Image>
                            </Col>

                  
                        </Row>

                        
                    
                </Col>

                <Col lg={6} style={{backgroundColor: 'white', marginTop: '1.2rem'}}>
                    <div>
                        <h5>
                            <b>SwiftUI Core Data Money Tracker with iPad Support</b>
                        </h5>
                        <p style={{color: 'grey'}}> Best practices for iPhone and iPad support using SwiftUI!</p>
                    </div>

                    {/* Preview button */}
                    <div>
                        <Row noGutters={true} style={{margin: '0.5rem'}}>
                            <Col sm={9} noGutters={true} style={{paddingLeft: 0, paddingRight: '1rem'}}>
                                <Button> 
                                    <FaVideo />
                                    <>  Watch Preview </>
                                </Button>
                            </Col>
                            <Col sm={4}  style={{paddingLeft: 0, paddingRight: 0, marginTop: '0.8rem'}}>
                                <Button variant="light"> 
                                    <FaGithub />
                                    <>  Source Code </>
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <div className='description'>
                        SwiftUI is now in its second iteration and available for developers through Xcode 12. 
                        In this course, I'd like to teach you how to develop a real world application utilizing this new framework.
                        Much of the following lessons will go through the topics of laying out UI and filling the screen with dynamic data.
                    </div>

                    <Row>
                        <Col style={{marginTop: '1rem'}}>
                            <b> Concepts Used </b>
                            <ul>
                                <li> You want to explore the limits of SwiftUI </li>
                                <li> You want to build applications quickly and correctly </li>
                                <li> You want to learn about Reactive State Programming </li>
                                <li> You want to go through real world examples of View Models</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{marginTop: '1rem'}}>
                            <b> Project Configuration </b>
                            <ul>
                                <li> You want to explore the limits of SwiftUI </li>
                                <li> You want to build applications quickly and correctly </li>
                                <li> You want to learn about Reactive State Programming </li>
                                <li> You want to go through real world examples of View Models</li>
                            </ul>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetails