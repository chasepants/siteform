import React, {useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logout from './Logout';
import Login from './Login';

import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

const NavigationBar = () => {
    const [user, setUser] = useState(false);

    Auth.currentSession()
        .then(data => setUser(true))
        .catch(err => setUser(false));

    useEffect(() => {
        console.log(user);
    }, [user])    
    
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
                        {
                            user && (
                                <Nav.Link href="/sites">
                                   Sites
                                </Nav.Link>
                            )
                        }
                        {
                            user && (
                                <Nav.Link href="/account">
                                   Account
                                </Nav.Link>
                            )
                        }
                        {
                            !user && (
                                <Nav>
                                   <Login/>
                                </Nav>
                            )
                        }
                        {
                            user && (
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