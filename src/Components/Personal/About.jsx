import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Education from "./Education/Education";
import "../../Styles/about.scss"
import "../../Styles/base.scss"

import { ConcordiaDetails, CoventryDetails } from "./details"

const About = () => {
    return (
        <div style={{
            padding: '4rem 0',
            backgroundColor: '#f8f9fa',
            transition: 'all 0.3s ease'
        }}>
            <Container>
                <Row style={{marginBottom: '3rem'}}>
                    <Col sm={12}>
                        <div style={{textAlign: 'center'}}>
                            <h3 style={{
                                fontWeight: 600,
                                color: '#003049',
                                fontSize: '1.8rem',
                                marginBottom: '0.5rem'
                            }}>
                                About Me
                            </h3>
                            <p style={{
                                color: '#666',
                                fontSize: '1.05rem',
                                marginBottom: '0',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                Full-stack software engineer passionate about building scalable applications
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* Education Section - Left Side */}
                    <Col sm={12} md={12} lg={5} style={{marginBottom: '2rem'}}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '12px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            height: '100%'
                        }}>
                            <h4 style={{
                                fontWeight: 600,
                                color: '#003049',
                                fontSize: '1.3rem',
                                marginBottom: '1.5rem'
                            }}>
                                Education Background
                            </h4>
                            
                            <Education
                                image={ConcordiaDetails.image}
                                qualification={ConcordiaDetails.qualification}
                                instition={ConcordiaDetails.instition}
                                address={ConcordiaDetails.address}
                                isHE={true}
                            />

                            <div style={{
                                height: '1px',
                                backgroundColor: '#e8e8e8',
                                margin: '1.5rem 0'
                            }}></div>

                            <Education
                                image={CoventryDetails.image}
                                qualification={CoventryDetails.qualification}
                                instition={CoventryDetails.instition}
                                address={CoventryDetails.address}
                                isHE={true}
                            />
                        </div>
                    </Col>

                    {/* About Text - Right Side */}
                    <Col sm={12} md={12} lg={7}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '12px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            height: '100%'
                        }}>
                            <h4 style={{
                                fontWeight: 600,
                                color: '#003049',
                                fontSize: '1.3rem',
                                marginBottom: '1.5rem'
                            }}>
                                Professional Journey
                            </h4>
                            
                            <p style={{
                                color: '#555',
                                lineHeight: '1.8',
                                marginBottom: '1.25rem',
                                fontSize: '1rem'
                            }}>
                                I am a passionate <strong>FullStack Software Development Engineer</strong> with hands-on experience in creating iOS mobile applications and web applications in personal, academic and professional environments using Agile methodologies. I'm also an <strong>AWS certified Cloud Practitioner (CLF-CO1)</strong> with sufficient knowledge of cloud technologies.
                            </p>
                            
                            <p style={{
                                color: '#555',
                                lineHeight: '1.8',
                                marginBottom: '1.25rem',
                                fontSize: '1rem'
                            }}>
                                While enrolled in the <strong>Master of Software Engineering</strong> in Gina Cody School of Computing program at <strong>Concordia University, Montreal, Canada</strong>, I worked on several academic projects involving diversity of technologies from the topic areas such as Distributed Systems, Advanced Software Architecture, Problem Solving and Applied Artificial Intelligence.
                            </p>
                            
                            <p style={{
                                color: '#555',
                                lineHeight: '1.8',
                                marginBottom: '0',
                                fontSize: '1rem'
                            }}>
                                Previously, I worked in the United Kingdom as an <strong>Associate Software Engineer</strong> in a distributed team across three time zones (GMT+1, EST and IST). I was responsible for developing scalable iOS applications and collaborating with developers to deliver functionality using technologies such as <strong>RabbitMQ</strong>, <strong>Node.js</strong> microservices, and <strong>AWS cloud platform</strong> (EC2, Auto-scaling groups). I strongly believe in being technology agnostic and adapting tools to meet project requirements.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default About
