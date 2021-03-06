import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import NavBar from './navbar';
import { MainContext } from '../Context/context';

function Main() {
    const { firstName, lastName } = useContext(MainContext);
    const [typeSearch, setTypeSearch] = useState();
    const { userId } = useContext(MainContext);

    const handleTypeInput = (e) => {
        setTypeSearch(e.target.value);
        if (e.target.value.trim() == '') setTypeSearch('undefined')
    }

    const handleTypeKeyInput = (e) => {
        if (e.key === 'Enter') {
            javascript: window.location.href = `/basic_search_results/${typeSearch}`;
        }
    }

    const basicSearching = (e) => {
        e.preventDefault();
        javascript: window.location.href = `/basic_search_results/${typeSearch}`;
    }

    return (
        <div className='first-main'>
            <div className='main-div'>
                <NavBar />
                {(firstName && lastName) ? <h1 className="main-header mb-5"> {`Welcome ${firstName} ${lastName}!`} </h1> :
                    <h1 className="main-header mb-5"> {`Welcome!`} </h1>}
                <Form className="form-hp" onSubmit={e => basicSearching(e)}>
                    <FormControl
                        as="textarea"
                        className="form-control form-hp "
                        id=''
                        rows={1}
                        placeholder='Search Pets By Type...'
                        onChange={e => handleTypeInput(e)}
                        onKeyUp={e => handleTypeKeyInput(e)}
                    >
                    </FormControl>
                    <Button className="btn btn-warning w-100" type="submit">Basic Search</Button>
                    <a href="/search" className="btn btn-success w-100 mt-2" >To The Search Page</a>
                </Form>
                <Card className="main-card text-center" >
                    <Card.Header>HomePage Menu</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to RentaPET</Card.Title>
                        <Card.Text className="mb-3">
                            Pet's Page!
                    </Card.Text>
                        <Card.Link href="/mypets" className="w-100 btn btn-warning" variant="success">My Pets Page</Card.Link>
                        <Card.Text className="mt-3 mb-3">
                            Go to Profile! We've got your back!
                    </Card.Text>
                        <Card.Link href={`/profile/${userId}`} className="w-100 btn btn-warning mb-2" variant="warning">Go to My Profile</Card.Link>
                        <Card.Link href={`/admin`} className="w-100 btn btn-dark admin-main-btn" variant="info">Admin? Click Here To Admin's Section</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="banner-div"><div className="banner"><img src={logo} alt="" className="logo-banner" /><span className="banner-txt">Renta <span className="itc">PET</span> </span> </div></div>
            <div className="banner2"> <img src={logo} alt="" className="logo-banner" /><span className="banner-txt">Renta<span className="itc">PET</span></span></div>   
        </div>
    )
}
export default Main;