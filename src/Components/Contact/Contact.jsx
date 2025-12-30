import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn, FaMailBulk, FaPaperPlane } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Footer from '../Footer'
import '../../Styles/base.scss'
import '../../Styles/contact.scss'

const Contact = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            padding: '6rem 0',
            transition: 'all 0.3s ease'
        }}>
            <Container>
                {/* Page Header */}
                <Row style={{marginBottom: '3rem'}}>
                    <Col>
                        <h2 style={{
                            fontWeight: 600,
                            color: '#003049',
                            fontSize: '2rem',
                            marginBottom: '0.5rem',
                            textAlign: 'center'
                        }}>
                            Get in Touch
                        </h2>
                        <p style={{
                            color: '#666',
                            fontSize: '1.1rem',
                            marginBottom: 0,
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Have a project in mind or just want to connect? I'd love to hear from you!
                        </p>
                    </Col>
                </Row>

                <Row>
                    {/* Contact Information */}
                    <Col sm={12} md={12} lg={5} style={{marginBottom: '2rem'}}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            height: '100%'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: '#003049',
                                marginBottom: '1.5rem'
                            }}>
                                Contact Information
                            </h3>
                            
                            <div style={{marginBottom: '2rem'}}>
                                <div style={{
                                    marginBottom: '1.5rem',
                                    paddingBottom: '1.5rem',
                                    borderBottom: '1px solid #e8e8e8'
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: 600
                                    }}>Email</div>
                                    <div style={{
                                        fontSize: '1rem',
                                        color: '#003049',
                                        fontWeight: '500'
                                    }}>contact@sareenv.com</div>
                                </div>

                                <div style={{
                                    marginBottom: '1.5rem',
                                    paddingBottom: '1.5rem',
                                    borderBottom: '1px solid #e8e8e8'
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: 600
                                    }}>Location</div>
                                    <div style={{
                                        fontSize: '1rem',
                                        color: '#003049',
                                        fontWeight: '500'
                                    }}>Barrie, Canada</div>
                                </div>

                                <div style={{
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: 600
                                    }}>Phone</div>
                                    <div style={{
                                        fontSize: '1rem',
                                        color: '#003049',
                                        fontWeight: '500'
                                    }}>+1 (437) 365-3351</div>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                <a 
                                    href="https://www.linkedin.com/in/vinayak-sareen/" 
                                    style={{
                                        textDecoration: 'none',
                                        backgroundColor: '#0077b5',
                                        color: 'white',
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '8px',
                                        fontWeight: '500',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#005885';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#0077b5';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <FaLinkedinIn /> Connect on LinkedIn
                                </a>

                                <a 
                                    href="mailto:contact@sareenv.com" 
                                    style={{
                                        textDecoration: 'none',
                                        backgroundColor: '#f8f9fa',
                                        color: '#003049',
                                        border: '1px solid #e8e8e8',
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '8px',
                                        fontWeight: '500',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#e8e8e8';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#f8f9fa';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <FaMailBulk /> Send Email
                                </a>
                            </div>

                            {/* Response Time Message */}
                            <div style={{
                                marginTop: '2rem',
                                padding: '1rem',
                                backgroundColor: '#e3f2fd',
                                borderRadius: '8px',
                                borderLeft: '3px solid #003049'
                            }}>
                                <p style={{
                                    color: '#003049',
                                    fontSize: '0.9rem',
                                    marginBottom: 0,
                                    lineHeight: '1.6'
                                }}>
                                    <strong>Quick Response:</strong> I typically respond within 24 hours during business days.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Contact Form */}
                    <Col sm={12} md={12} lg={7}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: '#003049',
                                marginBottom: '0.5rem'
                            }}>
                                Send a Message
                            </h3>
                            <p style={{
                                color: '#666',
                                fontSize: '1rem',
                                marginBottom: '2rem'
                            }}>
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>

                            <Form id="contact" action='https://formsubmit.co/contact@sareenv.com' method='post'>
                                <input type="hidden" name="_next" value="https://www.sareenv.com"/>
                                
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label style={{
                                        fontWeight: 600,
                                        color: '#003049',
                                        fontSize: '0.95rem'
                                    }}>Full Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="fullname" 
                                        placeholder="Your Full Name"
                                        style={{
                                            borderRadius: '8px',
                                            border: '1px solid #e8e8e8',
                                            padding: '0.75rem',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label style={{
                                        fontWeight: 600,
                                        color: '#003049',
                                        fontSize: '0.95rem'
                                    }}>Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email" 
                                        placeholder="name@example.com"
                                        style={{
                                            borderRadius: '8px',
                                            border: '1px solid #e8e8e8',
                                            padding: '0.75rem',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="message">
                                    <Form.Label style={{
                                        fontWeight: 600,
                                        color: '#003049',
                                        fontSize: '0.95rem'
                                    }}>Your Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        name="message" 
                                        rows={6}
                                        placeholder='Tell me about your project or inquiry...'
                                        style={{
                                            borderRadius: '8px',
                                            border: '1px solid #e8e8e8',
                                            padding: '0.75rem',
                                            fontSize: '1rem',
                                            resize: 'vertical'
                                        }}
                                    />
                                </Form.Group>
                                
                                <Button 
                                    type="submit"
                                    style={{
                                        backgroundColor: '#003049',
                                        border: 'none',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '8px',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        width: '100%',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#002037';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#003049';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <FaPaperPlane /> Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>

                <Footer />
            </Container>
        </div>
    )
}

export default Contact