import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="#home"><h2 className='text-primary'>
                    <i className="bi bi-yelp"></i> Listen Eva</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='flex-row gap-3'>
                        <Nav.Link href="#" className='fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#menu" className='fw-bold'>Videos</Nav.Link>
                        <Nav.Link href="#playsongs" className='fw-bold'>Mp-3 Palyer</Nav.Link>
                        <Nav.Link href="#contact" className='fw-bold'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar