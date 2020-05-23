import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Nav className="m-auto">
                    <Nav.Link href="#home">Research</Nav.Link>
                    <Nav.Link href="#features">Hackathons</Nav.Link>
                    <Nav.Link href="#pricing">Articles</Nav.Link>
                    <Nav.Link href="#pricing">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Experience</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header
