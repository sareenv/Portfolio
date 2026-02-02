import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Footer'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import {
    ConcordiaDetails, AWSCertification,
    CoventryDetails, DockerCertification, 
    JiraCertification, GraphQLCertification
} from '../details';
import ReactGA from 'react-ga'

// Education Card Component
const EducationCard = ({ image, qualification, institution, address, issued, credLink, courses }) => (
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    }}
    >
        {/* Logo Section */}
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '160px'
        }}>
            <img 
                src={image} 
                alt={institution}
                style={{
                    maxHeight: '100px',
                    maxWidth: '200px',
                    objectFit: 'contain'
                }}
            />
        </div>
        
        {/* Content Section */}
        <div style={{
            padding: '2rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '0.5rem',
                lineHeight: 1.3
            }}>
                {qualification}
            </h3>
            
            <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '1rem'
            }}>
                {institution}
            </p>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: '#888'
            }}>
                {address && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <FaMapMarkerAlt size={12} />
                        {address.split(',').slice(1, 3).join(',')}
                    </span>
                )}
                {issued && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <FaCalendarAlt size={12} />
                        {issued}
                    </span>
                )}
            </div>
            
            {/* Courses Preview */}
            {courses && courses.length > 0 && (
                <div style={{ marginTop: 'auto' }}>
                    <p style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#1a1a2e',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Key Courses
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                    }}>
                        {courses.slice(0, 4).map((course, i) => (
                            <span key={i} style={{
                                fontSize: '0.8rem',
                                padding: '0.35rem 0.75rem',
                                backgroundColor: '#f0f4f8',
                                borderRadius: '20px',
                                color: '#555'
                            }}>
                                {course}
                            </span>
                        ))}
                        {courses.length > 4 && (
                            <span style={{
                                fontSize: '0.8rem',
                                padding: '0.35rem 0.75rem',
                                backgroundColor: '#1a1a2e',
                                borderRadius: '20px',
                                color: '#fff'
                            }}>
                                +{courses.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
            )}
            
            {credLink && (
                <a 
                    href={credLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '1.5rem',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#2d3748',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                    }}
                >
                    View Certificate <FaExternalLinkAlt size={12} />
                </a>
            )}
        </div>
    </div>
);

// Certification Card Component
const CertificationCard = ({ image, qualification, institution, issued, credLink, certificateID }) => (
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        padding: '1.5rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #f0f0f0'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
        e.currentTarget.style.borderColor = '#e0e0e0';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
        e.currentTarget.style.borderColor = '#f0f0f0';
    }}
    >
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem'
        }}>
            {/* Logo */}
            <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '0.5rem'
            }}>
                <img 
                    src={image} 
                    alt={qualification}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                    }}
                />
            </div>
            
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1a1a2e',
                    marginBottom: '0.25rem',
                    lineHeight: 1.3
                }}>
                    {qualification}
                </h4>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    marginBottom: '0.5rem'
                }}>
                    {institution}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: '#888'
                }}>
                    <FaCalendarAlt size={11} />
                    {issued}
                </div>
            </div>
        </div>
        
        {/* Footer */}
        <div style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {credLink ? (
                <a 
                    href={credLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#00b4d8',
                        textDecoration: 'none'
                    }}
                >
                    View Credential <FaExternalLinkAlt size={10} />
                </a>
            ) : (
                <span style={{
                    fontSize: '0.8rem',
                    color: '#999',
                    fontStyle: 'italic'
                }}>
                    Certificate pending
                </span>
            )}
            
            {credLink && (
                <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    backgroundColor: '#e8f5e9',
                    color: '#2e7d32',
                    borderRadius: '20px',
                    fontWeight: 500
                }}>
                    Verified
                </span>
            )}
        </div>
    </div>
);

const EducationPage = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)',
                padding: '8rem 0 5rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background decoration */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '15%',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(74, 111, 165, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }} />
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <p style={{
                                color: 'rgba(248, 249, 250, 0.7)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem'
                            }}>
                                Education & Certifications
                            </p>
                            <h1 style={{
                                color: '#f8f9fa',
                                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                                fontWeight: 700,
                                marginBottom: '1.25rem',
                                lineHeight: 1.2
                            }}>
                                Academic Background &<br />Professional Development
                            </h1>
                            <p style={{
                                color: 'rgba(241, 250, 238, 0.8)',
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                maxWidth: '550px',
                                margin: '0 auto'
                            }}>
                                A foundation of formal education combined with continuous 
                                learning through industry certifications and hands-on experience.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Higher Education Section */}
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '5rem 0'
            }}>
                <Container>
                    <Row style={{ marginBottom: '3rem' }}>
                        <Col>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.75rem'
                            }}>
                                
                                <h2 style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
                                    fontWeight: 700,
                                    color: '#1a1a2e',
                                    margin: 0
                                }}>
                                    Higher Education
                                </h2>
                            </div>
                            <p style={{
                                color: '#666',
                                fontSize: '1.05rem',
                                maxWidth: '500px'
                            }}>
                                Graduate and undergraduate qualifications from internationally recognized institutions.
                            </p>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={12} lg={6} style={{ marginBottom: '2rem' }}>
                            <EducationCard
                                image={ConcordiaDetails.image}
                                qualification={ConcordiaDetails.qualification}
                                institution={ConcordiaDetails.instition}
                                address={ConcordiaDetails.address}
                                issued="2021 - 2023"
                                courses={ConcordiaDetails.course}
                            />
                        </Col>
                        <Col xs={12} lg={6} style={{ marginBottom: '2rem' }}>
                            <EducationCard
                                image={CoventryDetails.image}
                                qualification={CoventryDetails.qualification}
                                institution={CoventryDetails.instition}
                                address={CoventryDetails.address}
                                issued="2017 - 2020"
                                courses={CoventryDetails.course}
                                credLink="https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Certifications Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '5rem 0'
            }}>
                <Container>
                    <Row style={{ marginBottom: '3rem' }}>
                        <Col>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.75rem'
                            }}>
                                <HiBadgeCheck size={28} color="#2d3748" />
                                <h2 style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
                                    fontWeight: 700,
                                    color: '#1a1a2e',
                                    margin: 0
                                }}>
                                    Professional Certifications
                                </h2>
                            </div>
                            <p style={{
                                color: '#666',
                                fontSize: '1.05rem',
                                maxWidth: '500px'
                            }}>
                                Industry-recognized credentials demonstrating specialized expertise and commitment to growth.
                            </p>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={12} md={6} lg={3} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={AWSCertification.image}
                                qualification={AWSCertification.qualification}
                                institution={AWSCertification.instition}
                                issued={AWSCertification.issued}
                                credLink={AWSCertification.credLink}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={DockerCertification.image}
                                qualification={DockerCertification.qualification}
                                institution={DockerCertification.instition}
                                issued={DockerCertification.issued}
                                credLink={DockerCertification.credLink}
                                certificateID={DockerCertification.certificateID}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={GraphQLCertification.image}
                                qualification={GraphQLCertification.qualification}
                                institution={GraphQLCertification.instition}
                                issued={GraphQLCertification.issued}
                                credLink={GraphQLCertification.credLink}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={JiraCertification.image}
                                qualification={JiraCertification.qualification}
                                institution={JiraCertification.instition}
                                issued={JiraCertification.issued}
                                credLink={JiraCertification.credLink}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default EducationPage;
