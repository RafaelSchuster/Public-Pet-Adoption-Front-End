import React, { useContext } from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import { MainContext } from '../Context/context';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';


function NavBar() {
    const{firsName, setFirstName, lastName, setLastName} = useContext(MainContext)
    const logout = () => {
        localStorage.setItem('token', 'noToken');
        localStorage.setItem('admin', 'false');
        setFirstName('');
        setLastName('');
        window.location.href = 'https://pet-project-itc.herokuapp.com/'
    }
    <Nav.Link href='/admin' className="navLink">Admin</Nav.Link>
    return (
        <Navbar bg="warning" variant="warning" className="navBar">
            <Nav className="mr-auto">
                <Nav.Link href="/" className="navLink">Home</Nav.Link>
                <Nav.Link href='/search' className="navLink">Search</Nav.Link>
                <Button href='/logged_out' className="logout-btn" variant='warning'>SignIn</Button>
                <Button className="logout-btn" variant='warning' onClick={() => logout()}>Logout</Button>
                <div className="banner-nav">
                    <a href="/"><img src={logo2} alt="" className="logo-nav" /><span
                        className="banner-nav"
                    >Renta
                    <span className="itc"
                        >PET
                    </span>
                    </span></a>

                </div>
            </Nav>
        </Navbar>
    )
}

export default NavBar;