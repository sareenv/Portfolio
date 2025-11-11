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
            const data = length != null ? items.slice(start, length) : items
            setProjects(data)
        })
    }, [props.length])

    return (
        <div className='projectSection' style={{
            backgroundColor: '#ffffff',
            padding: '4rem 0 2rem 0',
            transition: 'all 0.3s ease'
        }}>
                {props.showTitle && (
                    <div style={{marginBottom: '2.5rem'}}>
                        <Container fluid="sm">
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '1rem'
                            }}>
                                <h3 style={{
                                    fontWeight: 600,
                                    color: '#003049',
                                    fontSize: '1.8rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    Featured Projects
                                </h3>
                                <p style={{
                                    color: '#666',
                                    fontSize: '1.05rem',
                                    marginBottom: '0',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    A selection of my recent work
                                </p>
                            </div>
                        </Container>
                    </div>
                )}
                    
                <Container fluid="sm" style={{ marginBottom: '0' }}>
                    <Row style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                        gap: '2rem',
                        padding: '0 1rem'
                    }}>
                    {
                        projects.map((project) => {
                            return (
                                <Link 
                                    key={project.ID}
                                    to={{ pathname: '/project_details/' + project.id }}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Card 
                                        className='customsytle bg-white flex-fill'
                                        style={{
                                            border: '1px solid #e8e8e8',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            height: '100%',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{ 
                                            width: '100%', 
                                            height: '200px', 
                                            overflow: 'hidden',
                                            position: 'relative',
                                            backgroundColor: '#f8f9fa'
                                        }}>
                                            <Card.Img 
                                                variant="top" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover'
                                                }} 
                                                src={project.thumbnail}
                                            />
                                        </div>
            
                                        <Card.Body style={{padding: '1.5rem'}}>
                                            <Card.Title style={{
                                                fontWeight: 600, 
                                                fontSize: '1.15rem',
                                                color: '#003049',
                                                marginBottom: '0.75rem',
                                                lineHeight: '1.3'
                                            }}> 
                                                {project.projectName} 
                                            </Card.Title>
                                            <div style={{marginBottom: '0.75rem'}}>
                                                <Badge tag={project.tags[0]} />
                                            </div>
                                            <Card.Text style={{ 
                                                color: '#666',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.6',
                                                marginBottom: '1rem',
                                                display: '-webkit-box',
                                                WebkitLineClamp: '3',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}> 
                                                {project.description} 
                                            </Card.Text>
                                            <div style={{
                                                color: '#003049',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                Learn more
                                                <span style={{fontSize: '0.75rem'}}>→</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            )
                        })
                    }
            
                    </Row>
                </Container>
            
            </div>
    )
}

export default Project
