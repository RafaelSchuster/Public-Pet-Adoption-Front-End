import React, { useContext } from 'react';
import { Button, Form, FormControl, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import NavBar from './navbar';
import { MainContext } from '../Context/context';

function Main() {
    const { firstName, lastName } = useContext(MainContext);
    return (
        <>
            <div className='main-div'>
                <NavBar />
                <h1 className="main-header mb-5"> {`Welcome ${firstName} ${lastName}`} </h1>
                <Form className="form-hp">
                    <FormControl
                        as="textarea"
                        className="form-control form-hp "
                        id=''
                        rows={1}
                        placeholder='Search Pets By Type...'>
                    </FormControl>
                    <a href="/searchresults" className="btn btn-warning w-100" >Basic Search</a>
                    <a href="/search" className="btn btn-success w-100 mt-2" >To The Search Page</a>
                </Form>
                <Card className="main-card text-center" >
                    <Card.Header>HomePage Menu</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to RentaPET</Card.Title>
                        <Card.Text className="mb-3">
                            Your Pet's Page!
                    </Card.Text>
                        <Card.Link href="/mypets" className="w-100 btn btn-warning" variant="success">My Pets Page</Card.Link>
                        <Card.Text className="mt-5 mb-3">
                            Your Profile! We've got your back!
                    </Card.Text>
                        <Card.Link href="/profile" className="w-100 btn btn-warning" variant="warning">Go to My Profile</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="banner-div"><div className="banner"><img src={logo} alt="" className="logo-banner" /><span className="banner-txt">Renta <span className="itc">PET</span> </span> </div></div>
            <div className="banner2"> <img src={logo} alt="" className="logo-banner" /><span className="banner-txt">Renta<span className="itc">PET</span></span></div>
        </>
    )
}
export default Main;