import React, {useEffect} from 'react';
import experience from '../../Assets/experience.png'
import SkillsServices from './SkillsServices'
import Footer from '../Footer'
import {Row, Col, Container, Image, Button} from 'react-bootstrap'
import ReactGA from 'react-ga'

const Service = () => {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const handleBookConsultation = () => {
        window.open("https://calendly.com/contact-sareenv/consultation-session", "_blank")
    }

    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '6rem 0'
        }}>
        <Container>
            <Row style={{marginBottom: '3rem'}}>
                <Col>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: 600,
                        color: '#003049',
                        marginBottom: '0.5rem'
                    }}>Professional Services</h3>
                    <p style={{
                        fontSize: '1.05rem',
                        color: '#666',
                        marginBottom: '1.5rem'
                    }}>Delivering tailored software solutions for your unique needs</p>
                    <hr style={{
                        borderTop: '2px solid #e8e8e8',
                        marginBottom: 0
                    }}/>
                </Col>
            </Row>

            <Row style={{marginBottom: '4rem'}}>
                <Col sm={12} md={12} lg={12}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                    }}>
                        <Row style={{margin: 0}}>
                            <Col sm={12} md={12} lg={6} style={{padding: 0}}>
                                <div style={{
                                    height: '100%',
                                    minHeight: '500px',
                                    backgroundColor: '#f8f9fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '3rem'
                                }}>
                                    <Image 
                                        fluid 
                                        src={experience} 
                                        className="d-block mx-auto img-fluid"
                                        style={{
                                            maxWidth: '90%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            </Col>

                            <Col sm={12} md={12} lg={6} style={{padding: '3.5rem'}}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'center'
                                }}>
                                    <h3 style={{
                                        fontWeight: 700,
                                        color: '#003049',
                                        fontSize: '2.2rem',
                                        marginBottom: '0.75rem',
                                        lineHeight: '1.2'
                                    }}>Full-Stack Development Expertise</h3>
                                    
                                    <p style={{
                                        color: '#d62828',
                                        fontSize: '1.2rem',
                                        fontWeight: 500,
                                        marginBottom: '2rem',
                                        fontStyle: 'italic'
                                    }}>Freelance excellence, delivered remotely</p>
                                    
                                    <div style={{
                                        borderLeft: '4px solid #003049',
                                        paddingLeft: '1.5rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <p style={{
                                            color: '#666',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.8',
                                            marginBottom: '1.5rem'
                                        }}>
                                            As a <strong style={{color: '#003049'}}>seasoned Full-Stack Application Developer</strong>, I specialize in delivering versatile, customized solutions tailored to your unique project requirements. My expertise spans the entire development spectrum—from <strong style={{color: '#003049'}}>mobile applications</strong> on iOS and Android platforms to robust <strong style={{color: '#003049'}}>backend systems</strong> built with Node.js, seamlessly integrated with cloud services like AWS and Google Cloud Platform.
                                        </p>
                                        
                                        <p style={{
                                            color: '#666',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.8',
                                            marginBottom: 0
                                        }}>
                                            My approach combines extensive professional experience with continuous learning, ensuring that every solution is perfectly aligned with your business logic and technical requirements. I thrive on tackling new challenges and remain committed to adapting emerging technologies to deliver efficient, scalable, and maintainable solutions.
                                        </p>
                                    </div>
                                    
                                    <Button 
                                        onClick={handleBookConsultation}
                                        style={{
                                            width: '100%',
                                            fontWeight: 600,
                                            backgroundColor: '#003049',
                                            border: 'none',
                                            padding: '1rem 2rem',
                                            borderRadius: '8px',
                                            fontSize: '1.05rem',
                                            transition: 'all 0.3s ease',
                                            marginTop: '1rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#002035';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 4px 12px rgba(0,48,73,0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#003049';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >Schedule a Free Consultation →</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>        
            </Row>

            <Row>
                <Col sm={12} md={12} lg={12}>
                    <SkillsServices/>
                </Col>
            </Row>
            
            <Footer />
        </Container>
        </div>
    )
}

export default Service;