import React, {useEffect, useState} from "react";
import Project from "./Projects"
import {Row, Col, Image, Container} from 'react-bootstrap'
import {downloadProject} from '../../Services/Projects'
import {Link} from 'react-router-dom'
import '../../Styles/base.scss'

const ProjectsPage = () => {
    const [featuredProject, setfeaturedProject] = useState([])
   

    useEffect(() => {
        let mounted = true;
        downloadProject().then(item => {
            if(mounted) {
                item.Items.forEach(item => {
                    if(item.featured === true) {
                        setfeaturedProject(item)
                        return
                    }
                });
                
            }
        })
    }, []);

    return (
        <div>
            <Container style={{marginTop: '1rem'}}>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Image  fluid={true} src={featuredProject.thumbnail} responsive/> 
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <div style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
                                <h2 style={{paddingTop: '2rem', paddingLeft: '1rem'}}>
                                        {featuredProject.projectName}
                                </h2>
                                <p style={{paddingTop: '0.3rem', paddingLeft: '1rem'}}> {featuredProject.description}</p>
                                <Link className="customLink text-decoration-none" to={"project_details/" + featuredProject.ID} style={{width: '20em', backgroundColor: '#003049', marginLeft: '1rem'}}> View Details </Link>
                            </div>
                        </Col>
                    </Row>
            </Container>
            
            <Project />

            <div style={{minHeight: '2rem', backgroundColor: 'white', marginTop: '2rem', marginBottom: '1rem'}}></div>

            
        </div>
    )
}

export default ProjectsPage