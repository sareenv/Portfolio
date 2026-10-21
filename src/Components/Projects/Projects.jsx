import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ErrorState from '../Utilities/ErrorState';
import { downloadProject, clearCache } from '../../Services/Projects';
import { HiArrowRight } from 'react-icons/hi';
import '../../Styles/base.scss';
import '../../Styles/projects-page.scss';

// Styles for the Projects component
const styles = {
    container: {
        backgroundColor: '#F5F3EE',
        padding: '6rem 0'
    },
    sectionHeader: {
        marginBottom: '3.5rem',
        textAlign: 'center'
    },
    sectionLabel: {
        color: '#B45309',
        fontSize: '0.85rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
        display: 'block'
    },
    sectionTitle: {
        fontWeight: 700,
        color: '#14213D',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '1rem',
        lineHeight: 1.2
    },
    sectionDescription: {
        color: '#334E68',
        fontSize: '1.15rem',
        maxWidth: '600px',
        lineHeight: 1.8,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    projectsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
    }
};

const ProjectCard = ({ project, index }) => (
    <Link to={{ pathname: '/project_details/' + project.id }} className="project-card">
        <div className="project-card__media">
            <img
                src={project.thumbnail}
                alt={project.projectName}
                className="project-card__image"
                loading="lazy"
            />
        </div>

        <div className="project-card__body">
            {project.tags && project.tags.length > 0 && (
                <p className="project-card__tags">{project.tags.slice(0, 3).join(' · ')}</p>
            )}

            <h3 className="project-card__title">{project.projectName}</h3>

            <p className="project-card__description">{project.description}</p>

            <div className="project-card__footer">
                <span className="project-card__link">
                    Explore project <HiArrowRight size={14} />
                </span>
                <span className="project-card__number">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>
        </div>
    </Link>
);

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
                    <div className="projects-grid-3col">
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
                    <>
                        <div className="projects-grid-3col">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                        
                        {/* View All Button - shown on home page */}
                        {props.showTitle && (
                            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                <Link
                                    to="/projects"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#14213D',
                                        color: '#ffffff',
                                        padding: '1rem 2rem',
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(0, 48, 73, 0.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#004c6d';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 48, 73, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#003049';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 48, 73, 0.2)';
                                    }}
                                >
                                    View All Projects
                                    <HiArrowRight size={18} />
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </Container>
        </div>
    )
}

export default Project
