
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Education} from '../Personal/About'
import { ConcordiaDetails } from './details';
// this is most likely not change at all.
const EducationPage = () => {
    return (
        <Container style={{marginTop: '2rem'}}>
            <h3>Higher Education </h3>
            <Row>
                <Col sm={12} md={12} lg={5}>
                    <Education 
                        image={ConcordiaDetails.image}
                        qualification={ConcordiaDetails.qualification} 
                        instition={ConcordiaDetails.instition} 
                        address={ConcordiaDetails.address}  
                    />
                </Col>


                <Col sm={12} md={12} lg={5}>
                    <Education 
                        image={ConcordiaDetails.image}
                        qualification={ConcordiaDetails.qualification} 
                        instition={ConcordiaDetails.instition} 
                        address={ConcordiaDetails.address}  
                    />
                </Col>
            </Row>
            
            <h3 style={{marginTop: '2rem'}}>Certification & Licensing Education </h3>
            <Row>
                <Col sm={12} md={12} lg={5}>
                    <Education 
                        image={ConcordiaDetails.image}
                        qualification={ConcordiaDetails.qualification} 
                        instition={ConcordiaDetails.instition} 
                        address={ConcordiaDetails.address}  
                    />
                </Col>


                <Col sm={12} md={12} lg={5}>
                    <Education 
                        image={ConcordiaDetails.image}
                        qualification={ConcordiaDetails.qualification} 
                        instition={ConcordiaDetails.instition} 
                        address={ConcordiaDetails.address}  
                    />
                </Col>
            </Row>
        </Container>
        
    )
}

export default EducationPage;
