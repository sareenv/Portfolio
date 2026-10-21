import React, {useEffect, useState, useCallback} from "react";
import {Row, Col, Image, Container} from 'react-bootstrap'
import {ShimmerPostList, ShimmerThumbnail, 
    ShimmerSectionHeader, ShimmerText} from 'react-shimmer-effects'
import Footer from '../Footer';
import {downloadProject, clearCache} from '../../Services/Projects'
import {Link} from 'react-router-dom'
import '../../Styles/base.scss'
import '../../Styles/projects-page.scss'
import Project from "./Projects"
import ErrorState from '../Utilities/ErrorState'
import ReactGA from 'react-ga'
import { HiArrowRight } from 'react-icons/hi'

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
        <div style={{ backgroundColor: '#F5F3EE', minHeight: '100vh' }}>
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

            {/* Featured Project */}
            {visibility === true && featuredProject && (
                <section className="featured-project">
                    <Container>
                        <div className="featured-project__inner">
                            <Row className="featured-project__row">
                                <Col lg={6} md={12} className="featured-project__text">
                                    <span className="featured-project__label">Featured Project</span>
                                    <h1 className="featured-project__title">
                                        {featuredProject.projectName}
                                    </h1>
                                    <p className="featured-project__description">
                                        {featuredProject.description}
                                    </p>
                                    {featuredProject.tags && featuredProject.tags.length > 0 && (
                                        <p className="featured-project__meta">
                                            {featuredProject.tags.slice(0, 4).join(' · ')}
                                        </p>
                                    )}
                                    <Link
                                        to={"project_details/" + featuredProject.id}
                                        className="featured-project__link"
                                    >
                                        View Project Details <HiArrowRight size={16} />
                                    </Link>
                                </Col>

                                <Col lg={6} md={12}>
                                    <div className="featured-project__media">
                                        <Image
                                            fluid
                                            src={featuredProject.thumbnail}
                                            alt={featuredProject.projectName}
                                            className="featured-project__image"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
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