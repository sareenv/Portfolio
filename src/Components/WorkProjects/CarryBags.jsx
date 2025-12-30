import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import CB02 from '../../Assets/carrybags/cb02.png'
import CB04 from '../../Assets/carrybags/cb04.png'
import DownloadLogo from '../../Assets/appStoreButton.svg'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Published apps data - easily add more projects here
const publishedApps = [
    {
        id: 1,
        name: 'WeCarryBags',
        description: 'A shopping delivery service app that transforms your in-store experience. Get your purchases delivered directly to any address—no more carrying bags while you explore.',
        rating: '4.8',
        techStack: ['SwiftUI', 'iOS 15+', 'iPhone & iPad'],
        appStoreUrl: 'https://apps.apple.com/ca/app/wecarrybags/id6475269259',
        screenshots: [CB04, CB02]
    }
    // Add more apps here in the future:
    // {
    //     id: 2,
    //     name: 'App Name',
    //     description: 'App description...',
    //     rating: '4.5',
    //     techStack: ['Swift', 'iOS'],
    //     appStoreUrl: 'https://...',
    //     screenshots: [screenshot1, screenshot2]
    // }
];

const PublishedWork = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentApp = publishedApps[currentIndex];
    
    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? publishedApps.length - 1 : prev - 1));
    };
    
    const goToNext = () => {
        setCurrentIndex((prev) => (prev === publishedApps.length - 1 ? 0 : prev + 1));
    };
    
    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '6rem 0'
        }}>
            <Container>
                {/* Section Header */}
                <div style={{ 
                    marginBottom: '3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <p style={{
                            color: '#00b4d8',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}>
                            Published Work
                        </p>
                        <h2 style={{
                            fontWeight: 700,
                            color: '#003049',
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            marginBottom: '0.5rem',
                            lineHeight: 1.3
                        }}>
                            Available on the App Store
                        </h2>
                        <p style={{
                            color: '#666',
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                            lineHeight: 1.7,
                            marginBottom: 0
                        }}>
                            Mobile applications I designed and developed.
                        </p>
                    </div>
                    
                    {/* Navigation Arrows - only show if more than 1 app */}
                    {publishedApps.length > 1 && (
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            <button
                                onClick={goToPrevious}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    border: '1px solid #e0e0e0',
                                    backgroundColor: '#fff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#003049',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#003049';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#003049';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#fff';
                                    e.currentTarget.style.color = '#003049';
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                }}
                                aria-label="Previous app"
                            >
                                <HiChevronLeft size={20} />
                            </button>
                            <button
                                onClick={goToNext}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    border: '1px solid #e0e0e0',
                                    backgroundColor: '#fff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#003049',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#003049';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#003049';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#fff';
                                    e.currentTarget.style.color = '#003049';
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                }}
                                aria-label="Next app"
                            >
                                <HiChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
                
                {/* App Showcase */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Screenshots */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        padding: '2rem 0'
                    }}>
                        {currentApp.screenshots.map((screenshot, index) => (
                            <div 
                                key={index}
                                style={{ 
                                    maxWidth: '180px',
                                    marginTop: index === 1 ? '2rem' : 0
                                }}
                            >
                                <img 
                                    src={screenshot} 
                                    alt={`${currentApp.name} screenshot ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '16px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    
                    {/* App Info */}
                    <div style={{ maxWidth: '520px' }}>
                        {/* App Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 0.75rem',
                            backgroundColor: 'rgba(0, 180, 216, 0.1)',
                            borderRadius: '100px',
                            marginBottom: '1.25rem'
                        }}>
                            <span style={{ fontSize: '0.8rem' }}>⭐</span>
                            <span style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: '#003049'
                            }}>
                                {currentApp.rating} Rating
                            </span>
                        </div>
                        
                        {/* App Name */}
                        <h3 style={{
                            fontWeight: 700,
                            color: '#003049',
                            fontSize: '1.75rem',
                            marginBottom: '1rem',
                            lineHeight: 1.3
                        }}>
                            {currentApp.name}
                        </h3>
                        
                        {/* Description */}
                        <p style={{
                            color: '#555', 
                            lineHeight: 1.8,
                            marginBottom: '1.5rem',
                            fontSize: '1.05rem'
                        }}>
                            {currentApp.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: '2rem',
                            flexWrap: 'wrap'
                        }}>
                            {currentApp.techStack.map((tech) => (
                                <span 
                                    key={tech}
                                    style={{
                                        padding: '0.4rem 0.75rem',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: 500
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* CTA */}
                        <div style={{
                            display: 'flex', 
                            alignItems: 'center',
                            gap: '1.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <img 
                                src={DownloadLogo} 
                                onClick={() => window.open(currentApp.appStoreUrl, '_blank')}
                                alt="Download on the App Store"
                                style={{
                                    cursor: 'pointer',
                                    width: '140px',
                                    transition: 'opacity 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                            />
                            <a 
                                href={currentApp.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: '#00b4d8',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    textDecoration: 'none'
                                }}
                            >
                                Learn more <HiArrowRight size={16} />
                            </a>
                        </div>
                        
                        {/* Dots indicator - only show if more than 1 app */}
                        {publishedApps.length > 1 && (
                            <div style={{
                                display: 'flex',
                                gap: '0.5rem',
                                marginTop: '2rem'
                            }}>
                                {publishedApps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        style={{
                                            width: index === currentIndex ? '24px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            border: 'none',
                                            backgroundColor: index === currentIndex ? '#00b4d8' : '#e0e0e0',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            padding: 0
                                        }}
                                        aria-label={`Go to app ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PublishedWork;