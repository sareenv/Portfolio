import React from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap'
import CB02 from '../../Assets/carrybags/cb02.png'
import CB04 from '../../Assets/carrybags/cb04.png'
import DownloadLogo from '../../Assets/appStoreButton.svg'

const CarryBags = () => {
    const handleOpenAppLink = () => {
        window.location.href = "https://apps.apple.com/ca/app/wecarrybags/id6475269259"
    }
    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '4rem 0',
            transition: 'all 0.3s ease'
        }}>
            <Container>
                <Row style={{marginBottom: '3rem'}}>
                    <Col sm={12}>
                        <div style={{textAlign: 'center'}}>
                            <h3 style={{
                                fontWeight: 600, 
                                color: '#003049', 
                                marginBottom: '0.5rem',
                                fontSize: '1.8rem'
                            }}> 
                                Published Work
                            </h3>
                            <p style={{
                                color: '#666', 
                                fontSize: '1.05rem', 
                                marginBottom: '0',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                Mobile application available on the App Store
                            </p>
                        </div>
                    </Col>
                </Row>
                
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}>
                    <Row style={{alignItems: 'center'}}>
                        <Col sm={12} md={5} lg={5}>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                gap: '1.5rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '400px'
                            }}>
                                <div style={{
                                    flex: '0 0 auto',
                                    width: '45%',
                                    maxWidth: '200px'
                                }}>
                                    <Image 
                                        fluid 
                                        src={CB04} 
                                        alt="WeCarryBags app screenshot 1"
                                        style={{
                                            borderRadius: '12px',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    flex: '0 0 auto',
                                    width: '45%',
                                    maxWidth: '200px'
                                }}>
                                    <Image 
                                        fluid 
                                        src={CB02} 
                                        alt="WeCarryBags app screenshot 2"
                                        style={{
                                            borderRadius: '12px',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                        
                        <Col sm={12} md={7} lg={7}>
                            <div style={{padding: '2.5rem'}}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem',
                                flexWrap: 'wrap'
                            }}>
                                <span style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#003049',
                                    padding: '0.35rem 0.75rem',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase'
                                }}>
                                    Published App
                                </span>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    fontSize: '0.9rem',
                                    color: '#666'
                                }}>
                                    <span style={{
                                        color: '#003049',
                                        fontWeight: '600',
                                        fontSize: '1rem'
                                    }}>
                                        <span role="img" aria-label="star rating">⭐</span> 4.8
                                    </span>
                                    <span>•</span>
                                    <span>App Store</span>
                                </div>
                            </div>
                            
                            <h4 style={{
                                fontWeight: 600,
                                color: '#003049',
                                fontSize: '1.5rem',
                                marginBottom: '0.75rem'
                            }}>
                                WeCarryBags
                            </h4>
                            
                            <p style={{
                                color: '#555', 
                                lineHeight: '1.8',
                                marginBottom: '1.5rem',
                                fontSize: '1rem'
                            }}>
                                Shopping delivery service that transforms your in-store experience by delivering your purchases 
                                directly to any address you choose. Say goodbye to the hassle of carrying bags and reclaim 
                                your time to explore freely.
                            </p>
                            
                            {/* Tech Info as Badges */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '600'
                                    }}>Tech Stack:</span>
                                    <span style={{
                                        backgroundColor: '#e3f2fd',
                                        color: '#003049',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>SwiftUI</span>
                                    <span style={{
                                        backgroundColor: '#e3f2fd',
                                        color: '#003049',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>iOS 15.0+</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '600'
                                    }}>Platform:</span>
                                    <span style={{
                                        backgroundColor: '#f8f9fa',
                                        color: '#003049',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        border: '1px solid #e8e8e8'
                                    }}>iPhone & iPad</span>
                                </div>
                            </div>
                            
                            <div style={{
                                display: 'flex', 
                                alignItems: 'center',
                                gap: '1rem',
                                paddingTop: '1rem',
                                borderTop: '1px solid #e8e8e8',
                                flexWrap: 'wrap'
                            }}>
                                <Image 
                                    src={DownloadLogo} 
                                    onClick={handleOpenAppLink}
                                    alt="Download on the App Store"
                                    style={{
                                        cursor: 'pointer',
                                        width: '135px',
                                        transition: 'opacity 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                                />
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: '#003049',
                                    fontWeight: 500
                                }}>
                                    Download now on iOS
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default CarryBags;