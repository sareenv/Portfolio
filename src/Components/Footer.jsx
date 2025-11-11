import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import '../Styles/footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer style={{
            backgroundColor: '#003049',
            color: 'white',
            padding: '3rem 0 1.5rem',
            marginTop: 'auto'
        }}>
            <Container>
                <Row style={{marginBottom: '2rem'}}>
                    <Col sm={12} md={4} lg={4} style={{marginBottom: '1.5rem'}}>
                        <h5 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: 'white'
                        }}>
                            Vinayak Sareen
                        </h5>
                        <p style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            marginBottom: '1rem'
                        }}>
                            Full-Stack Software Engineer specializing in mobile and web application development.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            <a 
                                href="https://www.linkedin.com/in/vinayak-sareen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '1.3rem',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'white'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                            >
                                <FaLinkedin />
                            </a>
                            <a 
                                href="https://github.com/sareenv"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '1.3rem',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'white'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="mailto:contact@sareenv.com"
                                style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '1.3rem',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'white'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </Col>

                    <Col sm={12} md={4} lg={4} style={{marginBottom: '1.5rem'}}>
                        <h5 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: 'white'
                        }}>
                            Quick Links
                        </h5>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            <li style={{marginBottom: '0.5rem'}}>
                                <a 
                                    href="#/"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Home
                                </a>
                            </li>
                            <li style={{marginBottom: '0.5rem'}}>
                                <a 
                                    href="#/projects"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Projects
                                </a>
                            </li>
                            <li style={{marginBottom: '0.5rem'}}>
                                <a 
                                    href="#/experience"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Experience
                                </a>
                            </li>
                            <li style={{marginBottom: '0.5rem'}}>
                                <a 
                                    href="#/education"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Education
                                </a>
                            </li>
                            <li style={{marginBottom: '0.5rem'}}>
                                <a 
                                    href="#/services"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Services
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <h5 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: 'white'
                        }}>
                            Contact Info
                        </h5>
                        <div style={{marginBottom: '0.75rem'}}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <FaEnvelope style={{marginTop: '0.25rem', flexShrink: 0}} />
                                <a 
                                    href="mailto:contact@sareenv.com"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    contact@sareenv.com
                                </a>
                            </div>
                        </div>
                        <div style={{marginBottom: '0.75rem'}}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <FaMapMarkerAlt style={{marginTop: '0.25rem', flexShrink: 0}} />
                                <span>Barrie, Ontario, Canada</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <div style={{
                            borderTop: '1px solid rgba(255,255,255,0.2)',
                            paddingTop: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '0.9rem',
                                marginBottom: 0
                            }}>
                                © {currentYear} Vinayak Sareen. All rights reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
