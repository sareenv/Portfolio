import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Footer'
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import {
    ConcordiaDetails, AWSCertification,
    CoventryDetails, DockerCertification, 
    JiraCertification, GraphQLCertification
} from '../details';
import ReactGA from 'react-ga'
import educationCertificationsDicebear from '../../../Assets/education-certifications-dicebear.svg'
import covhackLogo from '../../../Assets/logos/covhack-2020.png'
import swiftIndiaLogo from '../../../Assets/logos/swift-india-logo.jpg'
import conferenceDicebear from '../../../Assets/conference-dicebear.svg'
import hackathonDicebear from '../../../Assets/hackathon-dicebear.svg'

const educationHighlights = {
    concordia: {
        credential: 'Graduate degree',
        descriptionPoints: [
            'Advanced software engineering program focused on architecture, maintainability, and system design.',
            'Strengthened practical engineering judgement through graduate-level project and research work.'
        ]
    },
    coventry: {
        credential: 'Undergraduate honours degree',
        descriptionPoints: [
            'Computer science foundation spanning algorithms, operating systems, networking, and software engineering.',
            'Included applied development work across mobile and web systems, with degree certificate available for review.'
        ]
    }
};

const certificationDescriptions = {
    aws: 'Validates cloud fundamentals across AWS services, security, architecture, pricing, and support models.',
    docker: 'Covers container workflows, image management, and practical Docker usage for local and deployment environments.',
    graphql: 'Builds API schema design and query fundamentals for modern client-server data workflows.',
    jira: 'Supports agile delivery practices, issue tracking, workflow visibility, and team collaboration in Jira.'
};

const learningEvents = [
    {
        title: 'Swift India Developer Conference',
        type: 'Conference',
        image: swiftIndiaLogo,
        dicebear: conferenceDicebear,
        points: [
            'Participated in a 2018 iOS developer conference with sessions focused on modern Apple platform development.',
            'Learned from experienced iOS engineers across SwiftUI, compositional layouts, Combine, and persistence patterns.',
            'Built practical understanding of UICollectionViewCompositionalLayout and later applied those concepts in project work.',
            'Attended multi-part sessions delivered by domain experts from the wider mobile development community.'
        ]
    },
    {
        title: 'CovHack 2020',
        type: 'Hackathon',
        image: covhackLogo,
        dicebear: hackathonDicebear,
        points: [
            'Collaborated with four university students across the United Kingdom on a team-based hackathon project.',
            'Developed a Chrome extension for profanity detection using JavaScript and a Django REST API.',
            'Helped collect and prepare labelled text data for classifier training with Keras.',
            'Evaluated a Naive Bayes classifier with a confusion matrix and visualized results using Matplotlib.',
            'Integrated Twilio SMS notifications to alert users when profane text was detected.'
        ]
    }
];

