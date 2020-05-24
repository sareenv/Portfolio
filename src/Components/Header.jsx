import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
        <div>
            <Navbar style={{backgroundColor: '#1b1b2f'}} expand="lg">
                <Nav className="m-auto">
                    <Nav.Link href="#home" style={{color: 'white'}}>Research</Nav.Link>
                    <Nav.Link href="#features" style={{color: 'white'}}>Hackathons</Nav.Link>
                    <Nav.Link href="#pricing" style={{color: 'white'}}>Articles</Nav.Link>
                    <Nav.Link href="#pricing" style={{color: 'white', backgroundColor: '#e43f5a'}}>Projects</Nav.Link>
                    <Nav.Link href="#pricing" style={{color: 'white'}}>Experience</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header
