import React, {useEffect, useState} from "react";
import Project from "./Projects"
import {Row, Col, Image, Container} from 'react-bootstrap'
import {downloadProject} from '../../Services/Projects'
import {Link} from 'react-router-dom'
import '../../Styles/base.scss'

const ProjectsPage = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        let mounted = true;
        downloadProject().then(item => {
            if(mounted) {
                setProject(item.Items[0])
            }
        })
    }, []);

    return (
        <div>
            <Container style={{marginTop: '1rem'}}>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Image fluid={true} src={project.thumbnail}/> 
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <div style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
                               <h2 style={{paddingTop: '2rem', paddingLeft: '1rem'}}>
                                    {project.projectName}
                               </h2>
                               <p style={{paddingTop: '0.3rem', paddingLeft: '0.3rem'}}> {project.tagLine}</p>
                            <Link className="customLink" style={{width: '20em', backgroundColor: '#017bfe'}}> View Details </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Project />
        </div>
    )
}

export default ProjectsPage