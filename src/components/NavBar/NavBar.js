import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './NavBar.css';

class NavBar extends Component{
    render(){
		return<div>
            <Navbar className='NavBar' variant="dark">
                <Navbar.Brand href='#home'
                id='nav-brand'
                >
                    <img
                        alt=''
                        src={logo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />
                AppName
                </Navbar.Brand>
                <Navbar.Collapse 
                    id="responsive-navbar-nav"
                    >
                    <Nav className='ml-auto'>
                        <Nav.Link 
                            href='/LogIn'
                            id='navbar-txt'
                            >
                        Home
                        </Nav.Link>
                        <Nav.Link 
                            href='#' 
                            
                            >
                        Your sports
                        </Nav.Link>
                        <NavDropdown
                            alignRight
                            title="More"
                            id="dropdown-menu-align-right"
                            
                        >
                            <NavDropdown.Item 
                                href='#action/3.1'
                            >
                            Action
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                href='#action/3.2'
                            >
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    href='#action/3.3'
                                >
                                Something else here
                                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    };
};

export default NavBar;