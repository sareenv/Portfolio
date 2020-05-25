import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home/Home'
import BlogPage from './Blogs/blogPage'
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom"

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    render() {
        return (
            <div>
            <Router> 
                <Navbar style={{backgroundColor: '#1b1b2f'}} expand="lg">
                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} to="/" exact style={{color: 'white', backgroundColor: (this.state.selected === 0) ? '#e43f5a' : '#1b1b2f'}}>Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs" style={{color: 'white', backgroundColor: (this.state.selected === 1) ? '#e43f5a' : '#1b1b2f'}}>Hackathons</Nav.Link>
                        <Nav.Link as={NavLink} to="/" exact style={{color: 'white', backgroundColor: (this.state.selected === 2) ? '#e43f5a' : '#1b1b2f'}}>Articles</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs" style={{color: 'white', backgroundColor: (this.state.selected === 4) ? '#e43f5a' : '#1b1b2f'}}>Research</Nav.Link>
                        <Nav.Link as={NavLink} to="/" style={{color: 'white', backgroundColor: (this.state.selected === 5) ? '#e43f5a' : '#1b1b2f'}}>Experience</Nav.Link>
                    </Nav>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/blogs" exact component={BlogPage} />
            </Router>
            </div>
        )
    }

}



export default Navigation
