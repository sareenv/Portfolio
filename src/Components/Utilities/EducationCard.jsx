import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Reusable Education Card Component
 * 
 * Props:
 * - degree: string - The degree/qualification name
 * - institution: string - The institution name
 * - location: string (optional) - Location of the institution
 * - year: string (optional) - Year or date range
 * - logo: string - URL to the institution logo
 * - credentialUrl: string (optional) - Link to credential/certificate
 * - credentialId: string (optional) - Credential ID to display
 * - variant: 'default' | 'compact' | 'detailed' - Card style variant
 */

const EducationCard = ({ 
    degree, 
    institution, 
    location, 
    year, 
    logo,
    credentialUrl,
    credentialId,
    variant = 'default'
}) => {
    
    // Compact variant - for sidebars or smaller spaces
    if (variant === 'compact') {
        return (
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f4f8';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
            >
                {/* Logo */}
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    padding: '0.4rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                }}>
                    <img 
                        src={logo} 
                        alt={institution}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                
                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#003049',
                        marginBottom: '0.2rem',
                        lineHeight: 1.3
                    }}>
                        {degree}
                    </h4>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        marginBottom: '0.25rem'
                    }}>
                        {institution}
                    </p>
                    {(location || year) && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontSize: '0.75rem',
                            color: '#999'
                        }}>
                            {location && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                    <FaMapMarkerAlt size={9} />
                                    {location}
                                </span>
                            )}
                            {year && <span>{year}</span>}
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    // Detailed variant - for full education page with more info
    if (variant === 'detailed') {
        return (
            <div 
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.25s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
            >
                {/* Logo Section */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '140px'
                }}>
                    <img 
                        src={logo} 
                        alt={institution}
                        style={{
                            maxHeight: '80px',
                            maxWidth: '160px',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                
                {/* Content Section */}
                <div style={{
                    padding: '1.75rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#003049',
                        marginBottom: '0.5rem',
                        lineHeight: 1.3
                    }}>
                        {degree}
                    </h3>
                    
                    <p style={{
                        fontSize: '1rem',
                        color: '#555',
                        marginBottom: '1rem'
                    }}>
                        {institution}
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        marginBottom: credentialId || credentialUrl ? '1rem' : '0',
                        marginTop: 'auto'
                    }}>
                        {location && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.85rem',
                                color: '#888'
                            }}>
                                <FaMapMarkerAlt size={12} />
                                {location}
                            </div>
                        )}
                        {year && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.85rem',
                                color: '#888'
                            }}>
                                <FaCalendarAlt size={12} />
                                {year}
                            </div>
                        )}
                    </div>
                    
                    {credentialId && (
                        <p style={{
                            fontSize: '0.8rem',
                            color: '#888',
                            marginBottom: credentialUrl ? '1rem' : '0'
                        }}>
                            <span style={{ fontWeight: 600, color: '#666' }}>Credential ID:</span> {credentialId}
                        </p>
                    )}
                    
                    {credentialUrl && (
                        <a 
                            href={credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.9rem',
                                color: '#00b4d8',
                                fontWeight: 500,
                                textDecoration: 'none',
                                marginTop: 'auto'
                            }}
                        >
                            View Credential <FaExternalLinkAlt size={11} />
                        </a>
                    )}
                </div>
            </div>
        );
    }
    
    // Default variant - balanced for most use cases
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                backgroundColor: '#f8f9fa',
                borderRadius: '14px',
                transition: 'all 0.2s ease',
                border: '1px solid transparent',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#e8e8e8';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {/* Logo */}
            <div style={{
                width: '100%',
                height: '120px',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem'
            }}>
                <img 
                    src={logo} 
                    alt={institution}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                    }}
                />
            </div>
            
            {/* Content */}
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#003049',
                    marginBottom: '0.35rem',
                    lineHeight: 1.35
                }}>
                    {degree}
                </h4>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#555',
                    marginBottom: '0.5rem'
                }}>
                    {institution}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    fontSize: '0.8rem',
                    color: '#888'
                }}>
                    {location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <FaMapMarkerAlt size={11} />
                            {location}
                        </span>
                    )}
                    {year && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <FaCalendarAlt size={11} />
                            {year}
                        </span>
                    )}
                </div>
                
                {credentialUrl && (
                    <a 
                        href={credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            fontSize: '0.85rem',
                            color: '#00b4d8',
                            fontWeight: 500,
                            textDecoration: 'none',
                            marginTop: '0.75rem'
                        }}
                    >
                        View Credential <FaExternalLinkAlt size={10} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default EducationCard;
