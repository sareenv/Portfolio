import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaServer, FaDesktop, FaFlask, FaCloud, FaDatabase, FaRegQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
            icon: <FaMobileAlt />,
            color: '#3498db'
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
            icon: <FaServer />,
            color: '#2ecc71'
        },
        {
            category: 'Frontend Development',
            specialization: 'React Framework',
            experience: [
                'Redux - State management for React apps',
                'Context - React context for state management',
                'Hooks - Using React hooks for local state and effects'
            ],
            icon: <FaDesktop />,
            color: '#61dafb'
        },
        {
            category: 'Automated Testing',
            specialization: 'Unit Testing',
            experience: [
                'JUnit - Unit testing framework for Java applications',
                'Jest - JavaScript testing framework',
                'XCTest - Testing framework for Swift and Objective-C'
            ],
            icon: <FaFlask />,
            color: '#e74c3c'
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
            icon: <FaCloud />,
            color: '#ff9800'
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
            icon: <FaDatabase />,
            color: '#9b59b6'
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
            icon: <FaRegQuestionCircle />,
            color: '#34495e'
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
        <div style={{marginTop: '2rem'}}>
            <Row style={{marginBottom: '2rem'}}>
                <Col>
                    <h4 style={{
                        color: '#003049',
                        fontSize: '1.8rem',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>
                        Technical Expertise
                    </h4>
                    <hr style={{
                        borderTop: '2px solid #e8e8e8',
                        marginBottom: '2rem'
                    }}/>
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
                                    backgroundColor: skill.color,
                                    padding: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        color: 'white'
                                    }}>
                                        {skill.icon}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div style={{padding: '1.5rem', flex: 1}}>
                                    <h5 style={{
                                        color: '#003049',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {skill.category}
                                    </h5>
                                    <p style={{
                                        color: '#666',
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
                                            borderTop: '1px solid #e8e8e8',
                                            animation: 'fadeIn 0.3s ease-in'
                                        }}>
                                            <strong style={{
                                                color: '#003049',
                                                fontSize: '0.95rem',
                                                display: 'block',
                                                marginBottom: '0.75rem'
                                            }}>
                                                Experience:
                                            </strong>
                                            <ul style={{
                                                paddingLeft: '1.25rem',
                                                margin: 0,
                                                color: '#666',
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
                                        backgroundColor: '#f8f9fa',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#003049',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        borderTop: '1px solid #e8e8e8'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#e8e8e8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f8f9fa';
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