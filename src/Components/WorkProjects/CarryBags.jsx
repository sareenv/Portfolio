import React from 'react';
import {Row, Col} from 'react-bootstrap'

const CarryBags = () => {
    return (
        <div style={{
            margin: '1rem',
            height: '620px'
        }}>
            <Row style={{height: '100%'}}>
                <Col sm={12} md={4} lg={8} style={{height: '100%'}}>
                    <div style={{background: 'red', width: '100%', height: '100%'}}>hello</div>
                </Col>

                <Col sm={12} md={4} lg={4} style={{height: '100%'}}>
                    <div style={{background: 'green', width: '100%', height: '100%'}}>hello</div>
                </Col>
            </Row>
        </div>
    )
}

export default CarryBags;