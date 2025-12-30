import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import EducationCard from '../Utilities/EducationCard';
import "../../Styles/about.scss"
import "../../Styles/base.scss"

// Education data - can be moved to a constants file if needed
const education = [
    {
        id: 1,
        degree: 'MSc Software Engineering',
        institution: 'Concordia University',
        location: 'Montreal, Canada',
        year: '2021 - 2023',
        logo: 'https://campus1mtl.ca/montreal-student-housing/assets/images/interface/concorida-logo-sm.png'
    },
    {
        id: 2,
        degree: 'BSc Computer Science',
        institution: 'Coventry University',
        location: 'Coventry, UK',
        year: '2017 - 2020',
        logo: 'https://conflictresearchsociety.org/wp-content/uploads/2020/01/coventry-university-logo.png'
    }
];

const About = () => {
    return (
        <div style={{
            padding: '6rem 0',
            backgroundColor: '#ffffff'
        }}>
            <Container>
                <Row>
                    {/* Left Column - About Text */}
                    <Col xs={12} lg={7} style={{ marginBottom: '2rem' }}>
                        {/* Section Label */}
                        <p style={{
                            color: '#00b4d8',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}>
                            About
                        </p>
                        
                        {/* Main Heading */}
                        <h2 style={{
                            fontWeight: 700,
                            color: '#003049',
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            marginBottom: '2rem',
                            lineHeight: 1.3
                        }}>
                            Software engineer focused on building products that make a difference.
                        </h2>
                        
                        {/* Description */}
                        <div style={{
                            color: '#555',
                            fontSize: '1.05rem',
                            lineHeight: 1.85
                        }}>
                            <p style={{ marginBottom: '1.25rem' }}>
                                I'm a Software Development Engineer at <strong style={{ color: '#003049' }}>Dayforce</strong>, 
                                specializing in iOS development with Swift and SwiftUI. Based in Toronto, Canada, 
                                I hold a Master's degree in Software Engineering from Concordia University.
                            </p>
                            
                            <p style={{ marginBottom: '1.25rem' }}>
                                With experience spanning mobile and full-stack development, I've worked with 
                                distributed teams across multiple time zones. I'm AWS Certified and enjoy 
                                building scalable applications using modern technologies.
                            </p>
                            
                            <p style={{ marginBottom: 0 }}>
                                I believe in choosing the right tools for each challenge and continuously 
                                expanding my technical toolkit. Clean code and user-focused design 
                                drive everything I build.
                            </p>
                        </div>
                    </Col>
                    
                    {/* Right Column - Education */}
                    <Col xs={12} lg={5}>
                        <div style={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            {education.map((edu) => (
                                <EducationCard 
                                    key={edu.id} 
                                    degree={edu.degree}
                                    institution={edu.institution}
                                    location={edu.location}
                                    year={edu.year}
                                    logo={edu.logo}
                                    variant="default"
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
