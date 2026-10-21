import { Container, Image } from 'react-bootstrap'
import React, { useEffect, useState, useCallback } from 'react'
import { FaGithub, FaArrowLeft, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { downloadProjectByID, clearCache } from '../../Services/Projects'
import Vimeo from '@u-wave/react-vimeo'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import ErrorState from '../Utilities/ErrorState'
import '../../Styles/product-details.scss'

const BackButton = ({ onClick }) => (
    <button type="button" className="project-detail__back" onClick={onClick}>
        <FaArrowLeft size={11} /> Back to Projects
    </button>
)

const Skeleton = ({ width, height, center, style }) => (
    <div
        className={`project-detail__skeleton${center ? ' project-detail__skeleton--center' : ''}`}
        style={{ width, height, ...style }}
    />
)

const ProjectDetails = (props) => {
    const [displayImage, setDisplayImage] = useState("");
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

    const goBack = () => history.push('/projects')

    if (error) {
        return (
            <>
                <section className="project-detail">
                    <Container className="project-detail__container">
                        <BackButton onClick={goBack} />
                        <ErrorState
                            title="Couldn't load project"
                            message={error.message}
                            type={error.type}
                            onRetry={handleRetry}
                        />
                    </Container>
                </section>
                <Footer />
            </>
        )
    }

    if (loading || !project) {
        return (
            <section className="project-detail" aria-busy="true">
                <Container className="project-detail__container">
                    <div className="project-detail__header">
                        <Skeleton width="90px" height="14px" center style={{ marginBottom: '1rem' }} />
                        <Skeleton width="60%" height="40px" center style={{ marginBottom: '1rem' }} />
                        <Skeleton width="45%" height="18px" center />
                    </div>
                    <Skeleton width="100%" height="380px" />
                    <Skeleton width="30%" height="14px" style={{ marginTop: '2.5rem', marginBottom: '1rem' }} />
                    <Skeleton width="100%" height="12px" style={{ marginBottom: '0.5rem' }} />
                    <Skeleton width="80%" height="12px" />
                </Container>
            </section>
        )
    }

    const createdAt = project.createdAt
        ? new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
        : null
    const metaParts = [createdAt, ...(project.tags || [])].filter(Boolean)
    const hasImages = project.images && project.images.length > 0

    return (
        <>
            <section className="project-detail">
                <Container className="project-detail__container">
                    <BackButton onClick={goBack} />

                    <header className="project-detail__header">
                        <span className="project-detail__label">{project.category || 'Project'}</span>
                        <h1 className="project-detail__title">{project.projectName}</h1>

                        {project.tagLine && (
                            <p className="project-detail__tagline">{project.tagLine}</p>
                        )}

                        {metaParts.length > 0 && (
                            <p className="project-detail__meta">{metaParts.join(' · ')}</p>
                        )}

                        {(project.github || project.video || project.liveUrl) && (
                            <div className="project-detail__actions">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-detail__link"
                                    >
                                        <FaGithub size={15} /> Source Code
                                    </a>
                                )}
                                {project.video && (
                                    <button
                                        type="button"
                                        onClick={() => setShowVideo(true)}
                                        className="project-detail__link"
                                    >
                                        <FaPlay size={11} /> Watch Demo
                                    </button>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-detail__link"
                                    >
                                        <FaExternalLinkAlt size={11} /> Live Preview
                                    </a>
                                )}
                            </div>
                        )}
                    </header>

                    {/* Gallery */}
                    <div className="project-detail__media">
                        {showVideo && project.video && (
                            <div className="project-detail__video">
                                <button
                                    type="button"
                                    className="project-detail__video-close"
                                    onClick={() => setShowVideo(false)}
                                    aria-label="Close video"
                                >
                                    ×
                                </button>
                                <div className="project-detail__video-inner">
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
                            alt={project.projectName}
                            className="project-detail__image"
                        />

                        {project.video && !showVideo && (
                            <button
                                type="button"
                                className="project-detail__play"
                                onClick={() => setShowVideo(true)}
                                aria-label="Play demo video"
                            >
                                <FaPlay size={18} />
                            </button>
                        )}
                    </div>

                    {hasImages && (
                        <div className="project-detail__gallery-bar">
                            <div className="project-detail__thumbs">
                                {project.images.map((image, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        className={`project-detail__thumb${displayImage === image ? ' project-detail__thumb--active' : ''}`}
                                        onClick={() => {
                                            setDisplayImage(image);
                                            setActiveImageIndex(index);
                                            setShowVideo(false);
                                        }}
                                        aria-label={`Show image ${index + 1}`}
                                        aria-pressed={displayImage === image}
                                    >
                                        <img src={image} alt="" />
                                    </button>
                                ))}
                            </div>
                            <span className="project-detail__counter">
                                {activeImageIndex + 1} / {project.images.length}
                            </span>
                        </div>
                    )}

                    {project.description && (
                        <div className="project-detail__section">
                            <h2 className="project-detail__section-title">About</h2>
                            <p className="project-detail__text">{project.description}</p>
                        </div>
                    )}

                    {project.conceptsUsed && project.conceptsUsed.length > 0 && (
                        <div className="project-detail__section">
                            <h2 className="project-detail__section-title">Technologies &amp; Tools</h2>
                            <ul className="project-detail__list">
                                {project.conceptsUsed.map((concept, index) => (
                                    <li key={index}>{concept}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.configuration && project.configuration.length > 0 && (
                        <div className="project-detail__section">
                            <h2 className="project-detail__section-title">Configuration</h2>
                            <ul className="project-detail__list">
                                {project.configuration.map((config, index) => (
                                    <li key={index}>{config}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </Container>
            </section>
            <Footer />
        </>
    )
}

export default ProjectDetails
