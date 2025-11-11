import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import React  from 'react'
import { useEffect, useState } from 'react'
import { FaGithub, FaVideo, FaArrowLeft } from 'react-icons/fa'
import { downloadProjectByID } from '../../Services/Projects'
import Vimeo from '@u-wave/react-vimeo'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import '../../Styles/product-details.scss'

const ProjectDetails = (props) => {
    const [displayImage, setDisplayImage] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [project, setProject] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        const mounted = true;
        if(mounted) {
            const projectID = props.match.params.id
            const data = downloadProjectByID(projectID)
            data.then((project) => {
                const projectDetails = project.content
                setProject(projectDetails)
                setDisplayImage(projectDetails.thumbnail)
            })
            setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato5.png")
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [props.match.params.id])

    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            paddingTop: '2rem',
            paddingBottom: '4rem'
        }}>
            <Container>
                {/* Back Button */}
                <Row style={{marginBottom: '1.5rem'}}>
                    <Col>
                        <Button
                            onClick={() => history.push('/projects')}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#003049',
                                border: '1px solid #e8e8e8',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                fontWeight: '500',
                                fontSize: '0.9rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.borderColor = '#003049';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.borderColor = '#e8e8e8';
                            }}
                        >
                            <FaArrowLeft /> Back to Projects
                        </Button>
                    </Col>
                </Row>

                {/* Page Header */}
                <Row style={{marginBottom: '2rem'}}>
                    <Col>
                        <h2 style={{
                            fontWeight: 600,
                            color: '#003049',
                            fontSize: '2rem',
                            marginBottom: '0.5rem'
                        }}>
                            {project.projectName}
                        </h2>
                        <p style={{
                            color: '#666',
                            fontSize: '1.1rem',
                            marginBottom: 0
                        }}>
                            {project.tagLine}
                        </p>
                    </Col>
                </Row>

                <Row>
                    {/* Image Gallery Section */}
                    <Col lg={6} style={{marginBottom: '2rem'}}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '2rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                padding: '1rem',
                                marginBottom: '1rem'
                            }}>
                                <Image
                                    fluid
                                    src={displayImage}
                                    style={{
                                        borderRadius: '8px',
                                        width: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            {/* Thumbnail Gallery */}
                            <Row style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                gap: '0.5rem',
                                marginLeft: 0,
                                marginRight: 0
                            }}>
                                {project.images !== undefined && project.images.map((image, index) => {
                                    return (
                                        <Col 
                                            key={index}
                                            lg={3} 
                                            sm={3} 
                                            xs={3}
                                            style={{
                                                padding: '0.25rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{
                                                backgroundColor: '#f8f9fa',
                                                borderRadius: '6px',
                                                padding: '0.5rem',
                                                border: displayImage === image ? '2px solid #003049' : '2px solid transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#003049';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (displayImage !== image) {
                                                    e.currentTarget.style.borderColor = 'transparent';
                                                }
                                            }}>
                                                <Image 
                                                    fluid
                                                    src={image}
                                                    onClick={() => {
                                                        setDisplayImage(image)
                                                    }}
                                                    style={{
                                                        borderRadius: '4px',
                                                        width: '100%'
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Col>

                    {/* Project Details Section */}
                    <Col lg={6}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            marginBottom: '2rem'
                        }}>
                            {/* Action Buttons */}
                            <div style={{marginBottom: '2rem'}}>
                                <div style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <Button
                                        disabled={project.video === undefined || project.video === null}
                                        onClick={() => {
                                            setIsDisplayed(true)
                                        }}
                                        style={{
                                            backgroundColor: '#003049',
                                            border: 'none',
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: '8px',
                                            fontWeight: '500',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#002037';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#003049';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <FaVideo /> Watch Preview
                                    </Button>

                                    <Button
                                        href={project.github}
                                        style={{
                                            backgroundColor: '#f8f9fa',
                                            color: '#003049',
                                            border: '1px solid #e8e8e8',
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: '8px',
                                            fontWeight: '500',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#e8e8e8';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <FaGithub /> Source Code
                                    </Button>
                                </div>
                            </div>

                            {/* Video Preview */}
                            {project.id !== undefined && isDisplayed === true && (
                                <div style={{
                                    marginBottom: '2rem',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}>
                                    <Vimeo
                                        id={project.video}
                                        video={project.video}
                                        height='400px'
                                        volume={true}
                                        responsive={true}
                                    />
                                </div>
                            )}

                            {/* Description */}
                            <div style={{marginBottom: '2rem'}}>
                                <h4 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 600,
                                    color: '#003049',
                                    marginBottom: '1rem'
                                }}>
                                    About this Project
                                </h4>
                                <p style={{
                                    color: '#555',
                                    lineHeight: '1.8',
                                    fontSize: '1rem',
                                    marginBottom: 0
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Concepts Used */}
                            {project.conceptsUsed !== undefined && project.conceptsUsed.length > 0 && (
                                <div style={{marginBottom: '2rem'}}>
                                    <h4 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                        color: '#003049',
                                        marginBottom: '1rem'
                                    }}>
                                        Key Concepts & Technologies
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {project.conceptsUsed.map((concept, index) => (
                                            <li 
                                                key={index}
                                                style={{
                                                    color: '#555',
                                                    fontSize: '1rem',
                                                    marginBottom: '0.5rem',
                                                    paddingLeft: '1.5rem',
                                                    position: 'relative',
                                                    lineHeight: '1.6'
                                                }}
                                            >
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: '#003049',
                                                    fontWeight: 'bold'
                                                }}>•</span>
                                                {concept}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Configuration */}
                            {project.configuration && project.configuration.length !== 0 && (
                                <div>
                                    <h4 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                        color: '#003049',
                                        marginBottom: '1rem'
                                    }}>
                                        Project Configuration
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {project.configuration.map((config, index) => (
                                            <li 
                                                key={index}
                                                style={{
                                                    color: '#555',
                                                    fontSize: '1rem',
                                                    marginBottom: '0.5rem',
                                                    paddingLeft: '1.5rem',
                                                    position: 'relative',
                                                    lineHeight: '1.6'
                                                }}
                                            >
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: '#003049',
                                                    fontWeight: 'bold'
                                                }}>•</span>
                                                {config}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
                
                <Footer />
            </Container>
        </div>
    )
}

export default ProjectDetails