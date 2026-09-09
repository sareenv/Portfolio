import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaApple } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

import '../Styles/footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer style={{
            background: 'linear-gradient(160deg, #14213D 0%, #334E68 100%)',
            color: 'white',
            padding: '3.5rem 0 1.5rem',
            marginTop: 'auto'
        }}>
            <Container>
                <Row style={{ marginBottom: '2.5rem' }}>
                    {/* Bio / About Column */}
                    <Col sm={12} md={5} lg={5} style={{ marginBottom: '2rem' }}>
                        <h5 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '1.15rem',
                            color: 'white'
                        }}>
                            Vinayak Sareen
                        </h5>
                        <p style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            lineHeight: '1.65',
                            marginBottom: '1.25rem',
                            maxWidth: '380px'
                        }}>
                            Full-Stack Software Engineer specializing in mobile and web application development, Swift, SwiftUI, and cloud architecture.
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

                    {/* Quick Links Column */}
                    <Col sm={6} md={3} lg={3} style={{ marginBottom: '2rem' }}>
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
                            <li style={{ marginBottom: '0.5rem' }}>
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
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a 
                                    href="#/articles"
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                                >
                                    Articles
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
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
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a 
                                    href="#/apps"
                                    style={{
                                        color: '#F59E0B',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.35rem'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#FBBF24'}
                                    onMouseLeave={(e) => e.target.style.color = '#F59E0B'}
                                >
                                    <FaApple size={14} /> Published Apps
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
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
                            <li style={{ marginBottom: '0.5rem' }}>
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
                            <li style={{ marginBottom: '0.5rem' }}>
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
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info & Featured Apps Callout Column */}
                    <Col sm={12} md={4} lg={4} style={{ marginBottom: '2rem' }}>
                        <h5 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: 'white'
                        }}>
                            Contact Info
                        </h5>
                        <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <FaEnvelope style={{ marginTop: '0.25rem', flexShrink: 0 }} />
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
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <FaMapMarkerAlt style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                <span>Barrie, Ontario, Canada</span>
                            </div>
                        </div>

                        {/* Published Apps Callout */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '10px',
                            padding: '0.85rem 1rem'
                        }}>
                            <div style={{
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                color: '#F59E0B',
                                fontWeight: 700,
                                marginBottom: '0.35rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.35rem'
                            }}>
                                <FaApple size={13} /> App Store Releases
                            </div>
                            <p style={{
                                fontSize: '0.85rem',
                                color: 'rgba(245, 243, 238, 0.75)',
                                margin: '0 0 0.5rem',
                                lineHeight: 1.4
                            }}>
                                Explore my published iOS apps and services.
                            </p>
                            <a
                                href="#/apps"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.35rem',
                                    color: '#F59E0B',
                                    fontSize: '0.825rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#FBBF24'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#F59E0B'}
                            >
                                View published apps <HiArrowRight size={13} />
                            </a>
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
