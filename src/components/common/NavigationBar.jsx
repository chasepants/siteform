import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logout from './Logout';
import Login from './Login';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const auth = useSelector(state => state.auth);    
    
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
                        <Nav.Link href="/domains">
                        Domains
                        </Nav.Link>
                        <Nav.Link href="/pricing">
                        Pricing
                        </Nav.Link>
                        
                        {
                            auth && (
                                <Nav.Link href="/sites">
                                   Sites
                                </Nav.Link>
                            )
                        }
                        {
                            auth && (
                                <Nav.Link href="/account">
                                   Account
                                </Nav.Link>
                            )
                        }
                        {
                            !auth && (
                                <Nav>
                                   <Login/>
                                </Nav>
                            )
                        }
                        {
                            auth && (
                                <Nav>
                                    <Logout/>
                                </Nav>
                            )
                        }
                        
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