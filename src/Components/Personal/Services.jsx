import React from 'react';
import {Row, Col, Container, Badge} from 'react-bootstrap'

const Service = () => {
    return (
        <Container style={{marginTop: '1rem'}}>
            <Row>
                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'red', minHeight: '20rem'}}>
                
                </Col>

                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'blue'}}>
            
                </Col>
            </Row>
        </Container>
    )
}

export default Service;