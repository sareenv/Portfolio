import React from 'react'
import {Row, Col} from 'react-bootstrap'

import '../Styles/footer.scss'

const Footer = () => {
    return (
        <Row  style={{
            margin: '0.3rem', 
            backgroundColor: 'whitesmoke', 
            padding: '1rem'
        }}>
            <Col sm={12} md={6} lg={6}>
                Copyright © 2024 Vinayak Sareen.
            </Col>

            <Col sm={12} md={6} lg={5}>
                <h3 style={{fontWeight: 600}}> Contact US </h3>
                <label style={{fontWeight: 100 }}>Email: contact@sareenv.com</label> <br/>
                Vaughan, ON, Canada
            </Col>
            
        </Row>
    )
}

export default Footer
