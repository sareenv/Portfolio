import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const getDiceBearSectionAsset = (seed) => (
    `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(seed)}&backgroundColor=f5f3ee,e2ded6,fef3c7,dbeafe&radius=12`
);

const SkillsServices = () => {
    // Initialize all cards as expanded (0 through 6)
    const [expandedCards, setExpandedCards] = useState(new Set([0, 1, 2, 3, 4, 5, 6]));

    const skillsData = [
        {
            category: 'Mobile Development',
            specialization: 'iOS Platform',
            experience: [
                'UIKit - Building user interfaces for iOS apps',
                'AVKit - Working with audio and video in iOS',
                'Swift UI - Modern declarative UI framework',
                'MapKit - Integrating maps and location data',
                'CoreLocation - Managing location data',
                'CoreData - Persistent data storage solutions',
                'Combine - Handling asynchronous programming'
            ],
            asset: getDiceBearSectionAsset('connect-mobile-development')
        },
        {
            category: 'Backend Development',
            specialization: 'Node.js Environment',
            experience: [
                'Express - Building web applications and APIs',
                'Koa - Next-generation web framework for Node.js',
                'REST API - Designing RESTful services',
                'OAuth - Implementing OAuth authentication',
                'GraphQL - Developing APIs with GraphQL'
            ],
            asset: getDiceBearSectionAsset('connect-backend-development')
        },
        {
            category: 'Frontend Development',
            specialization: 'React Framework',
            experience: [
                'Redux - State management for React apps',
                'Context - React context for state management',
                'Hooks - Using React hooks for local state and effects'
            ],
            asset: getDiceBearSectionAsset('connect-frontend-development')
        },
        {
            category: 'Automated Testing',
            specialization: 'Unit Testing',
            experience: [
                'JUnit - Unit testing framework for Java applications',
                'Jest - JavaScript testing framework',
                'XCTest - Testing framework for Swift and Objective-C'
            ],
            asset: getDiceBearSectionAsset('connect-automated-testing')
        },
        {
            category: 'DevOps',
            specialization: 'Various Technologies',
            experience: [
                'AWS - Cloud services and infrastructure management',
                'Docker - Containerization and microservices',
                'Kubernetes - Container orchestration and management',
                'GitHub Actions - CI/CD automation with GitHub'
            ],
            asset: getDiceBearSectionAsset('connect-devops')
        },
        {
            category: 'Datastores Management',
            specialization: 'Database Systems',
            experience: [
                'MySQL - Relational database management system',
                'PostgreSQL - Advanced open-source database system',
                'MongoDB - NoSQL database for modern applications',
                'DynamoDB - AWS NoSQL database service'
            ],
            asset: getDiceBearSectionAsset('connect-datastores-management')
        },
        {
            category: 'Miscellaneous Skills',
            specialization: 'Various Tools and Technologies',
            experience: [
                'Firebase - Comprehensive app development platform',
                'Postman - API development and testing tool',
                'Zoho - Online office suite and SaaS applications',
                'Git - Version control system'
            ],
            asset: getDiceBearSectionAsset('connect-miscellaneous-skills')
        }
    ];
    

    const toggleCard = (index) => {
        const newExpandedCards = new Set(expandedCards);
        if (newExpandedCards.has(index)) {
            newExpandedCards.delete(index);
        } else {
            newExpandedCards.add(index);
        }
        setExpandedCards(newExpandedCards);
    };

    return (
        <div>
            <Row style={{marginBottom: '2rem'}}>
                <Col>
                    <p style={{
                        color: '#B45309',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem'
                    }}>
                        Skills
                    </p>
                    <h2 style={{
                        color: '#14213D',
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 700,
                        marginBottom: '0.5rem'
                    }}>
                        Technical Expertise
                    </h2>
                    <p style={{
                        color: '#334E68',
                        fontSize: '1.05rem',
                        maxWidth: '500px'
                    }}>
                        Technologies and tools I work with on a daily basis.
                    </p>
                </Col>
            </Row>
            
            <Row>
                {skillsData.map((skill, index) => {
                    const isExpanded = expandedCards.has(index);
                    return (
                        <Col xs={12} sm={12} md={6} lg={4} key={index} style={{marginBottom: '2rem'}}>
                            <div 
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Icon Header */}
                                <div style={{
                                    backgroundColor: '#F5F3EE',
                                    padding: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottom: '1px solid #E2DED6'
                                }}>
                                    <img
                                        src={skill.asset}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        style={{
                                            width: '96px',
                                            height: '96px',
                                            borderRadius: '14px',
                                            objectFit: 'cover',
                                            border: '1px solid #E2DED6',
                                            backgroundColor: '#ffffff'
                                        }}
                                    />
                                </div>

                                {/* Card Content */}
                                <div style={{padding: '1.5rem', flex: 1}}>
                                    <h5 style={{
                                        color: '#14213D',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {skill.category}
                                    </h5>
                                    <p style={{
                                        color: '#334E68',
                                        fontSize: '0.95rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {skill.specialization}
                                    </p>

                                    {/* Expandable Details */}
                                    {isExpanded && (
                                        <div style={{
                                            marginTop: '1rem',
                                            paddingTop: '1rem',
                                            borderTop: '1px solid #E2DED6',
                                            animation: 'fadeIn 0.3s ease-in'
                                        }}>
                                            <strong style={{
                                                color: '#14213D',
                                                fontSize: '0.95rem',
                                                display: 'block',
                                                marginBottom: '0.75rem'
                                            }}>
                                                Experience:
                                            </strong>
                                            <ul style={{
                                                paddingLeft: '1.25rem',
                                                margin: 0,
                                                color: '#334E68',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.7'
                                            }}>
                                                {skill.experience.map((exp, expIndex) => (
                                                    <li key={expIndex} style={{marginBottom: '0.5rem'}}>
                                                        {exp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Expand/Collapse Button */}
                                <div 
                                    onClick={() => toggleCard(index)}
                                    style={{
                                        padding: '1rem',
                                        backgroundColor: '#F5F3EE',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#14213D',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        borderTop: '1px solid #E2DED6'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#EAE6DF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#F5F3EE';
                                    }}
                                >
                                    {isExpanded ? (
                                        <>
                                            <span style={{marginRight: '0.5rem'}}>Show Less</span>
                                            <FaChevronUp />
                                        </>
                                    ) : (
                                        <>
                                            <span style={{marginRight: '0.5rem'}}>View Details</span>
                                            <FaChevronDown />
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default SkillsServices;