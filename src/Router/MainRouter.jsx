import React from 'react'
import {Switch, BrowserRouter, Route, NavLink} from 'react-router-dom'
import Home from '../Components/Home/Home'
import BlogPage from '../Components/Article/SampleBlog'
import HackathonPage from '../Components/Hackathons/Hackathons'
import ContactPage from '../Components/Contact/Contact'
import Projects from '../Components/Projects/Projects'
import ProjectsPage from '../Components/Projects/ProjectsPage'
import { Navbar, Nav, Image } from 'react-bootstrap'
import Service from '../Components/Personal/Services'
import ProjectDetails from '../Components/Projects/ProjectDetails'
import ArticleDetail from '../Components/Article/ArticleDetail'
import Education from '../Components/Personal/Education'
import '../Styles/base.scss'

const MainRouter = () => {
    return(
        <BrowserRouter>
                <Navbar collapseOnSelect className="customNavbar" expand="lg">
                    
                <Navbar.Brand>
                    <Image
                        className='logo-front'
                        style={{width: '34px', height: '34px', display: 'none'}}
                        src={'data:image/png;base64,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'}
                        />
                    
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
                <Route path="/education" exact component={Education} />
                <Route path="article/:id" exact component={ArticleDetail} />
                <Route path="/project_details/:id" exact component={ProjectDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
