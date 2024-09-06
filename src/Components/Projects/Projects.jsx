import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import Badge from '../Utilities/Badge';

import { downloadProject } from '../../Services/Projects';
import '../../Styles/base.scss';

const Project = (props) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        downloadProject().then(items => {
            let start = 0;
            const length = props.length;
            const data = length != null ? items.Items.slice(start, length) : items.Items
            setProjects(data)
        })
    }, [props.length])

    return (
        <div className='projectSection'>
                {props.showTitle && (
                    <div>
                        <center>
                            <h3>Featured Projects</h3>
                        </center>

                        <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '2em'}}>
                            <a href='/#/projects' style={{color: 'black'}}> View All </a>
                        </div>
                        
                    </div>
                )}
                    
                <Container fluid="sm" style={{ marginBottom: '4rem' }}>
                    <Row style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            
                    {
                        projects.map((project) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <Card key={project.ID} className='customsytle shadow-md bg-white rounded flex-fill'>
                                        <Card.Img variant="top" style={{ width: '100%', height: '15em', objectFit: 'cover' }} src={project.thumbnail} />
                                        <div style={{ marginLeft: '0.5rem', marginTop: '0.4rem' }}>
                                            <Badge tag={project.tags[0]} />
                                        </div>
            
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title style={{fontWeight: 800}}> {project.projectName} </Card.Title>
                                            <Card.Text>
                                                <p style={{ textAlign: 'left' }}> {project.description} </p>
                                            </Card.Text>
                                            <Link className='mt-auto customLink text-decoration-none rounded' to={{ pathname: '/project_details/' + project.ID }}> View Details </Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
            
                    </Row>
                </Container>
            
            </div>
    )
}

export default Project
