import React from 'react';
import {Row, Col, Container, Table} from 'react-bootstrap'

const Service = () => {
    return (
        <Container style={{marginTop: '1rem'}}>
            <Row>
                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '20rem'}}>
                    <h3> Skills </h3>
                    <hr/>

                    <Table fluid={true}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Framework</th>
                                <th>Experience</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Backend</td>
                            <td>Node.js </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}>Express</li>
                                <li style={{fontSize: '0.8rem'}}>Koa</li>
                                <li style={{fontSize: '0.8rem'}}>Jest</li>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Frontend</td>
                            <td> React </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> Redux </li>
                                <li style={{fontSize: '0.8rem'}}> Context </li>
                                <li style={{fontSize: '0.8rem'}}> Functional </li>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Mobile </td>
                            <td> iOS </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> UIKit </li>
                                <li style={{fontSize: '0.8rem'}}> AVKit </li>
                                <li style={{fontSize: '0.8rem'}}> Swift UI </li>
                                <li style={{fontSize: '0.8rem'}}> MapKit </li>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Automated Testing </td>
                            <td> Unit Testing </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> JUnit </li> 
                                <li style={{fontSize: '0.8rem'}}> Jest </li>
                                <li style={{fontSize: '0.8rem'}}> Mocha </li>
                                <li style={{fontSize: '0.8rem'}}> XCTest </li>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Cloud </td>
                            <td> AWS </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> Foundation</li>
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td> Databases </td>
                            <td> DBMS </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> MySQL </li>
                                <li style={{fontSize: '0.8rem'}}> Postgres</li>
                                <li style={{fontSize: '0.8rem'}}> MongoDB </li>
                                <li style={{fontSize: '0.8rem'}}> DynamoDB</li>
                            </td>
                        </tr>

                        
                        
                    </tbody>



                    </Table>

                </Col>

                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'blue'}}>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Service;