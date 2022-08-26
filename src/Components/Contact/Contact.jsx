
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../../Styles/base.scss'
import '../../Styles/contact.scss'
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <Row>
            <Col sm={6}>
            <center>
                    <h2> Contact Details </h2>
                    <hr className='customline'></hr>
                    <span> 
                        <div>
                            <b>Email</b>: sareenv026@outlook.com
                        </div>
                        <div>
                            <b>Location </b>: Montréal, Canada
                        </div>

                        <div>
                            <b>Contact Number </b>: (+1)5149783251
                        </div>
                        <div style={{margin: '1rem'}}>
                            <b>LinkedIn  </b>: <a href="https://www.linkedin.com/in/vinayak-sareen/" 
                                style={{textDecoration: 'none', 
                                backgroundColor: '#007bff', 
                                color: 'white',
                                borderRadius: '2px',
                                padding: '0.2rem'}}> View Profile</a>
                        </div>
                    </span>
                </center>
            </Col>
            <Col sm={6}>
                    <Container fluid='sm' className='contact-form'> 
                    <center>
                    <h2> Get in Touch </h2>
                    <hr className='customline'></hr>
                    </center>
                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label htmlFor="email">Full Name</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label htmlFor="email">Your Message</Form.Label>
                            <Form.Control as="textarea" placeholder='Please type your message here' rows={3} />
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
        
    )
}

export default Contact