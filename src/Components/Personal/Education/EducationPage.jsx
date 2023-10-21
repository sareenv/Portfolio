
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Education from '../Education/Education'
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
        <div style={{ backgroundColor: 'white', paddingBottom: '2rem', borderRadius: '0.3rem' }}>
            <Container style={{ marginTop: '2rem' }}>
                <h3 style={{ marginTop: '2rem' }}>Higher Education</h3> <hr />
                
                <Row style={{backgroundColor: 'whitesmoke', padding: '0.4rem', paddingBottom: '1rem' }}>
                    <Col sm={12} md={12} lg={6} style={{ marginTop: '1rem' }}>
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

                    <Col sm={12} md={12} lg={6} style={{ marginTop: '1rem' }}>
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
                <h3 style={{ marginTop: '2rem' }}> Certifications </h3> <hr />
                
                <Row  style={{backgroundColor: 'whitesmoke', marginTop: '1rem', 
                    borderRadius: '0.3rem', paddingBottom: '1rem'}}>
                    <Col sm={12} md={12} lg={4}  style={{ marginTop: '1rem' }}>
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


                    <Col sm={12} md={12} lg={4} style={{ marginTop: '1rem' }} >
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

                    <Col sm={12} md={12} lg={4} style={{ marginTop: '1rem' }} >
                        <Education
                            image={GraphQLCertification.image}
                            qualification={GraphQLCertification.qualification}
                            instition={GraphQLCertification.instition}
                            visible={true}
                            bnttitle={'View Credentials'}
                            credLink={undefined}
                            issued={GraphQLCertification.issued}
                        />
                    </Col>

                    <Col sm={12} md={12} lg={4} style={{ marginTop: '1rem' }} >
                        <Education
                            image={JiraCertification.image}
                            qualification={JiraCertification.qualification}
                            instition={JiraCertification.instition}
                            visible={true}
                            bnttitle={'View Credentials'}
                            credLink={undefined}
                            issued={JiraCertification.issued}
                        />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default EducationPage;
