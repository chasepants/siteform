import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Rapid Express</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">
                        <NavLink to="/" exact>Home</NavLink> {" | "}
                        <NavLink to="/templates">Templates</NavLink>
                    </Nav.Link>
                </Nav>            
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar