import React, {useEffect} from 'react';
import experience from '../../Assets/experience.png'
import SkillsServices from './SkillsServices'
import {Row, Col, Container, Image, Button} from 'react-bootstrap'
import ReactGA from 'react-ga'

const Service = () => {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const handleBookConsultation = () => {
        window.open("https://calendly.com/contact-sareenv/consultation-session", "_blank")
    }

    return (
        <Container  style={{marginTop: '1rem', padding: '1rem'}}>
            <Row style={{marginBottom: '3rem'}}>


            <Col sm={12} md={12} lg={12} style={{backgroundColor: 'white'}}>
            <h3> Services Information </h3>
            <hr />
            <Row>
                <Col sm={12} md={12} lg={6}>
                <Image fluid src={experience} className= "d-block mx-auto img-fluid" />
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <h3>Full Stack Software Developer </h3>
                    <p style={{color: "gray"}}> 
                        Freelance Coding Expertise, Just a Click Away. </p>
                    <p style={{textAlign: 'justify', marginTop: '1rem'}}>
                    I am a seasoned FullStack Application Developer, committed to delivering versatile and customized solutions for a diverse range of projects. My expertise spans across the dynamic field of Mobile Application Development, with a specialized focus on leading platforms such as iOS and Android. In addition to this, my proficiency extends to backend development, particularly using Node.js. This skill enables me to create solutions that integrate smoothly with advanced cloud services, including AWS and Google Cloud Platform.
                    </p>
                    <p style={{textAlign: 'justify', marginTop: '1rem'}}>
                        My skill set is a culmination of extensive experience and knowledge gained through professional and academic pursuits in the field of software development. I pride myself on my ability to adapt to the unique requirements of each project, ensuring that the technology and approaches I employ are perfectly aligned with the project's needs and business logic. I am always eager to embrace new challenges and am fully open to learning and adapting new or existing technologies to deliver the most effective and efficient solutions to my clients.
                    </p>
                    <Button style={{width: '100%'}} onClick={handleBookConsultation}>Book Consultation</Button>
                </Col>
                </Row>
                
            </Col>        
            </Row>

            <Row>
                <Col sm={12} md={12} lg={12}>
                    <SkillsServices/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Service;