// Education Card Component
const EducationCard = ({ image, qualification, institution, address, issued, credLink, credential, descriptionPoints = [] }) => (
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
            backgroundColor: '#F5F3EE',
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
                color: '#14213D',
                marginBottom: '0.5rem',
                lineHeight: 1.3
            }}>
                {qualification}
            </h3>
            
            <p style={{
                fontSize: '1rem',
                color: '#334E68',
                marginBottom: '0.85rem'
            }}>
                {institution}
            </p>

            {credential && (
                <span style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#B45309',
                    backgroundColor: '#FEF3C7',
                    border: '1px solid #FCD34D',
                    borderRadius: '999px',
                    padding: '0.3rem 0.7rem',
                    marginBottom: '1rem'
                }}>
                    {credential}
                </span>
            )}
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: credLink ? '1.5rem' : 0,
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

            {descriptionPoints.length > 0 && (
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: credLink ? '0 0 0.25rem' : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                }}>
                    {descriptionPoints.map((point, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            color: '#334E68',
                            fontSize: '0.92rem',
                            lineHeight: 1.55
                        }}>
                            <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#D97706',
                                marginTop: '0.55rem',
                                flexShrink: 0
                            }} />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
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
const CertificationCard = ({ image, qualification, institution, issued, credLink, description }) => (
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        boxShadow: '0 8px 26px rgba(20,33,61,0.08)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E2DED6',
        overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 34px rgba(20,33,61,0.12)';
        e.currentTarget.style.borderColor = '#D6CFC3';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 26px rgba(20,33,61,0.08)';
        e.currentTarget.style.borderColor = '#E2DED6';
    }}
    >
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        }}>
            {/* Logo */}
            <div style={{
                minHeight: '128px',
                backgroundColor: '#F5F3EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
            }}>
                <img 
                    src={image} 
                    alt={qualification}
                    style={{
                        maxWidth: '180px',
                        maxHeight: '82px',
                        objectFit: 'contain'
                    }}
                />
            </div>
            
            {/* Content */}
            <div style={{
                flex: 1,
                minWidth: 0,
                padding: '1.5rem 1.5rem 0'
            }}>
                <h4 style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#14213D',
                    marginBottom: '0.35rem',
                    lineHeight: 1.35,
                    overflowWrap: 'break-word'
                }}>
                    {qualification}
                </h4>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#334E68',
                    marginBottom: '0.7rem'
                }}>
                    {institution}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: '#627D98'
                }}>
                    <FaCalendarAlt size={11} />
                    {issued}
                </div>

                {description && (
                    <p style={{
                        fontSize: '0.86rem',
                        color: '#334E68',
                        lineHeight: 1.55,
                        margin: '1rem 0 0'
                    }}>
                        {description}
                    </p>
                )}
            </div>
        </div>
        
        {/* Footer */}
        <div style={{
            marginTop: 'auto',
            padding: '1rem 1.5rem 1.5rem',
            borderTop: '1px solid #EEE7DC',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
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
                        fontWeight: 700,
                        color: '#B45309',
                        textDecoration: 'none'
                    }}
                >
                    View Credential <FaExternalLinkAlt size={10} />
                </a>
            ) : (
                <span style={{
                    fontSize: '0.8rem',
                    color: '#627D98',
                    fontStyle: 'italic'
                }}>
                    Certificate pending
                </span>
            )}
            
            {credLink && (
                <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    backgroundColor: '#F0F7F4',
                    color: '#2F6F4E',
                    borderRadius: '20px',
                    fontWeight: 500
                }}>
                    Verified
                </span>
            )}
        </div>
    </div>
);

const LearningEventCard = ({ title, type, image, dicebear, points }) => (
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        boxShadow: '0 8px 26px rgba(20,33,61,0.08)',
        border: '1px solid #E2DED6',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 34px rgba(20,33,61,0.12)';
        e.currentTarget.style.borderColor = '#D6CFC3';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 26px rgba(20,33,61,0.08)';
        e.currentTarget.style.borderColor = '#E2DED6';
    }}
    >
        <div style={{
            minHeight: '128px',
            backgroundColor: '#F5F3EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
        }}>
            {image ? (
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '18px',
                        objectFit: 'cover',
                        backgroundColor: '#ffffff',
                        border: '1px solid #E2DED6'
                    }}
                />
            ) : (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '88px',
                    height: '88px',
                    borderRadius: '18px',
                    backgroundColor: '#FEF3C7',
                    border: '1px solid #FCD34D',
                    color: '#B45309',
                    fontSize: '1rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em'
                }}>
                    CH
                </span>
            )}
        </div>

        <div style={{ padding: '1.5rem' }}>
            <span style={{
                display: 'inline-flex',
                color: '#B45309',
                backgroundColor: '#FEF3C7',
                border: '1px solid #FCD34D',
                borderRadius: '999px',
                padding: '0.3rem 0.7rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
            }}>
                {type}
            </span>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1rem'
            }}>
                <h3 style={{
                    color: '#14213D',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    lineHeight: 1.35,
                    marginBottom: 0
                }}>
                    {title}
                </h3>
                {dicebear && (
                    <img
                        src={dicebear}
                        alt=""
                        aria-hidden="true"
                        style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '14px',
                            objectFit: 'cover',
                            backgroundColor: '#ffffff',
                            border: '1px solid #E2DED6',
                            flexShrink: 0
                        }}
                    />
                )}
            </div>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
            }}>
                {points.map((point, index) => (
                    <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        color: '#334E68',
                        fontSize: '0.92rem',
                        lineHeight: 1.55
                    }}>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#D97706',
                            marginTop: '0.55rem',
                            flexShrink: 0
                        }} />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const EducationPage = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div style={{ backgroundColor: '#F5F3EE' }}>
            {/* Hero Section */}
            <div style={{
                background: '#F5F3EE',
                padding: '7rem 0 4rem'
            }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <img
                                src={educationCertificationsDicebear}
                                alt=""
                                aria-hidden="true"
                                className="page-header-dicebear"
                                loading="lazy"
                                width="72"
                                height="72"
                            />
                            <p style={{
                                color: '#B45309',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem'
                            }}>
                                Education & Certifications
                            </p>
                            <h1 style={{
                                color: '#14213D',
                                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                                fontWeight: 700,
                                marginBottom: '1.25rem',
                                lineHeight: 1.2
                            }}>
                                Academic Background &<br />Professional Development
                            </h1>
                            <p style={{
                                color: '#334E68',
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
                backgroundColor: '#F5F3EE',
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
                                credential={educationHighlights.concordia.credential}
                                descriptionPoints={educationHighlights.concordia.descriptionPoints}
                            />
                        </Col>
                        <Col xs={12} lg={6} style={{ marginBottom: '2rem' }}>
                            <EducationCard
                                image={CoventryDetails.image}
                                qualification={CoventryDetails.qualification}
                                institution={CoventryDetails.instition}
                                address={CoventryDetails.address}
                                issued="2017 - 2020"
                                credLink="https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"
                                credential={educationHighlights.coventry.credential}
                                descriptionPoints={educationHighlights.coventry.descriptionPoints}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Certifications Section */}
            <div style={{
                backgroundColor: '#F5F3EE',
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
                        <Col xs={12} md={6} lg={4} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={AWSCertification.image}
                                qualification={AWSCertification.qualification}
                                institution={AWSCertification.instition}
                                issued={AWSCertification.issued}
                                credLink={AWSCertification.credLink}
                                description={certificationDescriptions.aws}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={DockerCertification.image}
                                qualification={DockerCertification.qualification}
                                institution={DockerCertification.instition}
                                issued={DockerCertification.issued}
                                credLink={DockerCertification.credLink}
                                description={certificationDescriptions.docker}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={GraphQLCertification.image}
                                qualification={GraphQLCertification.qualification}
                                institution={GraphQLCertification.instition}
                                issued={GraphQLCertification.issued}
                                credLink={GraphQLCertification.credLink}
                                description={certificationDescriptions.graphql}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4} style={{ marginBottom: '1.5rem' }}>
                            <CertificationCard
                                image={JiraCertification.image}
                                qualification={JiraCertification.qualification}
                                institution={JiraCertification.instition}
                                issued={JiraCertification.issued}
                                credLink={JiraCertification.credLink}
                                description={certificationDescriptions.jira}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Conferences & Hackathons Section */}
            <div style={{
                backgroundColor: '#F5F3EE',
                padding: '5rem 0'
            }}>
                <Container>
                    <Row style={{ marginBottom: '3rem' }}>
                        <Col>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#1a1a2e',
                                marginBottom: '0.75rem'
                            }}>
                                Conferences & Hackathons
                            </h2>
                            <p style={{
                                color: '#666',
                                fontSize: '1.05rem',
                                maxWidth: '560px'
                            }}>
                                Professional development through conferences, hackathons, and hands-on technical collaboration.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        {learningEvents.map((event) => (
                            <Col key={event.title} xs={12} md={6} style={{ marginBottom: '1.5rem' }}>
                                <LearningEventCard {...event} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default EducationPage;
