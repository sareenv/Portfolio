
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const ProjectDetails = () => {
    return (
        <Container>
            <Row style={{marginTop: '1rem'}}>
                <Col lg={6} style={{backgroundColor: 'white'}}>
                    <Image fluid src='https://letsbuildthatapp-videos.s3.us-west-2.amazonaws.com/8ecd376c-864a-4c68-8f14-f3d359cdbf49'></Image>
                        <Row>
                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid src='https://letsbuildthatapp-videos.s3.us-west-2.amazonaws.com/8ecd376c-864a-4c68-8f14-f3d359cdbf49'></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid src='https://letsbuildthatapp-videos.s3.us-west-2.amazonaws.com/8ecd376c-864a-4c68-8f14-f3d359cdbf49'></Image>
                            </Col>

                            <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                <Image fluid src='https://letsbuildthatapp-videos.s3.us-west-2.amazonaws.com/8ecd376c-864a-4c68-8f14-f3d359cdbf49'></Image>
                            </Col> 
                        </Row>
                    
                </Col>

                <Col lg={6} style={{backgroundColor: 'white', marginTop: 2}}>
                    <div>
                        <h5>
                            <b>SwiftUI Core Data Money Tracker with iPad Support</b>
                        </h5>
                        <p style={{color: 'grey'}}> Best practices for iPhone and iPad support using SwiftUI!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetails