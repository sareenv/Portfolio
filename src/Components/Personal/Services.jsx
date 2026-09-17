import React, {useEffect} from 'react';
import SkillsServices from './SkillsServices'
import Footer from '../Footer'
import {Row, Col, Container} from 'react-bootstrap'
import { HiArrowRight } from 'react-icons/hi'
import ReactGA from 'react-ga'
import connectServicesDicebear from '../../Assets/connect-services-dicebear.svg'

const Service = () => {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const handleBookConsultation = () => {
        window.open("https://calendly.com/contact-sareenv/consultation-session", "_blank")
    }

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
                                src={connectServicesDicebear}
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
                                marginBottom: '0.75rem'
                            }}>
                                Let's Connect
                            </p>
                            <h1 style={{
                                color: '#14213D',
                                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                lineHeight: 1.3
                            }}>
                                Would like to connect with me?<br />
                                Please book a slot from my calendar
                            </h1>
                            <p style={{
                                color: '#334E68',
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
                                    backgroundColor: '#14213D',
                                    color: '#F5F3EE',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#334E68';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(20,33,61,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#14213D';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
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
                backgroundColor: '#F5F3EE',
                padding: '5rem 0'
            }}>
                <Container>
                    <SkillsServices />
                </Container>
            </div>

            {/* CTA Section */}
            <div style={{
                padding: '5rem 0',
                backgroundColor: '#ffffff',
                borderTop: '1px solid #E2DED6'
            }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 700,
                                color: '#14213D',
                                marginBottom: '1rem'
                            }}>
                                Ready to Start Your Project?
                            </h2>
                            <p style={{
                                color: '#334E68',
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
                                    backgroundColor: '#14213D',
                                    color: '#F5F3EE',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#334E68';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(20,33,61,0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#14213D';
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