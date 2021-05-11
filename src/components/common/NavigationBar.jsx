import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const breadCrumbs = useSelector(state => state.breadCrumbs);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Site | Form</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">
                        {
                            breadCrumbs.map(breadCrumb => {
                                <>
                                    <NavLink to="/templates">{breadCrumb}</NavLink>
                                    <p>|</p>
                                </>
                            })
                        }
                    </Nav.Link>
                </Nav>            
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar    