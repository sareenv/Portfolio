import React  from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/about.scss'
import image from '../../Assets/aws.png'
import Image from 'react-bootstrap/Image'


const About = () => {
    return(
        <>
            <Container fluid="sm" style={{marginTop: '2rem'}}> 
                <Row style={{backgroundColor: 'white'}}>
                    <Col lg={4}>
                    
                    <Image fluid="lg" src={image}/>
                   
                    </Col>
                   
                    <Col>
                        <div className='aboutSection'>
                            <p>
                            I am a passionate front-end web developer with 3+ years of hands-on experience in creating web applications in personal, academic and professional environment using Agile methodologies.
                            While I was enrolled in the Master of Applied Computing program at the University of Windsor.
                            </p>
                           
                            <p>
                            I worked on several academic projects including a multi-user blogging platform that enables an authenticated user to perform CRUD operations on blog posts via a private dashboard using technologies such as HTML5, CSS3, JavaScript, React, Node.js, NoSQL, Selenium etc. In addition to the academic ones, I have spent a considerable amount of time self-learning new technologies such as Figma and their applications through personal projects to expand my technical acumen.
                            Being the GitHub Campus Expert and the technical head at the Computer Science Society, I have contributed to the local community by working as the front-end web developer and the co-founder at WinHacks (Windsor's first major hackathon), with 500 attendees from around the globe.    
                            </p> 
                            Recently, during my time as a software developer intern at the University of Windsor, I worked on Getmytiffin.ca - the highly scalable to alleviate the condition of home-made food selling businesses in the COVID era, with the focus on accessibility and user experience (UX) using technologies such as React, React Native, Redux etc. Having worked with diverse Agile teams and clients, through school, work and volunteering, I have developed a wide range of skills in written and verbal communication, teamwork and analytical thinking which are directly related to any technical role.
                        </div>
                    </Col>
                </Row> 
        </Container>
        </>
        
    )
}

export default About