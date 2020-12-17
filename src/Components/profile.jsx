import React from 'react';
import { Alert, Button, Container, Form, FormControl, Col, Row, Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Profile() {
    return (
        <>
            <h1 className="header-profile mb-5"> Your Profile</h1>
            <Container className="container-profile">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        <Col>
                            <Form.Control type='number' placeholder="Telephone Number" />
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Personal Bio About Yourself!" />
                    </Form.Group>
                    <Button className="w-100 mt-4" variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    )
}
export default Profile;