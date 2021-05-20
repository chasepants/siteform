import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
            console.log(data);
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
                                <Nav.Link href="/templates">
                                Templates
                                </Nav.Link>
                                <Nav.Link href="/domains">
                                Domains
                                </Nav.Link>
                                <Nav.Link href="/pricing">
                                Pricing
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
                            <Nav.Link href="/templates">
                            Templates
                            </Nav.Link>
                            <Nav.Link href="/domains">
                            Domains
                            </Nav.Link>
                            <Nav.Link href="/pricing">
                            Pricing
                            </Nav.Link>
                            <Nav.Link href="/sites">
                                Sites
                            </Nav.Link>
                            <Nav.Link href="/account">
                                Account
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