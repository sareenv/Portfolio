import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { FaApple, FaStar, FaCheckCircle } from 'react-icons/fa';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';
import CB04 from '../../Assets/carrybags/cb04.png';
import CB02 from '../../Assets/carrybags/cb02.png';
import DownloadLogo from '../../Assets/appStoreButton.svg';
import Footer from '../Footer';

// Published apps configuration - easily append new apps here as they are published
export const publishedAppsList = [
    {
        id: 'wecarrybags',
        name: 'WeCarryBags',
        subtitle: 'Shopping & Luggage Delivery Service',
        rating: '4.8',
        category: 'Shopping & Logistics',
        platform: 'iOS 15.0+ • iPhone & iPad',
        appStoreUrl: 'https://apps.apple.com/ca/app/wecarrybags/id6475269259',
        icon: CB04,
        screenshots: [CB04, CB02],
        description: 'A shopping delivery service application designed to transform the retail experience. Customers can have their in-store purchases and bags delivered directly to any home or hotel address, eliminating the hassle of carrying heavy bags while exploring malls and city centers.',
        highlights: [
            'Instant in-store pickup and scheduled home/hotel drop-off',
            'Real-time delivery status updates and route tracking',
            'Fluid native user experience built entirely with SwiftUI',
            'Secure payments, address management, and order history'
        ],
        techStack: ['SwiftUI', 'Combine', 'MapKit', 'CoreLocation', 'REST API', 'iOS 15+']
    }
];

const PublishedAppsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div style={{ backgroundColor: '#F5F3EE', minHeight: '100vh' }}>
            {/* Hero Header Section */}
            <div style={{
                background: 'linear-gradient(160deg, #14213D 0%, #334E68 100%)',
                padding: '8rem 0 5rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background ambient glow */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }} />

                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            {/* Breadcrumb / Back Link */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Link
                                    to="/"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.45rem',
                                        color: 'rgba(245, 243, 238, 0.75)',
                                        fontSize: '0.875rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#F59E0B'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245, 243, 238, 0.75)'; }}
                                >
                                    <HiArrowLeft size={16} /> Back to Home
                                </Link>
                            </div>

                            {/* Eyebrow Label */}
                            <p style={{
                                color: '#F59E0B',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <FaApple size={16} />
                                App Store Releases
                            </p>

                            <h1 style={{
                                color: '#F5F3EE',
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: 700,
                                marginBottom: '1.25rem',
                                lineHeight: 1.2
                            }}>
                                Published Applications
                            </h1>

                            <p style={{
                                color: 'rgba(245, 243, 238, 0.85)',
                                fontSize: '1.15rem',
                                lineHeight: 1.7,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Native mobile applications designed, developed, and published to the Apple App Store.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Apps Showcase Section */}
            <div style={{ padding: '5rem 0' }}>
                <Container>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4rem',
                        maxWidth: '1050px',
                        margin: '0 auto'
                    }}>
                        {publishedAppsList.map((app) => (
                            <div 
                                key={app.id}
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: 'clamp(1.5rem, 4vw, 3rem)',
                                    border: '1px solid #E2DED6',
                                    boxShadow: '0 4px 24px rgba(20, 33, 61, 0.06)',
                                    overflow: 'hidden'
                                }}
                            >
                                <Row style={{ alignItems: 'center' }}>
                                    {/* App Info Column */}
                                    <Col xs={12} lg={7} style={{ marginBottom: '2.5rem' }}>
                                        {/* App Header Badge */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            marginBottom: '1.5rem'
                                        }}>
                                            <img 
                                                src={app.icon} 
                                                alt={`${app.name} icon`}
                                                style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    borderRadius: '14px',
                                                    boxShadow: '0 4px 12px rgba(20, 33, 61, 0.12)',
                                                    border: '1px solid #E2DED6',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div>
                                                <h2 style={{
                                                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                                                    fontWeight: 700,
                                                    color: '#14213D',
                                                    margin: '0 0 0.25rem',
                                                    lineHeight: 1.2
                                                }}>
                                                    {app.name}
                                                </h2>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    gap: '0.75rem',
                                                    fontSize: '0.85rem'
                                                }}>
                                                    <span style={{
                                                        color: '#B45309',
                                                        fontWeight: 700,
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.25rem'
                                                    }}>
                                                        <FaStar size={13} /> {app.rating} Rating
                                                    </span>
                                                    <span style={{ color: '#E2DED6' }}>•</span>
                                                    <span style={{ color: '#334E68', fontWeight: 500 }}>
                                                        {app.category}
                                                    </span>
                                                    <span style={{ color: '#E2DED6' }}>•</span>
                                                    <span style={{ color: '#627D98' }}>
                                                        {app.platform}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p style={{
                                            color: '#334E68',
                                            fontSize: '1.05rem',
                                            lineHeight: 1.75,
                                            marginBottom: '1.5rem'
                                        }}>
                                            {app.description}
                                        </p>

                                        {/* Highlights */}
                                        <div style={{ marginBottom: '1.75rem' }}>
                                            <h4 style={{
                                                fontSize: '0.9rem',
                                                fontWeight: 700,
                                                color: '#14213D',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.08em',
                                                marginBottom: '0.75rem'
                                            }}>
                                                Key Capabilities
                                            </h4>
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.6rem'
                                            }}>
                                                {app.highlights.map((item, idx) => (
                                                    <li 
                                                        key={idx}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'flex-start',
                                                            gap: '0.65rem',
                                                            color: '#334E68',
                                                            fontSize: '0.95rem',
                                                            lineHeight: 1.5
                                                        }}
                                                    >
                                                        <FaCheckCircle size={15} style={{ color: '#D97706', marginTop: '0.2rem', flexShrink: 0 }} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: '2rem'
                                        }}>
                                            {app.techStack.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    style={{
                                                        padding: '0.35rem 0.8rem',
                                                        backgroundColor: '#F5F3EE',
                                                        border: '1px solid #E2DED6',
                                                        borderRadius: '20px',
                                                        fontSize: '0.8rem',
                                                        color: '#14213D',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* App Store Download Button & Link */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.25rem',
                                            flexWrap: 'wrap'
                                        }}>
                                            <a 
                                                href={app.appStoreUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ display: 'inline-block', lineHeight: 1 }}
                                            >
                                                <img 
                                                    src={DownloadLogo} 
                                                    alt="Download on the App Store"
                                                    style={{
                                                        height: '44px',
                                                        width: 'auto',
                                                        cursor: 'pointer',
                                                        transition: 'opacity 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                                                />
                                            </a>
                                            <a 
                                                href={app.appStoreUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.45rem',
                                                    color: '#B45309',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#D97706'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#B45309'; }}
                                            >
                                                View on Apple App Store <HiExternalLink size={16} />
                                            </a>
                                        </div>
                                    </Col>

                                    {/* Screenshots Gallery Column */}
                                    <Col xs={12} lg={5}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '1.25rem',
                                            padding: '1rem 0'
                                        }}>
                                            {app.screenshots.map((shot, sIndex) => (
                                                <div 
                                                    key={sIndex}
                                                    style={{
                                                        maxWidth: '185px',
                                                        marginTop: sIndex === 1 ? '2.5rem' : '0',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                >
                                                    <img 
                                                        src={shot} 
                                                        alt={`${app.name} preview screen ${sIndex + 1}`}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius: '18px',
                                                            boxShadow: '0 20px 40px rgba(20, 33, 61, 0.16)',
                                                            border: '1px solid #E2DED6'
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Global Footer */}
            <Footer />
        </div>
    );
};

export default PublishedAppsPage;
