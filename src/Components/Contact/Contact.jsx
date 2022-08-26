
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button } from 'react-bootstrap';
import '../../Styles/contact.scss'

const Contact = () => {
    return (
        <Container fluid='sm' className='contact-form'> 
            <center>

            <h2> Get in Touch </h2>

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
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit"> Send Message </Button>
            </Form>
        </Container>
    )
}

export default Contact