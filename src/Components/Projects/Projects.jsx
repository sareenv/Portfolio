import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Badge from '../Utilities/Badge';
import ErrorState from '../Utilities/ErrorState';
import { downloadProject, clearCache } from '../../Services/Projects';
import { HiArrowRight } from 'react-icons/hi';
import '../../Styles/base.scss';

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
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '6rem 0'
            }}>
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
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '6rem 0'
        }}>
            <Container>
                {/* Section Header */}
                {props.showTitle && (
                    <div style={{ marginBottom: '3rem' }}>
                        <p style={{
                            color: '#00b4d8',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}>
                            Projects
                        </p>
                        <h2 style={{
                            fontWeight: 700,
                            color: '#003049',
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            marginBottom: '0.5rem',
                            lineHeight: 1.3
                        }}>
                            Featured Work
                        </h2>
                        <p style={{
                            color: '#666',
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                            lineHeight: 1.7,
                            marginBottom: 0
                        }}>
                            A selection of projects I've worked on recently.
                        </p>
                    </div>
                )}
                    
                {/* Projects Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
                    gap: '1.5rem'
                }}>
                    {projects.map((project) => (
                        <Link 
                            key={project.id}
                            to={{ pathname: '/project_details/' + project.id }}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <article 
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    transition: 'all 0.25s ease',
                                    height: '100%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Image */}
                                <div style={{ 
                                    width: '100%', 
                                    height: '200px', 
                                    overflow: 'hidden',
                                    backgroundColor: '#e9ecef'
                                }}>
                                    <img 
                                        src={project.thumbnail}
                                        alt={project.projectName}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1
                                }}>
                                    {/* Tag */}
                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <Badge tag={project.tags[0]} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 style={{
                                        fontWeight: 600, 
                                        fontSize: '1.15rem',
                                        color: '#003049',
                                        marginBottom: '0.75rem',
                                        lineHeight: 1.4
                                    }}> 
                                        {project.projectName} 
                                    </h3>
                                    
                                    {/* Description */}
                                    <p style={{ 
                                        color: '#666',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.7,
                                        marginBottom: '1.25rem',
                                        flex: 1,
                                        display: '-webkit-box',
                                        WebkitLineClamp: '3',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}> 
                                        {project.description} 
                                    </p>
                                    
                                    {/* Link */}
                                    <div style={{
                                        color: '#00b4d8',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        View project
                                        <HiArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Project
