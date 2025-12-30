import React, {useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import ProgressJobPosition from '../Utilities/JobPositionProgress'
import Contact from '../Contact/Contact'
import ReactGA from 'react-ga'
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'
import '../../Styles/experience.scss'

const JobPosition = (props) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            height: '100%',
            border: '1px solid rgba(0,0,0,0.04)'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,48,73,0.15)';
            e.currentTarget.style.transform = 'translateY(-8px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            {/* Header with gradient overlay */}
            <div style={{
                backgroundColor: props.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2.5rem 2rem',
                minHeight: '200px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative circle */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    pointerEvents: 'none'
                }} />
                <Image 
                    roundedCircle={false} 
                    thumbnail={false}
                    style={{ 
                        width: '110px', 
                        height: '110px', 
                        objectFit: 'cover',
                        borderRadius: '16px',
                        border: '4px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        backgroundColor: 'white'
                    }}  
                    variant="top" 
                    src={props.logo} 
                />
            </div>
            
            <div style={{padding: '2rem'}}>
                {/* Company & Title */}
                <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                    <h3 style={{
                        color: '#003049',
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        marginBottom: '0.5rem',
                        lineHeight: 1.3
                    }}>{props.company}</h3>
                    <p style={{
                        color: '#00b4d8',
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: 0
                    }}>{props.title}</p>
                </div>
                
                {/* Meta info badges */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid #f0f2f5'
                }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'rgba(0,180,216,0.1)',
                        color: '#00b4d8',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                    }}>
                        <HiOutlineBriefcase size={14} />
                        {props.type}
                    </span>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#f8f9fa',
                        color: '#5a6c7d',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                    }}>
                        <HiOutlineLocationMarker size={14} />
                        {props.location.split(',')[0]}
                    </span>
                </div>
                
                {/* Role description */}
                <div>
                    <h4 style={{
                        color: '#003049',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '1rem'
                    }}>
                        Key Responsibilities
                    </h4>
                    <ul style={{
                        paddingLeft: '1.25rem',
                        margin: 0,
                        color: '#5a6c7d',
                        lineHeight: '1.7',
                        fontSize: '0.95rem'
                    }}>
                        {props.description && props.description.slice(0, 4).map((desc, index) => {
                            return <li key={index} style={{marginBottom: '0.6rem'}}>{desc}</li>
                        })}   
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ExperiencePage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return(
        <div style={{ backgroundColor: '#f8f9fa' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
                padding: '8rem 0 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background decoration */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    pointerEvents: 'none'
                }} />
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} style={{ textAlign: 'center' }}>
                            <p style={{
                                color: '#00b4d8',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem'
                            }}>
                                Career Journey
                            </p>
                            <h1 style={{
                                color: '#f1faee',
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                lineHeight: 1.2
                            }}>
                                Professional Experience
                            </h1>
                            <p style={{
                                color: 'rgba(241, 250, 238, 0.8)',
                                fontSize: '1.15rem',
                                lineHeight: 1.7,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Career journey and contributions across leading organizations
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container style={{marginTop: '3rem'}}>

            <Row >
            <Col sm={12} md={12} lg = {12}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                marginBottom: '4rem',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
            }}>
            <div className="backgroundGradient" style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', 
                paddingTop: '2.5rem', 
                paddingBottom: '2rem'
            }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem'
            }}>
                <Image 
                    roundedCircle={false} 
                    thumbnail={false}
                    style={{ 
                        width: '140px', 
                        height: '140px', 
                        objectFit: 'contain'
                    }}  
                    variant="top" 
                    src="https://d3bql97l1ytoxn.cloudfront.net/app_resources/296829/overview/img4479993099242896054-2x.png"
                />
            </div>
            
            <div style={{textAlign: 'center'}}>
                <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '0.5rem'
                }}>Dayforce</h4>
                <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: 0
                }}>Career progression from intern to engineer</p>
            </div>
            </div>
            
            <div style={{padding: '2.5rem'}}>
            {/* Progress Job Position Component */}
                
                <ProgressJobPosition 
                    progress={
                    [

                        {
                            title: "Mobile Software Engineer",
                            desc: [
                                "Led end-to-end AppStore deployment processes for an application serving 5M+ daily users",
                                "Resolved developer roadblocks and optimized workflows across feature teams",
                                "Responsible for developing internal productivity tools for development efficiency", 
                                "Orchestrated successful phased rollouts through DevOps collaboration",
                                "Creating and enhancing a scalable enterprise application for the mobile devices.",
                                "Continue assessing risks and impacts on the existing system, as new functions are added."
                            ],
                            showVerticleLine: true, 
                            isLastPosition: true, 
                            type: "Full-Time", 
                            dates: "May(2023) - Present"
                        }, 

                        {
                            title: "Mobile Software Engineer Associate",
                            desc: [
                                
                                "Designing and implementing new development projects and completing and augmenting the current solutions and services",
                                "Unified effort: Product, Dev, Tech Writers, QA ensure thorough, solid product development.",
                                "Analyzing, designing, prototyping, developing, testing, and supporting the application - the complete software lifecycle.", 
                                "Working with clients, prospects, implementation partners, and Dayforce personnel to envision and deliver the required functionality", 
                                "Creating and enhancing a scalable enterprise application for the mobile devices.", 
                                "Assessing risks and impacts on the existing system, as new functions are added."
                            ],
                            showVerticleLine: true, 
                            isLastPosition: false, 
                            type: "Full-Time", 
                            dates: "July(2023) - April 30"
                        }, 
    
                        {
                            title: "Mobile Software Developer Intern",
                            desc: [
                                "Developed and implemented new platform features, collaborating with cross-functional teams to enhance mobile applications.",
                                "Engaged in agile methodologies and architecture guidelines, ensuring efficient and structured development processes.",
                                "Played a key role in the release of significant updates for the mobile platform, adapting to a dynamic and fast-paced work environment.", 
                                "Built and integrated new features using FRP Combine framework in conjunction with SwiftUI and MVVM architecture, ensuring seamless integration with the existing codebase.",
                                "Conducted comprehensive unit testing utilizing the XCTest framework, contributing to the development of high-quality and reliable code.",
                                "Actively participated in bug reporting and code review processes, emphasizing the production of high-quality, error-free code.", 
                                "Collaborated on diverse feature development projects, utilizing a range of technologies including SwiftUI, UIKit, and Objective-C, demonstrating versatility and technical proficiency."
                            ],
                            showVerticleLine: false, 
                            isLastPosition: false, 
                            type: "Internship", 
                            dates: "Jan - Apr (2023)"
                        }
                    ]
                    }
                />
            </div>
            </div>
            </Col>
            </Row>

            {/* Previous Positions Section */}
            <Row style={{marginBottom: '2rem', marginTop: '1rem'}}>
                <Col>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem'
                    }}>
                        <div style={{
                            width: '4px',
                            height: '32px',
                            backgroundColor: '#00b4d8',
                            borderRadius: '2px'
                        }} />
                        <h4 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#003049',
                            marginBottom: 0
                        }}>Previous Positions</h4>
                    </div>
                    <p style={{
                        fontSize: '1rem',
                        color: '#5a6c7d',
                        marginBottom: 0,
                        marginLeft: '1.25rem'
                    }}>Part-time and contract roles contributing to diverse projects</p>
                </Col>
            </Row>

            <Row>
            <Col sm={12} md={12} lg={6} style={{marginBottom: '2rem', paddingRight: '1rem'}}>
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
       
            <Col sm={12} md={12} lg={6} style={{marginBottom: '2rem', paddingLeft: '1rem'}}>
                <JobPosition
                    company = "ASOP Pvt Ltd"
                    color = "rgb(175 25 25)"
                    title = "Mobile Application Developer"
                    type = "Contract" 
                    location = "SBS Nagar Nawanshahr Punjab (144514), India"
                    logo="https://sareenv-projects.s3.amazonaws.com/images/1567672229702.jpeg"
                    description = {[
                        "Gathered and analyzed client requirements to enhance ordering system functionality.",
                        "Developed RESTful APIs using Node.js and Express.",
                        "Built iOS application implementing the MVC architectural pattern.",
                            "Integrated push notification functionality on the client side, connecting with Firebase services managed through a dashboard.",
                            "Created a Python 3 script for bulk uploading organizational products to a MySQL database hosted on Heroku.", 
                            "Deployed the backend APi to the Heroku Cloud Platform."
                        ]}
                    />       
                </Col>
            </Row>

            {/* Learning Events Section */}
            <Row style={{marginBottom: '2rem', marginTop: '4rem'}}>
                <Col>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem'
                    }}>
                        <div style={{
                            width: '4px',
                            height: '32px',
                            backgroundColor: '#00b4d8',
                            borderRadius: '2px'
                        }} />
                        <h4 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#003049',
                            marginBottom: 0
                        }}>Learning Events</h4>
                    </div>
                    <p style={{
                        fontSize: '1rem',
                        color: '#5a6c7d',
                        marginBottom: 0,
                        marginLeft: '1.25rem'
                    }}>Professional development through conferences and hackathons</p>
                </Col>
            </Row>
            
            <Row style={{marginTop: '2rem', marginBottom: '2rem'}}>
                <Col sm={12} md={12} lg={12}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                        <Row style={{margin: 0}}>
                            <Col sm={12} md={4} lg={4} style={{padding: 0}}>
                                <div style={{
                                    height: '100%',
                                    minHeight: '300px',
                                    backgroundColor: '#f8f9fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                }}>
                                    <Image 
                                        fluid 
                                        src="https://pbs.twimg.com/profile_images/1093035372332773377/jPm2F1jy_400x400.jpg"
                                        style={{
                                            width: '100%',
                                            maxWidth: '200px',
                                            borderRadius: '12px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </Col>
                            
                            <Col sm={12} md={8} lg={8} style={{padding: '2rem'}}>
                                <h3 style={{
                                    color: '#003049',
                                    fontWeight: 700,
                                    fontSize: '1.4rem',
                                    marginBottom: '1.5rem'
                                }}>Swift India Developer Conference</h3>
                                <ul style={{
                                    paddingLeft: '1.25rem',
                                    color: '#666',
                                    lineHeight: '1.7',
                                    fontSize: '1.05rem'
                                }}>
                                    <li style={{marginBottom: '0.75rem'}}>Actively participated in the developer conference in 2018 where iOS application developer across India participated to gain key topics and improvments in the latest iOS development features.</li>
                                    <li style={{marginBottom: '0.75rem'}}>Meet renowned iOS expert and gained industry knowledge on various iOS frameworks such as SwiftUI, CompositionalLayout, Reactive Combine Framework, Storage Presistence.</li>
                                    <li style={{marginBottom: '0.75rem'}}>Grasped the concept of UICollectionViewCompositionalLayout released and supporting iOS 13 and later used in the development project.</li>
                                    <li style={{marginBottom: '0.75rem'}}>The interactive sessions were delivered in the 8 parts from the domain experts delivering the content accross the globe</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            
            <Row style={{marginTop: '2rem', marginBottom: '2rem'}}>
                <Col sm={12} md={12} lg={12}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                        <Row style={{margin: 0}}>
                            <Col sm={12} md={4} lg={4} style={{padding: 0}}>
                                <div style={{
                                    height: '100%',
                                    minHeight: '300px',
                                    backgroundColor: '#f8f9fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                }}>
                                    <Image 
                                        fluid 
                                        src={"data:image/png;base64,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"}
                                        style={{
                                            width: '100%',
                                            maxWidth: '200px',
                                            borderRadius: '12px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            </Col>
                            
                            <Col sm={12} md={8} lg={8} style={{padding: '2rem'}}>
                                <h3 style={{
                                    color: '#003049',
                                    fontWeight: 700,
                                    fontSize: '1.4rem',
                                    marginBottom: '1.5rem'
                                }}>CovHack 2020</h3>
                                <ul style={{
                                    paddingLeft: '1.25rem',
                                    color: '#666',
                                    lineHeight: '1.7',
                                    fontSize: '1.05rem'
                                }}>
                                    <li style={{marginBottom: '0.75rem'}}>Collaborated with other 4 team members from different universities based in the United Kingdom</li> 
                                    <li style={{marginBottom: '0.75rem'}}>Developed Chrome extension for profanity detection using core javascript which interacts with Django REST-API</li>
                                    <li style={{marginBottom: '0.75rem'}}>Assisted other members to collect and pre-process the dataset which contains further classes of profane text messages for training the classifier using Keras</li>
                                    <li style={{marginBottom: '0.75rem'}}>Analysed the performance of the Naive Bayes classifier using confusion matrix and plotted the result using the Matplotlib library</li>
                                    <li style={{marginBottom: '0.75rem'}}>Integrated Twilio SMS service to the backend to send the mobile notification upon detection of the profane text</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row style={{
                marginTop: '2rem', 
                marginBottom: '2rem'
            }}>
                <Col>
                    <Contact />
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ExperiencePage;