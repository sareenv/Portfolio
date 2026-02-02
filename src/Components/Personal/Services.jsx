import React, {useEffect} from 'react';
import SkillsServices from './SkillsServices'
import Footer from '../Footer'
import {Row, Col, Container} from 'react-bootstrap'
import { HiArrowRight, HiOutlineCalendar } from 'react-icons/hi'
import ReactGA from 'react-ga'

const Service = () => {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const handleBookConsultation = () => {
        window.open("https://calendly.com/contact-sareenv/consultation-session", "_blank")
    }

    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)',
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background decoration */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(74, 111, 165, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }} />
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(248, 249, 250, 0.1)',
                                padding: '0.5rem 1rem',
                                borderRadius: '100px',
                                marginBottom: '1.5rem'
                            }}>
                                <HiOutlineCalendar size={18} color="#f8f9fa" />
                                <span style={{
                                    color: 'rgba(248, 249, 250, 0.8)',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    Let's Connect
                                </span>
                            </div>
                            <h1 style={{
                                color: '#f8f9fa',
                                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                lineHeight: 1.3
                            }}>
                                Would like to connect with me?<br />
                                Please book a slot from my calendar
                            </h1>
                            <p style={{
                                color: 'rgba(248, 249, 250, 0.7)',
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                maxWidth: '550px',
                                margin: '0 auto 2rem'
                            }}>
                                I'd love to hear about your project or just have a chat. 
                                Schedule a convenient time and let's discuss how I can help.
                            </p>
                            <button
                                onClick={handleBookConsultation}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    backgroundColor: '#f8f9fa',
                                    color: '#1a1a2e',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                                }}
                            >
                                Book a Meeting
                                <HiArrowRight size={18} />
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Skills Section */}
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '5rem 0'
            }}>
                <Container>
                    <SkillsServices />
                </Container>
            </div>

            {/* CTA Section */}
            <div style={{
                padding: '5rem 0',
                backgroundColor: '#ffffff'
            }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 700,
                                color: '#1a1a2e',
                                marginBottom: '1rem'
                            }}>
                                Ready to Start Your Project?
                            </h2>
                            <p style={{
                                color: '#666',
                                fontSize: '1.1rem',
                                marginBottom: '2rem',
                                maxWidth: '500px',
                                margin: '0 auto 2rem'
                            }}>
                                Let's discuss how I can help bring your ideas to life with 
                                custom software solutions tailored to your needs.
                            </p>
                            <button
                                onClick={handleBookConsultation}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    backgroundColor: '#1a1a2e',
                                    color: '#f8f9fa',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#16213e';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,26,46,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#1a1a2e';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Schedule Consultation
                                <HiArrowRight size={18} />
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default Service;