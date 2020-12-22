import React, { useEffect } from 'react';
import { Button, Container, Form, Col, Alert, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useContext } from 'react';
import { MainContext } from '../Context/context';
import { useState } from 'react';
import { getUserById } from '../Api/api'


function UserFullProfile(props) {
    const [id, setId] = useState(props.match.params.id);
    const[thisUser, setThisUser] = useState({});
    const [error, setError] = useState();
    const [userFullProfile, setUserFullProfile] = useState();
    const { newUser, setNewUser } = useContext(MainContext);
    const { users, setUsers } = useContext(MainContext);
    const { firstName, setFirstName } = useContext(MainContext);
    const { lastName, setLastName } = useContext(MainContext);
    const { email, setEmail } = useContext(MainContext);
    const { telephone, setTelephone } = useContext(MainContext);
    const { bio, setBio } = useContext(MainContext);
    const { password, setPassword } = useContext(MainContext);

    useEffect(() => {
        getUserById(id)
            .then(res => {
                setThisUser(res);
            })
            .catch(err => console.log(err));
    }, [])

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
    const changePets = (e) => {
        setPassword(e.target.value);
    }
    const changeBio = (e) => {
        setBio(e.target.value);
    }

    const submitprofile = async (e) => {
        e.preventDefault();
        const newUserData = {
            firstName: firstName,
            lastName: lastName,
            telephone: telephone,
            email: email,
            password: password,
            bio: bio
        }
        const response = await fetch('http://localhost:5000/userprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: newUserData }),
        })
        const body = await response.text();
    }

    return (
        <>
            <h1 className="header-profile mb-5"> User Full Profile</h1>
            <a
                href="/admindashboard"
                className="btn btn-success w-100 admin-link"
                variant="warning"
                type="submit"
            >
                Click Here To Admin's Dashboard
            </a>
            <Container className="container-profile">
                <Form onSubmit={e => submitprofile(e)}>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name"
                                onChange={e => changeFs(e)} defaultValue={thisUser.firstName} required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name"
                                onChange={e => changeLs(e)} defaultValue={thisUser.lastName} required />
                        </Col>
                        <Col>
                            <Form.Control type='number' placeholder="Telephone Number"
                                onChange={e => changeTel(e)} defaultValue={thisUser.telephone} />
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    onChange={e => changeEmail(e)} defaultValue={thisUser.email} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Pets Owned"
                                    onChange={e => changePets(e)} required />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Personal Bio" defaultValue={thisUser.bio}
                            onChange={e => changeBio(e)} />
                    </Form.Group>
                    <Button className="w-100 mt-4" variant="warning" type="submit"
                    >
                        Submit Changes
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default UserFullProfile;