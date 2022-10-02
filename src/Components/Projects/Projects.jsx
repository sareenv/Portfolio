import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from '../Utilities/Badge';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import '../../Styles/base.scss';
import Footer from '../Footer';
import { downloadProject } from '../../Services/Projects';


const Project = (props) => {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        downloadProject().then(items => {
            setProjects(items.Items)
        })
    }, [])

    return (
        <div className='projectSection'>
                {props.showTitle && (
                    <center>
                        <h3> Featured Projects </h3>
                        <hr className='customline'/>
                    </center>
                )}
                
              
                    <Container fluid="sm" style={{marginBottom: '4rem'}}>
                        <Row>

                            {
                                projects.map((project) => {
                                    return (
                                        <Col key={project.ID} sm={12} md={12} lg={4} className="cutomColumn">
                                            <Card className='customsytle shadow-lg bg-white rounded' style={{   }}>
                                                <Card.Img variant="top" style={{width: '100%', height: '15em', objectFit: 'cover'}} src={project.thumbnail}/>
                                                <Badge tag={project.tags[0]}/>
                                                <Card.Body>
                                                    <Card.Title> {project.projectName} </Card.Title>
                                                    <Card.Text>
                                                    <p style={{textAlign: 'left'}}> {project.description} </p>
                                                    </Card.Text>
                                                    <Link  className='customLink text-decoration-none rounded' to={{pathname: '/project_details/' + project.ID}}> View Details </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            
                        </Row>
                    </Container>
                    
                    <Footer />
            </div>
    )
}

export default Project
