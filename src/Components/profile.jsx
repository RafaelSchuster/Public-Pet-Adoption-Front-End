import React from 'react';
import { Button, Container, Form, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useContext } from 'react';
import { MainContext } from '../Context/context';
import { useState } from 'react';


function Profile() {
    const { newUser, setNewUser } = useContext(MainContext);
    const { users, setUsers } = useContext(MainContext);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();


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
    const changeBio = (e) => {
        setBio(e.target.value);
    }


    const submitprofile = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            telephone: telephone,
            email: email,
            password: password,
            bio: bio
        }
        if (newUser) {
            setNewUser(newUser);
            setUsers([...users, newUser]);
        }
    }

    return (
        <>
            <h1 className="header-profile mb-5"> Your Profile</h1>
            <Container className="container-profile">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" onChange={e => changeFs(e)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" onChange={e => changeLs(e)} />
                        </Col>
                        <Col>
                            <Form.Control type='number' placeholder="Telephone Number" onChange={e => changeTel(e)} />
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => changeEmail(e)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => changePassword(e)} />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Personal Bio About Yourself!" onChange={e => changeBio(e)} />
                    </Form.Group>
                    <Button className="w-100 mt-4" variant="warning" type="submit" onClick={(e) => submitprofile(e)}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    )
}
export default Profile;