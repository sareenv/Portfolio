import React, {useEffect} from 'react';
import service from '../../Assets/experience.svg'
import {Row, Col, Container, Table, Image} from 'react-bootstrap'
import ReactGA from 'react-ga'

const Service = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <Container  style={{marginTop: '1rem', padding: '1rem'}}>
            <Row style={{marginBottom: '3rem'}}>


            <Col sm={12} md={12} lg={12} style={{backgroundColor: 'white'}}>
            <h3> Services Information </h3>
            <hr />
            <Container>
                <p style={{textAlign: 'justify'}}>
                    I specialize in <i> FullStack Application development </i>, providing adaptable solutions tailored to 
                    the unique requirements of each project. My expertise encompasses the realm 
                    of Mobile Application Development, with a focus on prominent platforms like <b>iOS </b> and <b>Android</b>. 
                    I am also well-versed in backend development using platforms such as <b>Node.js and SpringBoot</b>, leveraging their capabilities to integrate 
                    seamlessly with cloud services like AWS and GCP.
                </p>
            </Container>
            
            <Container style={{padding: '2rem'}}>
                <Image fluid src={service} className= "d-block mx-auto img-fluid w-50" />
            </Container>
            
            <p style={{textAlign: 'justify'}}>
                The skills mentioned in the section reflect the skills and experience I accumulated from the previously applied expertise in professional or academic settings. I strongly believe in adapting to the requirements of projects and offering the most appropriate development services accordingly. Therefore, open to learning or adapting to the existing or new technology as per the business logic.   
            </p>
        </Col>
        <Col sm={12} md={12} lg={12} style={{backgroundColor: 'white'}}>
        <h4 style={{paddingTop: '1rem'}}> Skills & Services </h4>
        <hr/>

        <Table variant='light' striped>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Specifics</th>
                    <th>Experience</th>
                </tr>
            </thead>

            <tbody>

            <tr>
                <td>Mobile </td>
                <td> iOS </td>
                <td>
                    <li style={{fontSize: '0.8rem'}}> UIKit </li>
                    <li style={{fontSize: '0.8rem'}}> AVKit </li>
                    <li style={{fontSize: '0.8rem'}}> Swift UI </li>
                    <li style={{fontSize: '0.8rem'}}> MapKit </li>
                    <li style={{fontSize: '0.8rem'}}> CoreLocation </li>
                    <li style={{fontSize: '0.8rem'}}> CoreData </li>
                    <li style={{fontSize: '0.8rem'}}> Combine </li>
                </td>
            </tr>

            <tr>
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
        
                <td>Frontend</td>
                <td> React </td>
                <td>
                    <li style={{fontSize: '0.8rem'}}> Redux </li>
                    <li style={{fontSize: '0.8rem'}}> Context </li>
                    <li style={{fontSize: '0.8rem'}}> Hooks </li>
                </td>
            </tr>

            

            <tr>

                <td>Automated Testing </td>
                <td> Unit Testing </td>
                <td>
                    <li style={{fontSize: '0.8rem'}}> JUnit </li> 
                    <li style={{fontSize: '0.8rem'}}> Jest </li>
                    <li style={{fontSize: '0.8rem'}}> XCTest </li>
                </td>
            </tr>

            <tr>
    
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
                <td> Miscellaneous </td>
                <td> NA </td>
                <td>
                    <li style={{fontSize: '0.8rem'}}> Firebase </li>
                    <li style={{fontSize: '0.8rem'}}> Postman </li>
                    <li style={{fontSize: '0.8rem'}}> Zoho </li>
                    <li style={{fontSize: '0.8rem'}}> Git </li>
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