
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Education from '../Education/Education'
import Footer from '../../Footer'
import {
    ConcordiaDetails, AWSCertification,
    CoventryDetails, DockerCertification, 
    JiraCertification, GraphQLCertification
} from '../details';
import ReactGA from 'react-ga'
const EducationPage = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <Container style={{ marginTop: '4rem' }}>
                {/* Page Header */}
                <Row style={{marginBottom: '3rem'}}>
                    <Col>
                        <h3 style={{
                            marginTop: '2rem',
                            fontSize: '1.8rem',
                            fontWeight: 600,
                            color: '#003049',
                            marginBottom: '0.5rem'
                        }}>Academic Background & Professional Certifications</h3>
                        <p style={{
                            fontSize: '1.05rem',
                            color: '#666',
                            marginBottom: '1.5rem'
                        }}>Continuous learning and professional development journey</p>
                        <hr style={{
                            borderTop: '2px solid #e8e8e8',
                            marginBottom: 0
                        }}/>
                    </Col>
                </Row>

                {/* Higher Education Section */}
                <Row style={{marginBottom: '1rem'}}>
                    <Col>
                        <h4 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#003049',
                            marginBottom: '0.5rem'
                        }}>Higher Education</h4>
                        <p style={{
                            fontSize: '1rem',
                            color: '#666',
                            marginBottom: '1.5rem'
                        }}>Graduate and undergraduate academic qualifications</p>
                    </Col>
                </Row>
                
                <Row style={{marginBottom: '4rem'}}>
                    <Col sm={12} md={12} lg={6} style={{ marginBottom: '2rem' }}>
                        <Education
                            image={ConcordiaDetails.image}
                            qualification={ConcordiaDetails.qualification}
                            instition={ConcordiaDetails.instition}
                            address={ConcordiaDetails.address}
                            modules={false}
                            courses={ConcordiaDetails.course}
                            key={ConcordiaDetails.id}
                            issued={"Summer 2023"}
                            isHE={true}
                        />
                    </Col>

                    <Col sm={12} md={12} lg={6} style={{ marginBottom: '2rem' }}>
                        <Education
                            image={CoventryDetails.image}
                            qualification={CoventryDetails.qualification}
                            instition={CoventryDetails.instition}
                            issued={"Summer 2020"}
                            modules={false}
                            credLink={"https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"}
                            courses={CoventryDetails.course}
                            key={CoventryDetails.id}
                            isHE={true}
                        />
                    </Col>
                </Row>
                
                {/* Certifications Section */}
                <Row style={{marginBottom: '1rem'}}>
                    <Col>
                        <h4 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#003049',
                            marginBottom: '0.5rem'
                        }}>Professional Certifications</h4>
                        <p style={{
                            fontSize: '1rem',
                            color: '#666',
                            marginBottom: '1.5rem'
                        }}>Industry-recognized credentials demonstrating specialized expertise</p>
                    </Col>
                </Row>
                
                <Row style={{marginBottom: '2rem'}}>
                    <Col sm={12} md={6} lg={4} style={{ marginBottom: '2rem' }}>
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


                    <Col sm={12} md={6} lg={4} style={{ marginBottom: '2rem' }}>
                        <Education
                            image={DockerCertification.image}
                            qualification={DockerCertification.qualification}
                            instition={DockerCertification.instition}
                            visible={true}
                            bnttitle={'View Credentials'}
                            credLink={DockerCertification.credLink}
                            issued={DockerCertification.issued}
                            certificateID={"UC-4069f5bf-57db-400e-b3fc-15a69bfcb79a"}
                        />
                    </Col>

                    <Col sm={12} md={6} lg={4} style={{ marginBottom: '2rem' }}>
                        <Education
                            image={GraphQLCertification.image}
                            qualification={GraphQLCertification.qualification}
                            instition={GraphQLCertification.instition}
                            visible={true}
                            bnttitle={'Updating soon'}
                            credLink={undefined}
                            issued={GraphQLCertification.issued}
                        />
                    </Col>

                    <Col sm={12} md={6} lg={4} style={{ marginBottom: '2rem' }}>
                        <Education
                            image={JiraCertification.image}
                            qualification={JiraCertification.qualification}
                            instition={JiraCertification.instition}
                            visible={true}
                            bnttitle={'Updating soon'}
                            credLink={undefined}
                            issued={JiraCertification.issued}
                        />
                    </Col>

               
                </Row>
            </Container>

            <Container style={{padding: '1rem'}}>
                <Footer />
            </Container>
        </div>
    )
}

export default EducationPage;
