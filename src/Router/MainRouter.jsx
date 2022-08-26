import React from 'react'
import {Switch, BrowserRouter, Route, NavLink} from 'react-router-dom'
import Home from '../Components/Home/Home'
import BlogPage from '../Components/Blogs/SampleBlog'
import HackathonPage from '../Components/Hackathons/Hackathons'
import ContactPage from '../Components/Contact/Contact'
import Projects from '../Components/Projects/Projects'
import { Navbar, Nav } from 'react-bootstrap'
import '../Styles/base.scss'
// import SampleBlog from '../Components/Blogs/SampleBlog'
import Service from '../Components/Personal/Services'
import ProjectDetails from '../Components/Projects/ProjectDetails'


const MainRouter = () => {
    return(
        <BrowserRouter>
            
                <Navbar collapseOnSelect className="customNavbar" expand="lg">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/" activeClassName="active" activeStyle = {{color: "white"}} exact >Home</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/projects" activeClassName="active">Projects</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/blog" activeClassName="active">Articles</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/services" activeClassName="active">Services</Nav.Link>
                            {/* <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/hackathons" activeClassName="active" exact> Hackathons </Nav.Link> */}
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/contact" activeClassName="active"> Contact Me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/hackathons" exact component={HackathonPage} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/experience" exact component={Projects} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/services" exact component={Service} />
                {/* <Route path="/blog/:id" exact component={SampleBlog} /> */}
                <Route path="/project_details/:id" exact component={ProjectDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
