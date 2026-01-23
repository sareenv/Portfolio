import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import React  from 'react'
import { useEffect, useState, useCallback } from 'react'
import { FaGithub, FaVideo, FaArrowLeft, FaExternalLinkAlt, FaPlay, FaCode, FaCogs, FaLightbulb } from 'react-icons/fa'
import { HiOutlineCalendar, HiOutlineTag } from 'react-icons/hi'
import { downloadProjectByID, clearCache } from '../../Services/Projects'
import Vimeo from '@u-wave/react-vimeo'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import ErrorState from '../Utilities/ErrorState'
import Badge from '../Utilities/Badge'
import '../../Styles/product-details.scss'

const ProjectDetails = (props) => {
    const [displayImage, setDisplayImage] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const history = useHistory();

    const fetchProject = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const projectID = props.match.params.id
            const data = await downloadProjectByID(projectID)
            const projectDetails = data.content
            setProject(projectDetails)
            setDisplayImage(projectDetails.thumbnail)
            setIsDisplayed(true)
        } catch (err) {
            setError({
                message: err.message || 'Failed to load project details',
                type: err.type || 'error'
            })
        } finally {
            setLoading(false)
        }
    }, [props.match.params.id])
    
    useEffect(() => {
        fetchProject()
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [fetchProject])

    const handleRetry = () => {
        clearCache()
        fetchProject()
    }

    if (error) {
        return (
            <div style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                paddingTop: '6rem',
                paddingBottom: '4rem'
            }}>
                <Container>
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
                                    gap: '0.5rem'
                                }}
                            >
                                <FaArrowLeft /> Back to Projects
                            </Button>
                        </Col>
                    </Row>
                    <ErrorState 
                        title="Couldn't load project"
                        message={error.message}
                        type={error.type}
                        onRetry={handleRetry}
                    />
                </Container>
                <Container>
                    <Footer />
                </Container>
            </div>
        )
    }

    if (loading || !project) {
        return (
            <div style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                paddingTop: '6rem'
            }}>
                {/* Loading Skeleton */}
                <div style={{
                    background: 'linear-gradient(135deg, #003049 0%, #001d2d 100%)',
                    padding: '4rem 0'
                }}>
                    <Container>
                        <div style={{
                            height: '20px',
                            width: '120px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            marginBottom: '2rem'
                        }} />
                        <div style={{
                            height: '48px',
                            width: '60%',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            marginBottom: '1rem'
                        }} />
                        <div style={{
                            height: '24px',
                            width: '40%',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '4px'
                        }} />
                    </Container>
                </div>
                <Container style={{ marginTop: '2rem' }}>
                    <Row>
                        <Col lg={7}>
                            <div style={{
                                height: '400px',
                                backgroundColor: '#e9ecef',
                                borderRadius: '16px',
                                animation: 'pulse 2s infinite'
                            }} />
                        </Col>
                        <Col lg={5}>
                            <div style={{
                                height: '300px',
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                padding: '2rem'
                            }}>
                                <div style={{
                                    height: '20px',
                                    width: '50%',
                                    backgroundColor: '#e9ecef',
                                    borderRadius: '4px',
                                    marginBottom: '1rem'
                                }} />
                                <div style={{
                                    height: '14px',
                                    width: '100%',
                                    backgroundColor: '#e9ecef',
                                    borderRadius: '4px',
                                    marginBottom: '0.5rem'
                                }} />
                                <div style={{
                                    height: '14px',
                                    width: '80%',
                                    backgroundColor: '#e9ecef',
                                    borderRadius: '4px'
                                }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            minHeight: '100vh'
        }}>
            {/* Hero Header Section */}
            <div style={{
                background: 'linear-gradient(135deg, #003049 0%, #00415a 50%, #001d2d 100%)',
                paddingTop: '7rem',
                paddingBottom: '5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 60px rgba(0,0,0,0.15)'
            }}>
                {/* Background decorations */}
                <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    animation: 'float 20s ease-in-out infinite'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-40%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    animation: 'float 25s ease-in-out infinite reverse'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '30%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    animation: 'float 30s ease-in-out infinite'
                }} />

                <Container>
                    {/* Back Button */}
                    <Button
                        onClick={() => history.push('/projects')}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '50px',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '2rem',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                            e.target.style.transform = 'translateX(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.target.style.transform = 'translateX(0)';
                        }}
                    >
                        <FaArrowLeft size={12} /> Back to Projects
                    </Button>

                    {/* Tags */}
                    {project.tags && (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            marginBottom: '1.5rem'
                        }}>
                            {project.tags.map((tag, idx) => (
                                <span key={idx} style={{
                                    backgroundColor: 'rgba(0,180,216,0.15)',
                                    color: '#00b4d8',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Project Title */}
                    <h1 style={{
                        color: 'white',
                        fontWeight: 800,
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                        maxWidth: '800px'
                    }}>
                        {project.projectName}
                    </h1>

                    {/* Tagline */}
                    {project.tagLine && (
                        <p style={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '1.25rem',
                            lineHeight: 1.7,
                            maxWidth: '700px',
                            marginBottom: '1.5rem',
                            fontWeight: 400
                        }}>
                            {project.tagLine}
                        </p>
                    )}

                    {/* Project Meta Info */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        marginBottom: '2rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {project.createdAt && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem'
                            }}>
                                <HiOutlineCalendar size={18} />
                                <span>{new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                            </div>
                        )}
                        {project.category && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.95rem'
                            }}>
                                <HiOutlineTag size={18} />
                                <span>{project.category}</span>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    backgroundColor: 'white',
                                    color: '#003049',
                                    padding: '0.9rem 1.8rem',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                }}
                            >
                                <FaGithub size={18} /> View Source Code
                            </a>
                        )}
                        {project.video && (
                            <Button
                                onClick={() => setShowVideo(true)}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    backgroundColor: '#00b4d8',
                                    color: 'white',
                                    padding: '0.9rem 1.8rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 20px rgba(0,180,216,0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#0096c7';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,180,216,0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#00b4d8';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,180,216,0.3)';
                                }}
                            >
                                <FaPlay size={14} /> Watch Demo
                            </Button>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    padding: '0.9rem 1.8rem',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                }}
                            >
                                <FaExternalLinkAlt size={14} /> Live Preview
                            </a>
                        )}
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Container style={{ 
                marginTop: 'clamp(-3rem, -5vw, -2rem)',
                paddingBottom: 'clamp(3rem, 8vw, 5rem)',
                position: 'relative',
                zIndex: 10,
                maxWidth: '1400px'
            }}>
                <Row>
                    {/* Image Gallery Section */}
                    <Col lg={8} style={{marginBottom: 'clamp(1.5rem, 4vw, 2rem)'}}>
                        <div className="project-detail-card" style={{
                            backgroundColor: 'white',
                            borderRadius: 'clamp(16px, 4vw, 20px)',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            boxShadow: '0 10px 40px rgba(0,48,73,0.08)',
                            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                            border: '1px solid rgba(0,48,73,0.04)',
                            transition: 'all 0.3s ease'
                        }}>
                            {/* Image Counter */}
                            {project.images && project.images.length > 0 && (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(0,48,73,0.06)'
                                }}>
                                    <h4 style={{
                                        fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                                        fontWeight: 600,
                                        color: '#003049',
                                        margin: 0,
                                        letterSpacing: '-0.01em'
                                    }}>Preview</h4>
                                    <span style={{
                                        fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
                                        color: '#6c757d',
                                        backgroundColor: 'rgba(0,180,216,0.08)',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '6px',
                                        fontWeight: 600,
                                        border: '1px solid rgba(0,180,216,0.12)'
                                    }}>
                                        {activeImageIndex + 1} / {project.images.length}
                                    </span>
                                </div>
                            )}

                            {/* Main Image Display */}
                            <div style={{
                                position: 'relative',
                                backgroundColor: '#f8f9fa',
                                borderRadius: 'clamp(12px, 3vw, 14px)',
                                overflow: 'hidden',
                                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                boxShadow: '0 4px 16px rgba(0,48,73,0.06)',
                                border: '1px solid rgba(0,48,73,0.08)'
                            }}>
                                {/* Video Modal Overlay */}
                                {showVideo && project.video && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0,0,0,0.95)',
                                        zIndex: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '12px'
                                    }}>
                                        <Button
                                            onClick={() => setShowVideo(false)}
                                            style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                border: 'none',
                                                borderRadius: '50%',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '1.2rem',
                                                zIndex: 101
                                            }}
                                        >
                                            ×
                                        </Button>
                                        <div style={{ width: '100%', padding: '1rem' }}>
                                            <Vimeo
                                                id={project.video}
                                                video={project.video}
                                                responsive={true}
                                                autoplay={true}
                                            />
                                        </div>
                                    </div>
                                )}

                                <Image
                                    fluid
                                    src={displayImage}
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                />

                                {/* Play button overlay for video */}
                                {project.video && !showVideo && (
                                    <div
                                        onClick={() => setShowVideo(true)}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            backgroundColor: 'rgba(0,180,216,0.9)',
                                            borderRadius: '50%',
                                            width: '80px',
                                            height: '80px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 10px 30px rgba(0,180,216,0.4)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                                            e.currentTarget.style.backgroundColor = 'rgba(0,150,199,0.95)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                                            e.currentTarget.style.backgroundColor = 'rgba(0,180,216,0.9)';
                                        }}
                                    >
                                        <FaPlay size={24} color="white" style={{ marginLeft: '4px' }} />
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Gallery */}
                            {project.images && project.images.length > 0 && (
                                <div style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    overflowX: 'auto',
                                    paddingBottom: '0.75rem',
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#00b4d8 #f0f2f5'
                                }}>
                                    {project.images.map((image, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setDisplayImage(image);
                                                setActiveImageIndex(index);
                                                setShowVideo(false);
                                            }}
                                            style={{
                                                flexShrink: 0,
                                                width: '90px',
                                                height: '70px',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                border: displayImage === image 
                                                    ? '3px solid #00b4d8' 
                                                    : '3px solid #e9ecef',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                opacity: displayImage === image ? 1 : 0.7,
                                                transform: displayImage === image ? 'scale(1.05)' : 'scale(1)',
                                                boxShadow: displayImage === image 
                                                    ? '0 4px 12px rgba(0,180,216,0.3)' 
                                                    : '0 2px 6px rgba(0,0,0,0.05)'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (displayImage !== image) {
                                                    e.currentTarget.style.opacity = '0.9';
                                                    e.currentTarget.style.borderColor = '#00b4d8';
                                                    e.currentTarget.style.transform = 'scale(1.02)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (displayImage !== image) {
                                                    e.currentTarget.style.opacity = '0.7';
                                                    e.currentTarget.style.borderColor = '#e9ecef';
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }
                                            }}
                                        >
                                            <Image
                                                fluid
                                                src={image}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Technologies Section - Now under the gallery */}
                        {project.conceptsUsed && project.conceptsUsed.length > 0 && (
                            <div className="project-detail-card" style={{
                                backgroundColor: 'white',
                                borderRadius: 'clamp(16px, 4vw, 20px)',
                                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                                boxShadow: '0 10px 40px rgba(0,48,73,0.08)',
                                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                                border: '1px solid rgba(0,48,73,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                                    fontWeight: 600,
                                    color: '#003049',
                                    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(0,48,73,0.06)',
                                    letterSpacing: '-0.01em'
                                }}>
                                    <FaCode size={16} color="#00b4d8" />
                                    Technologies & Tools
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 'clamp(0.5rem, 1.5vw, 0.6rem)',
                                    lineHeight: 1.6
                                }}>
                                    {project.conceptsUsed.map((concept, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(0,48,73,0.04)',
                                                color: '#003049',
                                                padding: 'clamp(0.45rem, 1.5vw, 0.55rem) clamp(0.85rem, 2.5vw, 1rem)',
                                                borderRadius: '7px',
                                                fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                                                fontWeight: 500,
                                                border: '1px solid rgba(0,48,73,0.08)',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                letterSpacing: '0.01em'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#003049';
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.borderColor = '#003049';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,48,73,0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(0,48,73,0.04)';
                                                e.currentTarget.style.color = '#003049';
                                                e.currentTarget.style.borderColor = 'rgba(0,48,73,0.08)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Col>

                    {/* Project Details Section */}
                    <Col lg={4}>
                        {/* About Section */}
                        <div className="project-detail-card" style={{
                            backgroundColor: 'white',
                            borderRadius: 'clamp(16px, 4vw, 20px)',
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            boxShadow: '0 10px 40px rgba(0,48,73,0.08)',
                            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                            border: '1px solid rgba(0,48,73,0.04)',
                            transition: 'all 0.3s ease',
                            height: 'fit-content',
                            position: 'sticky',
                            top: '2rem'
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                                fontWeight: 600,
                                color: '#003049',
                                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid rgba(0,48,73,0.06)',
                                letterSpacing: '-0.01em'
                            }}>
                                <FaLightbulb size={16} color="#00b4d8" />
                                About
                            </h3>
                            <p style={{
                                color: '#526170',
                                lineHeight: 1.75,
                                fontSize: 'clamp(0.875rem, 2.2vw, 0.95rem)',
                                marginBottom: 0,
                                letterSpacing: '0.01em'
                            }}>
                                {project.description}
                            </p>
                        </div>

                        {/* Configuration Section */}
                        {project.configuration && project.configuration.length > 0 && (
                            <div className="project-detail-card" style={{
                                backgroundColor: 'white',
                                borderRadius: 'clamp(16px, 4vw, 20px)',
                                padding: 'clamp(1.5rem, 4vw, 2rem)',
                                boxShadow: '0 10px 40px rgba(0,48,73,0.08)',
                                border: '1px solid rgba(0,48,73,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                                    fontWeight: 600,
                                    color: '#003049',
                                    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(0,48,73,0.06)',
                                    letterSpacing: '-0.01em'
                                }}>
                                    <FaCogs size={16} color="#00b4d8" />
                                    Configuration
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {project.configuration.map((config, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.75rem',
                                                padding: 'clamp(0.65rem, 2vw, 0.75rem) 0',
                                                borderBottom: index < project.configuration.length - 1 
                                                    ? '1px solid rgba(0,48,73,0.06)' 
                                                    : 'none'
                                            }}
                                        >
                                            <span style={{
                                                color: '#00b4d8',
                                                fontWeight: 'bold',
                                                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                                                lineHeight: 1.4,
                                                flexShrink: 0
                                            }}>•</span>
                                            <span style={{
                                                color: '#526170',
                                                fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                                                lineHeight: 1.65,
                                                letterSpacing: '0.01em'
                                            }}>
                                                {config}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Col>
                </Row>
                
                <Footer />
            </Container>
        </div>
    )
}

export default ProjectDetails