import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import BlogPage from '../Components/Blogs/SampleBlog'
import HackathonPage from '../Components/Hackathons/Hackathons'
import ContactPage from '../Components/Contact/Contact'
import ResearchPage from '../Components/Research/Research'
import { Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import '../Styles/base.scss'
import SampleBlog from '../Components/Blogs/SampleBlog'


const MainRouter = () => {
    return(
        <BrowserRouter>
            <Navbar collapseOnSelect className="customNavbar" expand="lg">
                <Nav className="m-auto">
                    <Nav.Link as={NavLink} className="customNav" to="/" activeClassName="active" exact >Projects</Nav.Link>
                    <Nav.Link as={NavLink} className="customNav" to="/blog" activeClassName="active">Blogs</Nav.Link>
                    <Nav.Link as={NavLink} className="customNav" to="/hackathons" activeClassName="active" exact> Hackathons </Nav.Link>
                    <Nav.Link as={NavLink} className="customNav" to="/research" activeClassName="active">Research</Nav.Link>
                    <Nav.Link as={NavLink} className="customNav" to="/contact" activeClassName="active"> Contact Me </Nav.Link>
                </Nav>
                
            </Navbar>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/hackathons" exact component={HackathonPage} />
                <Route path="/research" exact component={ResearchPage} />
                <Route path="/experience" exact component={ResearchPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/blog/:id" exact component={SampleBlog} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
