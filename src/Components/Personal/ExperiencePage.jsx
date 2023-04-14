import React, {useEffect} from 'react'
import {Container, Row, Col, Image, ListGroup} from 'react-bootstrap'
import Contact from '../Contact/Contact'
import ReactGA from 'react-ga'

const JobPosition = (props) => {
    return (<Container style={{marginTop: '0.1rem'}}>
        
        <div style={{backgroundColor: props.color ,display: 'flex', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>
            <Image roundedCircle={false} thumbnail={true} style={{ width: '120px', height: '120px', objectFit: 'cover' }}  variant="top" src = {props.logo} />
        </div>
        
        <div style={{padding: '0rem'}}>
            <center> 
                <h3>{props.company} </h3>
                <i> {props.title} </i>
            </center>
            
            <ListGroup >
                <ListGroup.Item> <b>Type:</b> {props.type} </ListGroup.Item>
                <ListGroup.Item> <b>Office Location: </b>
                    {props.location}
                 </ListGroup.Item>
                <ListGroup.Item> <b>Role desciption: </b> 
                    <ul style={{paddingLeft: '1rem'}}>
                        {props.description && props.description.map((desc) => {
                            return <li> {desc} </li>
                        })}   
                    </ul>
                </ListGroup.Item>
                
            </ListGroup>
        </div>
    </Container>
    )
}
const ExperiencePage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return(
        <Container >
            <h3 style={{marginTop: '2rem'}}> Applied Experience </h3>
            <hr />
            <Row>
                <Col sm={12} md={12} lg={12} 
                style={{minHeight: '25rem',
                 backgroundColor: 'white'}}>
                 <JobPosition 
                    logo="https://d3bql97l1ytoxn.cloudfront.net/app_resources/296829/overview/img4479993099242896054-2x.png"
                    company = "Ceridian Dayforce" 
                    title = "Mobile Software Developer Intern"
                    color ="#0072C6"
                    type = "Internship"
                    location = "4110 Yonge St, North York, ON M2P 2B7"
                    description = {[
                        "Launched new platform features as a mobile developer, collaborating with cross-functional teams, reporting bugs, and adhering to agile methodologies and architecture guidelines.",
                        "Experienced the release for the mobile platform and worked in a fast-paced environment.",
                        "Built new features using FRP Combine framework with SwiftUI and MVVM architecture, while adhering to defined guidelines and collaborating with existing codebase.",
                        "Reported bugs and participated in code reviews to ensure high-quality code.",
                        "Collaborated on feature development using various technologies such as SwiftUI, UIKit, and Objective-C.",
                        "Experience working on Scrum team with Azure DevOps."
                      ]}
                />
                
                </Col>

                <Col  sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '40rem', marginTop: '2rem'}}>
                    <JobPosition
                        company = "Carrybags Limited"
                        color = "#F6D51E"
                        title="Associate Software Engineer"
                        type="Part-time"
                        location="The Enterprise Hub 5, Whitefriars Street, Coventry, United Kingdom"
                        logo="https://sareenv-projects.s3.amazonaws.com/images/1646322452937.jpeg"
                        description = {[
                            "Managed Development Team of 4 developers across three different time zones ~ Canada, UK and India.",
                            "Developed Mobile Application ~ iOS Application with Swift & MVC architectural pattern",
                            "Attended meetings with the stakeholders to negotiate and explain the supporting services ~ Stripe UK, DPD.",
                            "Performed unit and Integration Testing along with the QA team",
                            "Setup the CI/CD Pipeline to automate the deployment of Node.js application to AWS EC2 instances ~ GitLabs", 
                            "Worked on the OAuth2 and authentication related features of the REST API ~ Node.js"
                        ]}
                    />            
                </Col>
           
                <Col sm={12} md={12} lg={6} style={{backgroundColor: 'white', minHeight: '40rem', marginTop: '2rem'}}>
                    <JobPosition
                        company = "ASOP Pvt Ltd"
                        color = "rgb(175 25 25)"
                        title = "Junior Mobile Application Developer"
                        type = "Contract" 
                        location = "SBS Nagar Nawanshahr Punjab (144514), India"
                        logo="https://sareenv-projects.s3.amazonaws.com/images/1567672229702.jpeg"
                        description = {[
                            "Gathered and analyzed the clients requirement to support the functionality for the ordering system.",
                            "Responsible for developing the RESTful APi in Node.js and Express.",
                            "Developed iOS Application using MVC architectural Pattern.",
                            "Implemented the Push Notification on the client side connected with Firebase service controlled through the dashboard.",
                            "Developed a script in Python3 to bulk upload all the organization’s products to the MySQL database hosted on Heroku platform.", 
                            "Deployed the backend APi to the Heroku Cloud Platform."
                        ]}
                    />       
                </Col>
            </Row>
            
            <Container style={{marginTop: '2rem'}}>
                <h3> Learning Events </h3>
                <hr/>
            </Container>
            

            <Row style={{marginTop: '2rem'}}>
                <Col sm={12} md={12} lg={4}>
                    <Image fluid src="https://pbs.twimg.com/profile_images/1093035372332773377/jPm2F1jy_400x400.jpg" objectFit="cover"/>
                </Col>
                
                <Col style={{backgroundColor: 'white'}}>
                    <h3 style={{textAlign: "start", paddingLeft: '2rem', paddingTop: '1rem'}}>Swift India Developer Conference</h3>
                    <hr />
                    <ul>
                        <li> Actively participated in the developer conference in 2018 where iOS application developer across India participated to gain key topics and improvments in the latest iOS development features.</li>
                        <li> Meet renowned iOS expert and gained industry knowledge on various iOS frameworks such as SwiftUI, CompositionalLayout, Reactive Combine Framework, Storage Presistence. </li>
                        <li> Grasped the concept of UICollectionViewCompositionalLayout released and supporting iOS 13 and later used in the development project.</li>
                        <li> The interactive sessions were delivered in the 8 parts from the domain experts delivering the content accross the globe </li>
                    </ul>
                </Col>
            </Row>

            <Row style={{marginTop: '2rem'}}>
                <Col sm={12} md={12} lg={4}>
                    <Image fluid src={"data:image/png;base64,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"} style={{width: "340px"}}/>
                </Col>
                
                <Col style={{backgroundColor: 'white'}}>
                    <h3 style={{textAlign: "start", paddingLeft: '2rem', paddingTop: '1rem'}}>CovHack 2020</h3>
                    <hr />
                    <ul>
                       <li>Collaborated with other 4 team members from different universities based in the United Kingdom</li> 
                       <li>Developed Chrome extension for profanity detection using core javascript which interacts with Django REST-API</li>
                       <li>Assisted other members to collect and pre-process the dataset which contains further classes of profane text messages for training the classifier using Keras</li>
                       <li>Analysed the performance of the Naive Bayes classifier using confusion matrix and plotted the result using the Matplotlib library</li>
                       <li>Integrated Twilio SMS service to the backend to send the mobile notification upon detection of the profane text</li>
                    </ul>
                </Col>
            </Row>

            <Row style={{backgroundColor: 'white', 
                marginTop: '2rem', 
                marginLeft: '0.1rem', 
                marginBottom: '2rem'
            }}>
                <Col >
                    <Contact />
                </Col>
            </Row>

        </Container>
    )
}

export default ExperiencePage;


