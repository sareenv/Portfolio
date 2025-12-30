import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Badge from '../Utilities/Badge';
import ErrorState from '../Utilities/ErrorState';
import { downloadProject, clearCache } from '../../Services/Projects';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import '../../Styles/base.scss';

// Styles for the Projects component
const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        padding: '6rem 0'
    },
    sectionHeader: {
        marginBottom: '3.5rem',
        textAlign: 'center'
    },
    sectionLabel: {
        color: '#00b4d8',
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: 'rgba(0, 180, 216, 0.1)',
        borderRadius: '20px'
    },
    sectionTitle: {
        fontWeight: 700,
        color: '#003049',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '1rem',
        lineHeight: 1.2
    },
    sectionDescription: {
        color: '#666',
        fontSize: '1.15rem',
        maxWidth: '600px',
        lineHeight: 1.8,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    projectsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '2rem'
    },
    projectCard: {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0,0,0,0.06)',
        position: 'relative'
    },
    projectCardHover: {
        transform: 'translateY(-8px)',
        boxShadow: '0 25px 50px rgba(0,48,73,0.12)'
    },
    imageContainer: {
        width: '100%',
        height: '220px',
        overflow: 'hidden',
        backgroundColor: '#f0f2f5',
        position: 'relative'
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,48,73,0.03) 100%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
    },
    projectImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    cardContent: {
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1rem'
    },
    projectTitle: {
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#003049',
        marginBottom: '0.85rem',
        lineHeight: 1.4,
        transition: 'color 0.3s ease'
    },
    projectDescription: {
        color: '#5a6c7d',
        fontSize: '0.95rem',
        lineHeight: 1.75,
        marginBottom: '1.5rem',
        flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
    },
    cardFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(0,0,0,0.06)'
    },
    viewLink: {
        color: '#00b4d8',
        fontSize: '0.9rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease'
    },
    viewLinkArrow: {
        transition: 'transform 0.3s ease'
    },
    cardNumber: {
        fontSize: '0.8rem',
        color: '#adb5bd',
        fontWeight: 500
    }
};

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={{ pathname: '/project_details/' + project.id }}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <article
                style={{
                    ...styles.projectCard,
                    ...(isHovered ? styles.projectCardHover : {})
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image */}
                <div style={styles.imageContainer}>
                    <img
                        src={project.thumbnail}
                        alt={project.projectName}
                        style={{
                            ...styles.projectImage,
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                        }}
                    />
                    <div style={{
                        ...styles.imageOverlay,
                        opacity: isHovered ? 1 : 0,
                        background: 'linear-gradient(180deg, rgba(0,48,73,0.1) 0%, rgba(0,48,73,0.4) 100%)'
                    }}>
                        <span style={{
                            backgroundColor: 'white',
                            color: '#003049',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}>
                            View Details <HiExternalLink size={14} />
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div style={styles.cardContent}>
                    {/* Tags */}
                    <div style={styles.tagsContainer}>
                        {project.tags && project.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} tag={tag} />
                        ))}
                    </div>

                    {/* Title */}
                    <h3 style={{
                        ...styles.projectTitle,
                        color: isHovered ? '#00b4d8' : '#003049'
                    }}>
                        {project.projectName}
                    </h3>

                    {/* Description */}
                    <p style={styles.projectDescription}>
                        {project.description}
                    </p>

                    {/* Footer */}
                    <div style={styles.cardFooter}>
                        <div style={{
                            ...styles.viewLink,
                            color: isHovered ? '#0096c7' : '#00b4d8'
                        }}>
                            Explore project
                            <HiArrowRight
                                size={16}
                                style={{
                                    ...styles.viewLinkArrow,
                                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                                }}
                            />
                        </div>
                        <span style={styles.cardNumber}>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

const Project = (props) => {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchProjects = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const items = await downloadProject()
            let start = 0;
            const length = props.length;
            const data = length != null ? items.slice(start, length) : items
            setProjects(data)
        } catch (err) {
            setError({
                message: err.message || 'Failed to load projects',
                type: err.type || 'error'
            })
        } finally {
            setLoading(false)
        }
    }, [props.length])

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])

    const handleRetry = () => {
        clearCache()
        fetchProjects()
    }

    if (error) {
        return (
            <div style={styles.container}>
                <ErrorState
                    title="Couldn't load projects"
                    message={error.message}
                    type={error.type}
                    onRetry={handleRetry}
                />
            </div>
        )
    }

    return (
        <div style={styles.container}>
            <Container>
                {/* Section Header */}
                {props.showTitle && (
                    <div style={styles.sectionHeader}>
                        <span style={styles.sectionLabel}>
                            Portfolio
                        </span>
                        <h2 style={styles.sectionTitle}>
                            Featured Projects
                        </h2>
                        <p style={styles.sectionDescription}>
                            A curated selection of my recent work, showcasing creative solutions and technical expertise.
                        </p>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[1, 2, 3].map((item) => (
                            <div key={item} style={{
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.06)'
                            }}>
                                <div style={{
                                    height: '220px',
                                    backgroundColor: '#f0f2f5',
                                    animation: 'pulse 2s infinite'
                                }} />
                                <div style={{ padding: '1.75rem' }}>
                                    <div style={{
                                        height: '20px',
                                        width: '60%',
                                        backgroundColor: '#f0f2f5',
                                        borderRadius: '4px',
                                        marginBottom: '1rem'
                                    }} />
                                    <div style={{
                                        height: '14px',
                                        width: '100%',
                                        backgroundColor: '#f0f2f5',
                                        borderRadius: '4px',
                                        marginBottom: '0.5rem'
                                    }} />
                                    <div style={{
                                        height: '14px',
                                        width: '80%',
                                        backgroundColor: '#f0f2f5',
                                        borderRadius: '4px'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && (
                    <div style={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Project
