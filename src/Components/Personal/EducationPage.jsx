
import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Education} from '../Personal/About'
import Footer from '../Footer';
import { ConcordiaDetails, AWSCertification, CoventryDetails, DockerCertification } from './details';
import ReactGA from 'react-ga'
const EducationPage = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div style={{backgroundColor: 'white', paddingBottom: '5rem'}}>
            <Container style={{marginTop: '2rem'}}>
                <h3 style={{marginTop: '2rem'}}>Higher Education </h3>
                <hr/>
                <Row >
                    
                    <Col sm={12} md={11} lg={6}  style={{marginTop: '1rem'}}>
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
                
                    <Col sm={12} md={11} lg={6} style={{marginTop: '1rem'}} >
                        <Education 
                            
                            image={CoventryDetails.image}
                            qualification={CoventryDetails.qualification} 
                            instition={CoventryDetails.instition} 
                            address={CoventryDetails.address}
                            modules={true}
                            // visible={true}
                            // bnttitle={"Degree Certificate"}
                            credLink={"https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"}
                            courses={CoventryDetails.course}
                            key={CoventryDetails.id}
                            
                        />
                    </Col>
                </Row>

                <h3 style={{marginTop: '2rem'}}>Certifications & Licensing Education </h3>
                <Row>

                        <Col sm={12} md={12} lg={6} style={{marginTop: '1rem'}}>
                            <Education 
                                image={DockerCertification.image}
                                qualification={DockerCertification.qualification} 
                                instition={DockerCertification.instition} 
                                visible={true}
                                bnttitle={'View Credentials'}
                                credLink={DockerCertification.credLink}
                                issued={DockerCertification.issued}
                                certificateID={DockerCertification.certificateID}
                            />
                        </Col>
                        <Col sm={12} md={12} lg={6} style={{marginTop: '1rem'}}>
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
            <Footer />
        </div>
    )
}

export default EducationPage;
