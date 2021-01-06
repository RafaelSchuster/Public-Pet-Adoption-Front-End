import React, { useContext, useState } from 'react';
import { Card, Form, Alert, Button, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import { MainContext } from '../Context/context';
import axios from 'axios'

function Login() {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const [modalSignIsOpen, setModalSignIsOpen] = useState(false);
    const [password2, setPassword2] = useState();
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const { firstName, setFirstName } = useContext(MainContext);
    const { lastName, setLastName } = useContext(MainContext);
    const { email, setEmail } = useContext(MainContext);
    const { telephone, setTelephone } = useContext(MainContext);
    const { password, setPassword } = useContext(MainContext);
    const { admin, setAdmin } = useContext(MainContext);


    const useLocalState = (localItem) => {
        const [localToken, setState] = useState(localStorage.getItem(localItem));
        const setLocalToken = (newItem) => {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [localToken, setLocalToken];
    }
    const [token, setToken] = useLocalState('token');
    const [administrator, setAdministrator] = useLocalState('admin');

    const changeFs = (e) => {
        setFirstName(e.target.value);
    }

    const changeLs = (e) => {
        setLastName(e.target.value);
    }
    const changeTel = (e) => {
        setTelephone(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changePassword2 = (e) => {
        setPassword2(e.target.value);
    }
    const submitSignUp = async (e) => {
        e.preventDefault();
        let body;
        if (password === password2) {
            setError('');
            const newUserData = {
                firstName: firstName,
                lastName: lastName,
                telephone: telephone,
                email: email,
                password: password,
            }
            try {
                const checkDupes = await fetch(`http://localhost:5000/checkdupes/${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const bodyDupe = await checkDupes.json();
                if (bodyDupe.length > 0) setError("There is an account with this email already")
                else if (bodyDupe.length == 0) {
                    const response = await fetch('http://localhost:5000/user_sign', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ post: newUserData }),
                    })
                    body = await response.json();
                    console.log(body.accessToken)
                    if (body.accessToken.length > 0) {
                        setToken(body.accessToken);
                        setAdministrator(false);
                        setTimeout(()=>{
                            window.location.href = 'http://localhost:3000';
                        },2000)
                        setAdmin(false);
                    }
                    else {
                        setError(body);
                    }
                }
            } catch (error) {
                setError(body);
            }
        }
        else return setError('Passwords do not match');
    }
    const submitLogin = async (e) => {
        e.preventDefault();
        let body;
        setError2('')
        const loginUserData = {
            email: email,
            password: password,
        }
        try {
            const response = await fetch('http://localhost:5000/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ post: loginUserData }),
            })
            body = await response.json();
            console.log(body.accessToken)
            if (body.accessToken.length > 0) {
                setToken(body.accessToken);
                setAdministrator(false);
                setTimeout(()=>{
                    window.location.href = 'http://localhost:3000';
                },2000)
                setAdmin(false);
            }
            else {
                setError(body);
            }
        } catch (error) {
            setError2(body);
        }
    }

    return (
        <>
            <div className='logged-out'>
                <h1>Welcome To RentaPET</h1>
                <p className="description">RentaPET is more than a service. It is where you come to show your love for pets.
                Here you will find all you might want to know about your pet, and let's not forget... Your next pet too.
                We do the utmost effort to offer you the most accurate information about our animals,
                and we give you also many options regarding fostering and adopting pets.
                As they say, animals have feelings too and they need our support.
                After all this world is for us to live together, isn't it?
                So please Login if you have an account, if not, just make one! And start browsing in our website,
                your next pet might be just one click away from his next home!
                Good petting!
                 </p>
                <Button type="button" variant="warning" onClick={() => setModalLoginIsOpen(true)}>Login</Button>
                <Button type="button" variant="warning" onClick={() => setModalSignIsOpen(true)}>Sign Up</Button>
                <a href="/search" className="btn btn-warning" >Search Page</a>
                <Modal className="logged-out-modal"
                    isOpen={modalLoginIsOpen}
                    onRequestClose={() => setModalLoginIsOpen(false)}
                >
                    <Card className='login-card'>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error2 && <Alert variant="danger">{error2}</Alert>}
                            <Form onSubmit={(e) => submitLogin(e)}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required onChange={e => changeEmail(e)}></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required onChange={e => changePassword(e)}></Form.Control>
                                </Form.Group>
                                <Button className="w-100" type="submit" variant='success'>Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal>
                <Modal className="logged-out-modal"
                    isOpen={modalSignIsOpen}
                    onRequestClose={() => setModalSignIsOpen(false)}
                >
                    <Card className='sign-card'>
                        <Card.Body><h2 className="text-center mb-5 sign-header">Sign-Up</h2></Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={(e) => submitSignUp(e)} >
                            <Form.Row>
                                <Col>
                                    <Form.Group id="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" required onChange={e => changeFs(e)} ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group id="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" required onChange={e => changeLs(e)}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group id="telephone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" required onChange={e => changeTel(e)}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={e => changeEmail(e)}></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required onChange={e => changePassword(e)}></Form.Control>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" required onChange={e => changePassword2(e)} ></Form.Control>
                            </Form.Group>
                            <Button className="w-100" type="submit" variant='success'>Sign Up</Button>
                        </Form>
                    </Card>
                </Modal>
            </div>
        </>
    )
}
export default Login;
