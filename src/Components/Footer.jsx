import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { PROJECTS_ENABLED } from '../constants'

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
                            {PROJECTS_ENABLED && (
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
                            )}
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a 
                                    href="#/apps"
                                    style={{
                                        color: '#F59E0B',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#FBBF24'}
                                    onMouseLeave={(e) => e.target.style.color = '#F59E0B'}
                                >
                                    Published Apps
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
                            backgroundColor: '#F5F3EE',
                            border: '1px solid #E2DED6',
                            borderRadius: '18px',
                            padding: '1.15rem 1.2rem',
                            boxShadow: '0 14px 34px rgba(0, 0, 0, 0.12)'
                        }}>
                            <div style={{
                                fontSize: '0.78rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: '#B45309',
                                fontWeight: 700,
                                marginBottom: '0.55rem'
                            }}>
                                App Store Releases
                            </div>
                            <h5 style={{
                                color: '#14213D',
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                lineHeight: 1.25,
                                margin: '0 0 0.5rem'
                            }}>
                                Published Applications
                            </h5>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#334E68',
                                margin: '0 0 0.9rem',
                                lineHeight: 1.55
                            }}>
                                Explore my published iOS apps and services.
                            </p>
                            <a
                                href="#/apps"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.45rem',
                                    color: '#ffffff',
                                    backgroundColor: '#14213D',
                                    border: '1px solid #14213D',
                                    borderRadius: '999px',
                                    padding: '0.65rem 0.95rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#D97706';
                                    e.currentTarget.style.borderColor = '#D97706';
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#14213D';
                                    e.currentTarget.style.borderColor = '#14213D';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                View published apps <HiArrowRight size={14} />
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
