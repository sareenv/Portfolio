import React from "react";
import Project from "./Projects";
import {Row, Col, Image, Button} from 'react-bootstrap'
const ProjectsPage = () => {
    return (
        <div>
            <div style={{backgroundColor: 'white', minHeight: '65%', width: 'auto', margin: '1rem'}}>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                    <Image fluid={true} src="https://letsbuildthatapp-videos.s3.us-west-2.amazonaws.com/194badd9-b719-495b-bc77-3737115a9524"/> 
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <div style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
                               <h2 style={{paddingTop: '2rem', paddingLeft: '1rem'}}>
                                    SwiftUI Core Data Money Tracker with iPad Support
                               </h2>
                               <p style={{paddingTop: '0.3rem', paddingLeft: '1rem'}}> Best practices for iPhone and iPad support using SwiftUI!</p>
                            <Button variant="primary" style={{marginTop: '0.3rem', marginLeft: '1rem'}}> View Details </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Project />
        </div>
    )
}

export default ProjectsPage