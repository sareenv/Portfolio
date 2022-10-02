import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import React  from 'react'
import { useEffect, useState } from 'react'
import { FaGithub, FaVideo } from 'react-icons/fa'
import { downloadProjectByID } from '../../Services/Projects'
import Vimeo from '@u-wave/react-vimeo'
import ReactGA from 'react-ga'
import '../../Styles/product-details.scss'

const ProjectDetails = (props) => {
    const [displayImage, setDisplayImage] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [project, setProject] = useState([]);
    useEffect(() => {
        const mounted = true;
        if(mounted) {
            const projectID = props.match.params.id
            const data = downloadProjectByID(projectID)
            data.then((project) => {
                const projectDetails = project.content
                setProject(projectDetails)
                setDisplayImage(projectDetails.thumbnail)
            })
            setDisplayImage("https://sareenv-projects.s3.amazonaws.com/images/cinemato5.png")
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [props.match.params.id])

    return (
        <Container style={{paddingBottom: '2rem', backgroundColor: 'white'}}>
            <Row style={{marginTop: '1rem'}}>
                <Col lg={6} style={{backgroundColor: 'white'}}>
                    <Image
                        fluid
                        thumbnail = {true}
                        src={displayImage}>
                    </Image>

                    
                    <Row style={{display: 'flex', justifyContent: 'start'}}>

                        {project.images !== undefined && project.images.map((image) => {
                            return (
                                <Col lg={3} sm={3} xs={3} style={{marginTop: '0.7rem'}}>
                                    <Image fluid thumbnail={true}
                                        src={image}
                                        onClick={() =>{
                                            setDisplayImage(image)
                                        }}
                                        ></Image>
                                </Col>
                            )
                        })}
                        
                    </Row>                        
                </Col>

                <Col lg={6} style={{backgroundColor: 'white', marginTop: '1.2rem'}}>
                    <div>
                        <h5>
                            <b> {project.projectName}</b>
                        </h5>
                        <p style={{color: 'grey'}}> {project.tagLine} </p>
                    </div>

                    {/* Preview button expands on this one */}
                    <div>
                        {project.ID !== undefined && isDisplayed === true && (() => {
                            return (
                                <div style={{paddingBottom: '1rem'}}>
                                    <Vimeo
                                        id={project.video}
                                        video={project.video}
                                        height='400px'
                                        volume={true}
                                        responsive={true}
                                    >
                                    </Vimeo>
                                </div>
                            )
                            
                        })()}

                       


                        <span>

                                <Button
                                    disabled={project.video === undefined} 
                                    style={{marginRight: '1rem'}}
                                    onClick={ () => {
                                        setIsDisplayed(true)
                                    }}
                                    > 
                                    <FaVideo />
                                    <>  Watch Preview </>
                                </Button>

                                <Button variant="light" style={{marginRight: '1rem'}} href={project.github}> 
                                    <FaGithub />
                                    <>  Source Code </>
                                </Button>
                        </span>

                        
                    </div>

                    <div className='description'>
                        {project.description}
                    </div>

                    <Row>
                        <Col style={{marginTop: '1rem'}}>
                            <b> Details </b>
                            <ul style={{textBreak: 'break-all'}}>
                                { project.conceptsUsed !== undefined 
                                    && project.conceptsUsed.map((concept) => {
                                        return <li> {concept} </li>
                                }) }
                            </ul>
                        </Col>
                    </Row>

                   
                                    
                    <Row>
                        
                        <Col style={{marginTop: '1rem'}}>
                            
                            {project.configuration && project.configuration.length !== 0 && (() => {
                                return <b> Project Configuration </b>
                            })}

                            <ul>
                                {project.configuration !== undefined && project.configuration.map((config) => {
                                    return <li> {config} </li>
                                })}
                            </ul>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetails