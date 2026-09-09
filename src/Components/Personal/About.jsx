import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Styles/about.scss"
import "../../Styles/base.scss"

const About = () => {
    return (
        <div style={{
            padding: '4rem 0',
            backgroundColor: '#F5F3EE'
        }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {/* Section Label */}
                            <p style={{
                                color: '#B45309',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem'
                            }}>
                                About Me
                            </p>
                            
                            {/* Main Heading */}
                            <h2 style={{
                                fontWeight: 700,
                                color: '#14213D',
                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.3
                            }}>
                                Building solutions that matter, one challenge at a time
                            </h2>
                            
                            {/* Description */}
                            <div style={{
                                color: '#334E68',
                                fontSize: '1.05rem',
                                lineHeight: 1.75
                            }}>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    I'm a Software Development Engineer at <strong style={{ color: '#14213D' }}>Dayforce</strong>, 
                                    currently specializing in iOS development with Swift and SwiftUI. Based in Toronto, Canada, 
                                    I hold a Master's degree in Software Engineering from Concordia University.
                                </p>
                                
                                <p style={{ marginBottom: '1.25rem' }}>
                                    My experience spans mobile and full-stack development, working with distributed teams 
                                    across multiple time zones. I'm comfortable diving into new technologies and frameworks 
                                    as needed—whether it's building scalable applications, architecting cloud solutions, 
                                    or solving complex technical challenges.
                                </p>
                                
                                <p style={{ marginBottom: '1.5rem' }}>
                                    I believe in choosing the right tools for each challenge rather than being confined 
                                    to a specific stack. Clean code, continuous learning, and user-focused design 
                                    drive everything I build.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div style={{ marginTop: '2rem' }}>
                                <Link
                                    to="/experience"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#14213D',
                                        color: '#ffffff',
                                        padding: '0.875rem 1.75rem',
                                        borderRadius: '10px',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(20, 33, 61, 0.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#334E68';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(20, 33, 61, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#14213D';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(20, 33, 61, 0.2)';
                                    }}
                                >
                                    View Full Experience
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
