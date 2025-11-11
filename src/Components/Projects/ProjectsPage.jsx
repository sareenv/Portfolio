import React, {useEffect, useState} from "react";
import {Row, Col, Image, Container} from 'react-bootstrap'
import {ShimmerPostList, ShimmerThumbnail, 
    ShimmerSectionHeader, ShimmerText} from 'react-shimmer-effects'
    import Footer from '../Footer';
import {downloadProject} from '../../Services/Projects'
import {Link} from 'react-router-dom'
import '../../Styles/base.scss'
import Project from "./Projects"
import ReactGA from 'react-ga'

const ProjectsPage = () => {
    const [featuredProject, setfeaturedProject] = useState([])
    const [visibility, setVisibility] = useState(false)
    useEffect(() => {
        let mounted = true;
        downloadProject().then(item => {
            if(mounted) {
                let featuredItems = item.filter(i => i.featured === true)
                setfeaturedProject(featuredItems[0])
                setTimeout(() => {
                    setVisibility(true)
                }, 1200)
            }
        })

        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div>
            {visibility === false && 
                
                <Container style={{marginTop: '1rem'}}>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ShimmerThumbnail height={300} rounded={4}/> 
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <div style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
                            <h2 style={{paddingTop: '2rem', paddingLeft: '1rem'}}>
                            <ShimmerSectionHeader />
                            </h2>
                           
                            {visibility === false && 
                                <ShimmerText line={5} gap={10} />
                            }
                        </div>
                    </Col>
                </Row>
        </Container>
                
            }

            {visibility === true && 
                <Container style={{marginTop: '3rem', paddingBottom: '2rem'}}>
                    <Row style={{ marginBottom: "2rem" }}>
                        <Col>
                            <h3 style={{ 
                                fontSize: "1.8rem", 
                                fontWeight: 600, 
                                color: "#003049",
                                marginBottom: 0
                            }}>Featured Project</h3>
                        </Col>
                    </Row>

                    <Row style={{ 
                        backgroundColor: "white", 
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                        marginLeft: "0.1rem",
                        marginRight: "0.1rem"
                    }}>
                        <Col lg={6} md={12} sm={12} style={{ padding: 0 }}>
                            <div style={{ 
                                height: "100%", 
                                minHeight: "400px",
                                backgroundColor: "#f8f9fa",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image 
                                    thumbnail={false}
                                    fluid={true}
                                    src={featuredProject.thumbnail} 
                                    responsive
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </Col>

                        <Col lg={6} md={12} sm={12} style={{ padding: "3rem" }}>
                            <div>
                                <h2 style={{ 
                                    fontWeight: 700, 
                                    color: "#003049",
                                    fontSize: "1.8rem",
                                    marginBottom: "1.5rem"
                                }}>
                                    {featuredProject.projectName}
                                </h2>
                                <p style={{
                                    color: "#666",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.7",
                                    marginBottom: "2rem"
                                }}>{featuredProject.description}</p>
                                {visibility === true && 
                                    <Link 
                                        thumbnail={true} 
                                        className="text-decoration-none" 
                                        to={"project_details/" + featuredProject.id} 
                                        style={{
                                            backgroundColor: '#003049',
                                            padding: '0.9rem 2rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            display: 'inline-block',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#002035";
                                            e.target.style.transform = "translateY(-2px)";
                                            e.target.style.boxShadow = "0 4px 12px rgba(0,48,73,0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#003049";
                                            e.target.style.transform = "translateY(0)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    >View Project Details →</Link>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
            
            {visibility === false && 
                
                    <Container fluid="sm" style={{ marginBottom: '4rem' }}>
                      <Row>
                        {[...Array(6)].map((_, idx) => (
                          <Col key={idx} sm={12} md={6} lg={4} style={{padding: '1rem'}}>
                          <ShimmerPostList postStyle="STYLE_FOUR" row={1} col={1}></ShimmerPostList>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  
            }

            {visibility && 
                <Project />
            }

            <Container>
                <Footer />
            </Container>
            

        </div>
    )
}

export default ProjectsPage