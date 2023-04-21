import React from 'react'
import {Switch, HashRouter, Route, NavLink} from 'react-router-dom'
import Home from '../Components/Home/Home'
import ContactPage from '../Components/Contact/Contact'
import ExperiencePage from '../Components/Personal/ExperiencePage'
import ProjectsPage from '../Components/Projects/ProjectsPage'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Service from '../Components/Personal/Services'
import ProjectDetails from '../Components/Projects/ProjectDetails'
import EducationPage from '../Components/Personal/EducationPage'
import '../Styles/base.scss'
import Show from '../Components/Articles/Show'
// import Article from '../Components/Articles/Article'

const MainRouter = () => {
    return(
        <HashRouter basename='/'>
                <Navbar collapseOnSelect className="customNavbar" expand="lg">
                <Navbar.Brand className="customBrand">
                    <Button disabled={true}  style={{opacity: "1", display: 'none'}} variant="light"> Sareenv</Button>       
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" color='white'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/" activeClassName="active" activeStyle = {{color: "white"}} exact >Home</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/projects" activeClassName="active">Projects</Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/experience"
                            activeClassName="active"> Experience </Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/education"
                            activeClassName="active"> Education </Nav.Link>
                            <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/services" activeClassName="active">Services</Nav.Link>
                            {/* <Nav.Link as={NavLink} className="customNav" style={{color: "white"}} to="/hackathons" activeClassName="active" exact> Hackathons </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={ProjectsPage} />
                    <Route path="/experience" exact component={ExperiencePage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/services" exact component={Service} />
                    <Route path="/education" exact component={EducationPage} />
                    <Route path="/articles" exact component={Show} />
                    <Route path="/project_details/:id" exact component={ProjectDetails} />
                </Switch>
            

        </HashRouter>
    )
}

export default MainRouter
