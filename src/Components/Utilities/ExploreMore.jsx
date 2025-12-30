import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaCogs, FaLaptopCode } from 'react-icons/fa';

const ExploreMore = ({ currentPage }) => {
    const pages = [
        {
            title: 'Experience',
            description: 'Explore my professional journey at Dayforce and previous roles',
            icon: <FaBriefcase size={28} />,
            link: '#/experience',
            color: '#00b4d8',
            gradient: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
            show: currentPage !== 'experience'
        },
        {
            title: 'Education',
            description: 'Learn about my academic background and certifications',
            icon: <FaGraduationCap size={28} />,
            link: '#/education',
            color: '#00b4d8',
            gradient: 'linear-gradient(135deg, #003049 0%, #00546e 100%)',
            show: currentPage !== 'education'
        },
        {
            title: 'Services',
            description: 'Discover how I can help with your next project',
            icon: <FaCogs size={28} />,
            link: '#/services',
            color: '#00b4d8',
            gradient: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
            show: currentPage !== 'services'
        },
        {
            title: 'Projects',
            description: 'View my personal and academic projects',
            icon: <FaLaptopCode size={28} />,
            link: '#/projects',
            color: '#00b4d8',
            gradient: 'linear-gradient(135deg, #003049 0%, #001d2d 100%)',
            show: currentPage !== 'projects'
        }
    ].filter(page => page.show);

    // Only show 3 cards max
    const displayPages = pages.slice(0, 3);

    if (displayPages.length === 0) return null;

    return (
        <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '4rem 0',
            marginTop: '2rem'
        }}>
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ 
                        fontSize: '2rem', 
                        fontWeight: 600, 
                        color: '#003049',
                        marginBottom: '0.75rem'
                    }}>
                        Explore More
                    </h2>
                    <p style={{ 
                        fontSize: '1.05rem', 
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Discover more about my skills, experience, and how I can help you
                    </p>
                </div>
                <Row>
                    {displayPages.map((page, index) => (
                        <Col key={index} sm={12} md={4} style={{marginBottom: '1.5rem'}}>
                            <a href={page.link} style={{ textDecoration: 'none' }}>
                                <Card
                                    style={{
                                        border: 'none',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        height: '100%',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    <div style={{
                                        background: page.gradient,
                                        padding: '2rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        minHeight: '140px'
                                    }}>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            borderRadius: '50%',
                                            width: '80px',
                                            height: '80px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            {page.icon}
                                        </div>
                                    </div>
                                    <Card.Body style={{ padding: '1.75rem' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: 600,
                                            color: '#003049',
                                            marginBottom: '0.75rem'
                                        }}>
                                            {page.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: '#666',
                                            marginBottom: '1rem',
                                            lineHeight: 1.6
                                        }}>
                                            {page.description}
                                        </p>
                                        <span style={{
                                            color: page.color,
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            Learn more →
                                        </span>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ExploreMore;
