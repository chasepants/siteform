import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import Login from './Login';
import { Auth } from 'aws-amplify';

class NavigationBar extends React.Component{
    state = {
        isAuthenticated: false,
        isLoading: true
    }

    async componentDidMount() {
        await Auth.currentSession()
        .then(data => {
            this.setState({ isAuthenticated: true, isLoading: false });
        }).catch(err =>{
            console.log(err);
            this.setState({ isAuthenticated: false, isLoading: false });
        });
    }


    render() {
        const {isLoading, isAuthenticated} = this.state;
        
        if (isLoading) {
            return <div>Loading</div>
        }

        if (!isAuthenticated) {
            return (
                <Navbar bg="light" className="justify-content-between" expand="lg">
                    <div id="site-logo">           
                        <Navbar.Brand href="/">Site | Form</Navbar.Brand>
                    </div>
                    <div id="navbar-links">           
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/templates">
                                        Templates
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/domains">
                                        Domains
                                    </Link>
                                </Nav.Link><Nav.Link>
                                    <Link to="/pricing">
                                        Pricing
                                    </Link>
                                </Nav.Link>
                                <Nav>
                                    <Login/>
                                </Nav>
                            </Nav>           
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            )
        }

        return (
            <Navbar bg="light" className="justify-content-between" expand="lg">
                <div id="site-logo">           
                    <Navbar.Brand href="/">Site | Form</Navbar.Brand>
                </div>
                <div id="navbar-links">           
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/templates">
                                    Templates
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/domains">
                                    Domains
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/pricing">
                                    Pricing
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/sites">
                                    Sites
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/account">
                                    Account
                                </Link>
                            </Nav.Link>
                            <Nav>
                                <Logout/>
                            </Nav>
                        </Nav>           
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}    

    
export default NavigationBar    