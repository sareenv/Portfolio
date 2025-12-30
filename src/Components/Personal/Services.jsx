import React, {useEffect} from 'react';
import SkillsServices from './SkillsServices'
import Footer from '../Footer'
import {Row, Col, Container} from 'react-bootstrap'
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineCloud, HiArrowRight } from 'react-icons/hi'
import ReactGA from 'react-ga'

const services = [
    {
        icon: HiOutlineDeviceMobile,
        title: 'Mobile Development',
        description: 'Native iOS applications built with Swift and SwiftUI, delivering seamless user experiences with modern architecture patterns.',
        features: ['iOS & iPadOS Apps', 'SwiftUI & UIKit', 'App Store Deployment']
    },
    {
        icon: HiOutlineCode,
        title: 'Full-Stack Development',
        description: 'End-to-end web applications using React, Node.js, and modern frameworks with scalable backend architectures.',
        features: ['React & Next.js', 'Node.js & Express', 'REST & GraphQL APIs']
    },
    {
        icon: HiOutlineCloud,
        title: 'Cloud Solutions',
        description: 'Cloud infrastructure setup and management on AWS and GCP, with CI/CD pipelines and containerized deployments.',
        features: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines']
    }
];

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
                background: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
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
                    background: 'radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    pointerEvents: 'none'
                }} />
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <p style={{
                                color: '#00b4d8',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem'
                            }}>
                                Services
                            </p>
                            <h1 style={{
                                color: '#f1faee',
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                lineHeight: 1.2
                            }}>
                                Building Digital Solutions<br />That Drive Results
                            </h1>
                            <p style={{
                                color: 'rgba(241, 250, 238, 0.8)',
                                fontSize: '1.15rem',
                                lineHeight: 1.7,
                                maxWidth: '600px',
                                margin: '0 auto 2rem'
                            }}>
                                From concept to deployment, I deliver tailored software solutions 
                                that help businesses scale and succeed in the digital landscape.
                            </p>
                            <button
                                onClick={handleBookConsultation}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    backgroundColor: '#00b4d8',
                                    color: '#003049',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(0, 180, 216, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 180, 216, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 180, 216, 0.3)';
                                }}
                            >
                                Book Free Consultation
                                <HiArrowRight size={18} />
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services Cards Section */}
            <Container style={{ marginTop: '-3rem', position: 'relative', zIndex: 2 }}>
                <Row>
                    {services.map((service, index) => (
                        <Col xs={12} md={4} key={index} style={{ marginBottom: '1.5rem' }}>
                            <div style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '2rem',
                                height: '100%',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                border: '1px solid #f0f0f0'
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
                                {/* Icon */}
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <service.icon size={28} color="#00b4d8" />
                                </div>
                                
                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: '#003049',
                                    marginBottom: '0.75rem'
                                }}>
                                    {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#666',
                                    lineHeight: 1.7,
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.description}
                                </p>
                                
                                {/* Features */}
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: '#555',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                backgroundColor: '#00b4d8'
                                            }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Skills Section */}
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '5rem 0',
                marginTop: '4rem'
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
                                color: '#003049',
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
                                    backgroundColor: '#003049',
                                    color: '#f1faee',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#002035';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,48,73,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#003049';
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