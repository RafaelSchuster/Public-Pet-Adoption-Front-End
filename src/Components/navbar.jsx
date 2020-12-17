import React from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';


function NavBar() {
    return (
        <Navbar bg="warning" variant="warning" className="navBar">
            <Nav className="mr-auto">
                <Nav.Link href="/" className="navLink">Home</Nav.Link>
                <Nav.Link href='/pets' className="navLink">Pets</Nav.Link>
                <Nav.Link href='/search' className="navLink">Search</Nav.Link>
                <Nav.Link href='/admin' className="navLink">Admin</Nav.Link>
                <div className="banner-nav">
                    <img src={logo2} alt="" className="logo-nav" />
                    <span
                        className="banner-nav"
                    >RentaPet
                    <span className="itc"
                        >ITC
                    </span>
                    </span>
                </div>
            </Nav>
        </Navbar>
    )
}

export default NavBar;