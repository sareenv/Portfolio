import React from 'react'
import {Switch, BrowserRouter, Route, NavLink} from 'react-router-dom'
import Home from '../Components/Home/Home'
import BlogPage from '../Components/Article/SampleBlog'
import HackathonPage from '../Components/Hackathons/Hackathons'
import ContactPage from '../Components/Contact/Contact'
import Projects from '../Components/Projects/Projects'
import ProjectsPage from '../Components/Projects/ProjectsPage'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Service from '../Components/Personal/Services'
import ProjectDetails from '../Components/Projects/ProjectDetails'
import ArticleDetail from '../Components/Article/ArticleDetail'
import EducationPage from '../Components/Personal/EducationPage'
import '../Styles/base.scss'

const MainRouter = () => {
    return(
        <BrowserRouter>
                <Navbar collapseOnSelect className="customNavbar" expand="lg">
                    
                <Navbar.Brand>
                    <Button className="custom-brand" style={{ 
                    color: 'white', fontSize: '1rem', alignItems: 'center'}} disabled={true}>
                        SAREENV
                    </Button>            
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" color='white'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/" activeClassName="active" activeStyle = {{color: "white"}} exact >Home</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/projects" activeClassName="active">Projects</Nav.Link>
                            

                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/education"
                            activeClassName="active"> Education </Nav.Link>


                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/services" activeClassName="active">Services</Nav.Link>
                            {/* <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/hackathons" activeClassName="active" exact> Hackathons </Nav.Link> */}
                            
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/contact"
                            activeClassName="active"> Contact Me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/articles" exact component={BlogPage} />
                <Route path="/hackathons" exact component={HackathonPage} />
                <Route path="/projects" exact component={ProjectsPage} />
                <Route path="/experience" exact component={Projects} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/services" exact component={Service} />
                <Route path="/education" exact component={EducationPage} />
                <Route path="article/:id" exact component={ArticleDetail} />
                <Route path="/project_details/:id" exact component={ProjectDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
