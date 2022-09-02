import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from '../Utilities/Badge';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import '../../Styles/base.scss';
import Footer from '../Footer';

const Project = () => {
    return (
        <div className='projectSection'>
                <center>
                    <h3> Featured Projects </h3>
                    <hr className='customline'/>
                </center>
              
                    <Container fluid="sm">
                        <Row>
                            <Col sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{  }}>
                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/sareenv/Cinemato/master/banner.png"/>
                                    <Badge tag="UIKit" />
                                    <Card.Body>
                                        <Card.Title>Cinemato iOS Application </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        {/* <Button variant="primary" style={{width: '100%'}} to="/blog" >View Details</Button> */}
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                            <Col  sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{ }}>
                                    <Card.Img variant="top" src="https://reactjs.org/logo-og.png"/>
                                    <Badge tag="React" />
                                    <Card.Body>
                                        <Card.Title>Portfolio Website </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                            <Col sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{ }}>
                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/sareenv/SVSwiper/master/assets/poster.png"/>
                                    <Badge tag="UIKit" />
                                    <Card.Body>
                                        <Card.Title>SVSwiper Opensource Library </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                        </Row>

                        <Row>
                            <Col sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{  }}>
                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/sareenv/Cinemato/master/banner.png"/>
                                    <Badge tag="UIKit" />
                                    <Card.Body>
                                        <Card.Title>Cinemato iOS Application </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        {/* <Button variant="primary" style={{width: '100%'}} to="/blog" >View Details</Button> */}
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                            <Col  sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{ }}>
                                    <Card.Img variant="top" src="https://reactjs.org/logo-og.png"/>
                                    <Badge tag="React" />
                                    <Card.Body>
                                        <Card.Title>Portfolio Website </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                            <Col sm={12} md={5} lg={4} className="cutomColumn">
                                <Card className='customsytle' style={{ }}>
                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/sareenv/SVSwiper/master/assets/poster.png"/>
                                    <Badge tag="UIKit" />
                                    <Card.Body>
                                        <Card.Title>SVSwiper Opensource Library </Card.Title>
                                        <Card.Text>
                                        The application focuses on providing users to choose trending movies and tv shows and is using TheMovieDB api for fetching the details.
                                        </Card.Text>
                                        <Link className='customLink' to={{pathname: '/project_details/1'}}> View Details </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
    
                        </Row>
    
                        
                        
                    </Container>

                    <Footer />
            </div>
    )
}

export default Project
