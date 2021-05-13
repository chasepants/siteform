import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const breadCrumbs = useSelector(state => state.breadCrumbs);

    return (
        <Navbar bg="light" className="justify-content-between" expand="lg">
            <div id="site-logo">           
                <Navbar.Brand href="/">Site | Form</Navbar.Brand>
            </div>
            <div id="navbar-links">           
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/templates">
                        Templates
                        </Nav.Link>
                        <Nav.Link href="/help">
                        Help
                        </Nav.Link>
                        <Nav.Link href="/pricing">
                        Pricing
                        </Nav.Link>
                        <Nav.Link href="/account">
                        Account
                        </Nav.Link>
                    </Nav>            
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavigationBar    



// {
//     breadCrumbs.map(breadCrumb => {
//         <>
//             <NavLink to="/templates">{breadCrumb}</NavLink>
//             <p>|</p>
//         </>
//     })
// }