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
                let featuredItem = item.Items.find(item => item.featured === true)
                setfeaturedProject(featuredItem)
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
                <Container style={{marginTop: '1rem'}}>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Image thumbnail={true}  fluid={true} src={featuredProject.thumbnail} responsive/> 
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <div style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
                                    <h2 style={{paddingTop: '2rem', paddingLeft: '1rem'}}>
                                            {featuredProject.projectName}
                                    </h2>
                                    <p style={{paddingTop: '0.3rem', paddingLeft: '1rem'}}> {featuredProject.description} </p>
                                    {visibility === true && 
                                        <Link thumbnail={true} 
                                        className="customLink text-decoration-none" 
                                        to={"project_details/" + featuredProject.ID} 
                                        style={{width: '10em', 
                                            backgroundColor: '#003049', 
                                            marginLeft: '1rem'}}> View Details </Link>
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