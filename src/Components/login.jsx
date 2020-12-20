import React, { useState } from 'react';
import { Card, Form, Alert, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';



function Login() {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const [modalSignIsOpen, setModalSignIsOpen] = useState(false);

    return (
        <>
            <div className='logged-out'>
                <h1>Welcome To RentaPET</h1>
                <p className="description">RentaPET is more than a service. It is where you come to show your love for pets.
                Here you will find all you might want to know about your pet, and let's not forget... Your next pet too.
                We do the utmost effort to offer you the most accurate information about our animals,
                and we give you also many options regarding fostering and adopting pets.
                Let's not forget that animals have feelings too and they need our support.
                After all This world is for us to live together, isn't it?
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
                            <Form >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required></Form.Control>
                                </Form.Group>
                                <Button className="w-100" type="submit" variant='success' >Log In</Button>
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
                        <Form >
                            <Form.Row>
                                <Col>
                                    <Form.Group id="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group id="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" required></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group id="telephone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" required></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" required></Form.Control>
                            </Form.Group>
                            <Button className="w-100" type="submit" variant='success' >Sign Up</Button>
                        </Form>
                    </Card>
                </Modal>
            </div>
        </>
    )
}
export default Login;
