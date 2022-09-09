import React from 'react';
import service from '../../Assets/experience.png'
import {Row, Col, Container, Table, Image} from 'react-bootstrap'

const Service = () => {
    return (
        <Container style={{marginTop: '1rem'}}>
            <Row>

            <Col sm={12} md={12} lg={6} style={{backgroundColor: 'white'}}>
                <h3> Service Information </h3>
                <hr />
                <Image fluid src={service}></Image>
                <p>
                    The skills mentioned in the section reflect the skills and experience I accumulated from the previously applied expertise in professional or academic settings. I strongly believe in adapting to the requirements of projects and offering the most appropriate development services accordingly. Therefore, open to learning or adapting to the existing or new technology as per the business logic.   
                </p>
            </Col>


            <Col sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '20rem'}}>
                    <h3> Skills and Services </h3>
                    <hr/>

                    <Table fluid={true}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Specifics</th>
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
                                <li style={{fontSize: '0.8rem'}}>REST API</li>
                                <li style={{fontSize: '0.8rem'}}>OAuth</li>
                                <li style={{fontSize: '0.8rem'}}>GraphQL</li>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Frontend</td>
                            <td> React </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> Redux </li>
                                <li style={{fontSize: '0.8rem'}}> Context </li>
                                <li style={{fontSize: '0.8rem'}}> Hooks </li>
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
                                <li style={{fontSize: '0.8rem'}}> XCTest </li>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Devops </td>
                            <td> <i> NA </i> </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> AWS </li>
                                <li style={{fontSize: '0.8rem'}}> Docker </li>
                                <li style={{fontSize: '0.8rem'}}> K8S Basic </li>
                                <li style={{fontSize: '0.8rem'}}> GitHub Actions </li>
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td> Datastores </td>
                            <td> DBMS </td>
                            <td>
                                <li style={{fontSize: '0.8rem'}}> MySQL </li>
                                <li style={{fontSize: '0.8rem'}}> Postgres</li>
                                <li style={{fontSize: '0.8rem'}}> MongoDB </li>
                                <li style={{fontSize: '0.8rem'}}> DynamoDB</li>
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td> Miscellaneous </td>
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

                
            </Row>
        </Container>
    )
}

export default Service;