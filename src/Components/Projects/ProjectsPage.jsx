import React, {useEffect, useState, useCallback} from "react";
import {Row, Col, Image, Container} from 'react-bootstrap'
import {ShimmerPostList, ShimmerThumbnail, 
    ShimmerSectionHeader, ShimmerText} from 'react-shimmer-effects'
import Footer from '../Footer';
import {downloadProject, clearCache} from '../../Services/Projects'
import {Link} from 'react-router-dom'
import '../../Styles/base.scss'
import Project from "./Projects"
import ErrorState from '../Utilities/ErrorState'
import ReactGA from 'react-ga'
import { HiArrowRight, HiOutlineStar } from 'react-icons/hi'

const ProjectsPage = () => {
    const [featuredProject, setfeaturedProject] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const [error, setError] = useState(null)

    const fetchProjects = useCallback(async () => {
        setError(null)
        setVisibility(false)
        try {
            const items = await downloadProject()
            let featuredItems = items.filter(i => i.featured === true)
            setfeaturedProject(featuredItems[0] || null)
            setTimeout(() => {
                setVisibility(true)
            }, 800)
        } catch (err) {
            setError({
                message: err.message || 'Failed to load projects',
                type: err.type || 'error'
            })
            setVisibility(true)
        }
    }, [])

    useEffect(() => {
        fetchProjects()
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [fetchProjects]);

    const handleRetry = () => {
        clearCache()
        fetchProjects()
    }

    if (error) {
        return (
            <div>
                <Container style={{marginTop: '6rem', minHeight: '60vh'}}>
                    <ErrorState 
                        title="Couldn't load projects"
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

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Loading Shimmer */}
            {visibility === false && (
                <Container style={{marginTop: '6rem', paddingBottom: '2rem'}}>
                    <Row>
                        <Col lg={7} md={12} sm={12}>
                            <ShimmerThumbnail height={450} rounded /> 
                        </Col>
                        <Col lg={5} md={12} sm={12}>
                            <div style={{
                                padding: '2rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <ShimmerSectionHeader />
                                <ShimmerText line={4} gap={12} />
                            </div>
                        </Col>
                    </Row>
                    <Container fluid="sm" style={{ marginTop: '4rem' }}>
                        <Row>
                            {[...Array(6)].map((_, idx) => (
                                <Col key={idx} sm={12} md={6} lg={4} style={{padding: '1rem'}}>
                                    <ShimmerPostList postStyle="STYLE_FOUR" row={1} col={1} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            )}

            {/* Featured Project Hero Section */}
            {visibility === true && featuredProject && (
                <div style={{
                    background: 'linear-gradient(135deg, #003049 0%, #001d2d 100%)',
                    paddingTop: '7rem',
                    paddingBottom: '5rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-30%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />

                    <Container>
                        {/* Featured Badge */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '2rem'
                        }}>
                            <HiOutlineStar size={18} color="#00b4d8" />
                            <span style={{
                                color: '#00b4d8',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>
                                Featured Project
                            </span>
                        </div>

                        <Row style={{ alignItems: 'center' }}>
                            <Col lg={6} md={12} style={{ marginBottom: '2rem' }}>
                                {/* Project Info */}
                                <h1 style={{
                                    color: 'white',
                                    fontWeight: 800,
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.2
                                }}>
                                    {featuredProject.projectName}
                                </h1>
                                <p style={{
                                    color: 'rgba(255,255,255,0.75)',
                                    fontSize: '1.15rem',
                                    lineHeight: 1.8,
                                    marginBottom: '2rem',
                                    maxWidth: '500px'
                                }}>
                                    {featuredProject.description}
                                </p>

                                {/* Tags */}
                                {featuredProject.tags && (
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.75rem',
                                        marginBottom: '2.5rem'
                                    }}>
                                        {featuredProject.tags.slice(0, 4).map((tag, idx) => (
                                            <span key={idx} style={{
                                                backgroundColor: 'rgba(0,180,216,0.15)',
                                                color: '#00b4d8',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '25px',
                                                fontSize: '0.85rem',
                                                fontWeight: 500
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* CTA Button */}
                                <Link 
                                    to={"project_details/" + featuredProject.id}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        backgroundColor: '#00b4d8',
                                        color: 'white',
                                        padding: '1rem 2rem',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 4px 20px rgba(0,180,216,0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#0096c7";
                                        e.target.style.transform = "translateY(-3px)";
                                        e.target.style.boxShadow = "0 8px 30px rgba(0,180,216,0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#00b4d8";
                                        e.target.style.transform = "translateY(0)";
                                        e.target.style.boxShadow = "0 4px 20px rgba(0,180,216,0.3)";
                                    }}
                                >
                                    View Project Details
                                    <HiArrowRight size={18} />
                                </Link>
                            </Col>

                            <Col lg={6} md={12}>
                                {/* Project Image */}
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)';
                                }}
                                >
                                    <Image
                                        fluid
                                        src={featuredProject.thumbnail}
                                        alt={featuredProject.projectName}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '30%',
                                        background: 'linear-gradient(transparent, rgba(0,48,73,0.3))',
                                        pointerEvents: 'none'
                                    }} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}

            {/* All Projects Section */}
            {visibility && <Project />}

            <Container>
                <Footer />
            </Container>
        </div>
    )
}

export default ProjectsPage