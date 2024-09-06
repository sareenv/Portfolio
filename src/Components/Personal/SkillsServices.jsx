import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FaMobileAlt, FaServer, FaDesktop, FaFlask, FaCloud, FaDatabase, FaRegQuestionCircle } from 'react-icons/fa';

const SkillsServices = () => {
    const [expandedRows, setExpandedRows] = useState(new Set());

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
            icon: <FaMobileAlt />
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
            icon: <FaServer />
        },
        {
            category: 'Frontend Development',
            specialization: 'React Framework',
            experience: [
                'Redux - State management for React apps',
                'Context - React context for state management',
                'Hooks - Using React hooks for local state and effects'
            ],
            icon: <FaDesktop />
        },
        {
            category: 'Automated Testing',
            specialization: 'Unit Testing',
            experience: [
                'JUnit - Unit testing framework for Java applications',
                'Jest - JavaScript testing framework',
                'XCTest - Testing framework for Swift and Objective-C'
            ],
            icon: <FaFlask />
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
            icon: <FaCloud />
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
            icon: <FaDatabase />
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
            icon: <FaRegQuestionCircle />
        }
        // Add more categories as needed
    ];
    

    const toggleRow = (index) => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(index)) {
            newExpandedRows.delete(index);
        } else {
            newExpandedRows.add(index);
        }
        setExpandedRows(newExpandedRows);
    };

    // Define a professional color palette
    const colors = {
        background: '#f0f2f5', // Light grey for a subtle background
        header: '#003366', // Dark blue for a professional header
        text: '#333333', // Dark grey for text
        hover: '#0056b3' // Lighter blue for hover effects
    };

    return (
        <div >
            <Row>
                <Col xs={12}>
                    <h4 style={{ color: colors.header, paddingBottom: '1rem', fontSize: '1.5rem', 
                    fontWeight: 'bold', fontWeight: 800 }}>
                        INTERESTS
                    </h4>
                    <div className='table-responsive'>
                    <Table striped bordered hover style={{backgroundColor: colors.background}}>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Specialization</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skillsData.map((skill, index) => (
                                <React.Fragment key={index}>
                                    <tr onClick={() => toggleRow(index)} style={{ cursor: 'pointer', color: colors.text }}>
                                        <td>{skill.icon} {skill.category}</td>
                                        <td>{skill.specialization}</td>
                                        <td style={{ color: colors.hover }}>Details</td>
                                    </tr>
                                    {expandedRows.has(index) && (
                                        <tr key={`details-${index}`}>
                                            <td colSpan={3}>
                                                <strong>Experience:</strong>
                                                <ul>
                                                    {skill.experience.map((exp, expIndex) => <li key={expIndex}>{exp}</li>)}
                                                </ul>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SkillsServices;
