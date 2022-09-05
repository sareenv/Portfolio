
import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn, FaMailBulk, FaPaperPlane } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Footer from '../Footer'
import '../../Styles/base.scss'
import '../../Styles/contact.scss'

const Contact = () => {
    
    return (
        <Container>
            <Row className='contact_section'>
                <Col sm={12} md={12} lg={6}>
                <center>
                        <h2> Let's Discuss! </h2>
                        <p> Let's convert your idea into user-friendly products.</p>
                        <hr className='customline'></hr>
                        <span> 
                            <div>
                                <b>Contact Email</b>: contact@sareenv.com
                            </div>
                            <div>
                                <b>Location </b>: Montréal, Canada
                            </div>

                            <div>
                                <b>Contact Number </b>: (+1)5149783251
                            </div>
                            <div style={{margin: '1rem'}}>
                                <a href="https://www.linkedin.com/in/vinayak-sareen/" 
                                    className='btn btn-outline-primary'> <FaLinkedinIn /> <> </>CONNECT ON LINKEDIN </a>
                            </div>

                            <div>
                            <a href="https://www.linkedin.com/in/vinayak-sareen/" 
                            style={{textDecoration: 'none',}} className="btn btn-outline-danger"> <FaMailBulk /> contact@sareenv.com </a>
                            </div>
    
                        </span>
                    </center>
                </Col>
                <Col sm={12} md={12} lg={6}>
                        <Container fluid='sm' className='contact-form' style={{marginTop: '20px'}}> 
                        <center>
                        <h2> Get in Touch </h2>
                        <hr className='customline'></hr>
                        </center>
                        <Form action='https://formsubmit.co/contact@sareenv.com' method='post'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label htmlFor="fullName">Full Name</Form.Label>
                                <Form.Control type="fullName" name="fullname" placeholder="Your Full Name"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label htmlFor="message">Your Message</Form.Label>
                                <Form.Control as="textarea" name="message" placeholder='Please type your message here' />
                            </Form.Group>
                            <Button variant="primary" type="submit"> 
                                <div>
                                    <FaPaperPlane /> <> { } </>
                                    Send Message 
                                </div>
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
            
            <div className='footer-contact' style={{display: 'none'}}>
                contact form
            </div>

            <Footer />
        </Container>
    )
}

export default Contact