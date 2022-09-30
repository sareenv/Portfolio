
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Education} from '../Personal/About'
import { ConcordiaDetails, AWSCertification, CoventryDetails, DockerCertification } from './details';

const EducationPage = () => {
    return (
        <div style={{backgroundColor: 'white', paddingBottom: '2rem'}}>
            <Container style={{marginTop: '2rem'}}>
                <h3 style={{marginTop: '2rem'}}>Higher Education </h3>
                <hr/>
                <Row >
                    
                <Col sm={12} md={11} lg={7} style={{marginBottom: '1rem'}}>
                        <Education 
                            image={ConcordiaDetails.image}
                            qualification={ConcordiaDetails.qualification} 
                            instition={ConcordiaDetails.instition} 
                            address={ConcordiaDetails.address}
                            modules={true}
                            courses={ConcordiaDetails.course}
                            key={ConcordiaDetails.id}
                        />
                </Col>
                
                <Col sm={12} md={11} lg={5}>
                        <Education 
                            image={CoventryDetails.image}
                            qualification={CoventryDetails.qualification} 
                            instition={CoventryDetails.instition} 
                            address={CoventryDetails.address}
                            modules={true}
                            visible={true}
                            bnttitle={"Degree Certificate"}
                            credLink={"https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"}
                            courses={CoventryDetails.course}
                            key={CoventryDetails.id}
                        />
                    </Col>
                </Row>

                    <h3 style={{marginTop: '2rem'}}>Certifications & Licensing Education </h3>
                    <Row>

                    <Col sm={12} md={12} lg={7}>
                        <Education 
                            image={DockerCertification.image}
                            qualification={DockerCertification.qualification} 
                            instition={DockerCertification.instition} 
                            visible={true}
                            bnttitle={'View Credentials'}
                            credLink={DockerCertification.credLink}
                            issued={DockerCertification.issued}
                        />
                    </Col>

                        <Col sm={12} md={12} lg={4}>
                            <Education 
                                image={AWSCertification.image}
                                qualification={AWSCertification.qualification} 
                                instition={AWSCertification.instition} 
                                visible={true}
                                bnttitle={'View Credentials'}
                                credLink={AWSCertification.credLink}
                                issued={AWSCertification.issued}
                            />
                        </Col>

                        

                        

                    </Row>
            </Container>
        </div>
    )
}

export default EducationPage;
