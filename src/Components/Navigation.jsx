import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home/Home'
import BlogPage from './Blogs/blogPage'
import HackathonPage from './Hackathons/Hackathons'
import ResearchPage from './Research/Research'
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom"

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }
  
    changeIndex = (index) => {
        this.setState({
            selected: index
        })
    }

    render() {
        return (
            <div>
            <Router> 
                <Navbar style={{backgroundColor: '#1b1b2f'}} expand="lg">
                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} to="/" onClick={() => this.changeIndex(0)} exact style={{color: 'white', backgroundColor: (this.state.selected === 0) ? '#e43f5a' : '#1b1b2f'}}>Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" onClick={() => this.changeIndex(1)} style={{color: 'white', backgroundColor: (this.state.selected === 1) ? '#e43f5a' : '#1b1b2f'}}>Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to="/hackathons" onClick={() => this.changeIndex(2)} exact style={{color: 'white', backgroundColor: (this.state.selected === 2) ? '#e43f5a' : '#1b1b2f'}}> Hackathons </Nav.Link>
                        <Nav.Link as={NavLink} to="/research" onClick={() => this.changeIndex(3)} style={{color: 'white', backgroundColor: (this.state.selected === 3) ? '#e43f5a' : '#1b1b2f'}}>Research</Nav.Link>
                        <Nav.Link as={NavLink} to="/experience" onClick={() => this.changeIndex(4)} style={{color: 'white', backgroundColor: (this.state.selected === 4) ? '#e43f5a' : '#1b1b2f'}}> Work Experience </Nav.Link>
                    </Nav>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/hackathons" exact component={HackathonPage} />
                <Route path="/research" exact component={ResearchPage} />
                <Route path="/experience" exact component={ResearchPage} />
            </Router>
            </div>
        )
    }

}



export default Navigation
