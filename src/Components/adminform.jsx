import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form, FormControl, Col, Row, Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import { MainContext } from '../Context/context';
import NavBar from './navbar';
import { app } from '../firebase/base';


function AdminForm() {
    const [error, setError] = useState();
    const [id, setId] = useState();
    const [petName, setPetName] = useState();
    const [type, setType] = useState();
    const [color, setColor] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [breed, setBreed] = useState();
    const [petStatus, setPetStatus] = useState('');
    const [hypoalergenic, setHypoalergenic] = useState();
    const [dietRestrictions, setDietRestrictions] = useState();
    const [petBio, setPetBio] = useState();
    const [imgActive, setImgActive] = useState(false);
    const { token } = useContext(MainContext);

    const addPetName = (e) => {
        setPetName(e.target.value);
    }
    const addPetType = (e) => {
        setType(e.target.value.toLowerCase());
    }
    const addPetColor = (e) => {
        setColor(e.target.value.toLowerCase());
    }
    const addPetHeight = (e) => {
        setHeight(e.target.value);
    }
    const addPetWeight = (e) => {
        setWeight(e.target.value);
    }
    const addPetBreed = (e) => {
        setBreed(e.target.value.toLowerCase());
    }
    const addDiet = (e) => {
        setDietRestrictions(e.target.value);
    }
    const addPetBio = (e) => {
        setPetBio(e.target.value);
    }

    const adoptSelect = (e) => {
        setPetStatus(e.target.value);
    }

    const hypoSelect = (e) => {
        const selected = e.target.value;
        setHypoalergenic(selected);
    }

    const headers = {
        'Authorization': `Bearer ${token} `
    };
    const db = app.firestore();

    const imageHandler = async (e) => {
        let petId;
        try {
            axios.get(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/pet_id/${petName}/type/${type}`, {
                headers: headers
            })
                .then(res => {
                    petId = res.data.id;
                });
        } catch (error) {
            console.log(error);
        }
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()
        console.log(await fileUrl)
        try {
            const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/image_url/${petId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ post: await fileUrl }),
            });
            let body = await response.json();
            setError(body);
        } catch (error) {
            console.log(error);
        };


    };

    const petSubmitting = async (e) => {
        e.preventDefault();
        let body;
        const newPetData = {
            name: petName,
            breed, breed,
            type: type,
            color: color,
            height: height,
            weight: weight,
            petStatus: petStatus,
            hypoalergenic: hypoalergenic,
            dietRestrictions: dietRestrictions,
            petBio: petBio
        };
        try {
            const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/pet_profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ post: newPetData }),
            });
            body = await response.json();
            setError(body);
            setImgActive(true);
        } catch (error) {
            setError(body);
        };
    }

    return (
        <>
            <NavBar />
            <div>
                <h1 className="header-admin mb-5"> Admin Pet's Upload Form</h1>
                <a
                    href="/admindashboard"
                    className="btn btn-success w-100 admin-link"
                    variant="warning"
                    type="submit"
                >
                    Click Here To Admin's Dashboard
            </a>
                <Container className="container-profile admin-prof">
                    <Form onSubmit={e => petSubmitting(e)}>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="Type" onChange={e => addPetType(e)} required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Pet's Name" onChange={e => addPetName(e)} required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Color" onChange={e => addPetColor(e)} required />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Col>
                                <Form.Control type="number" placeholder="Height in Cm" onChange={e => addPetHeight(e)} required />
                            </Col>
                            <Col>
                                <Form.Control type="number" placeholder="Weight in Kg" onChange={e => addPetWeight(e)} required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Breed" onChange={e => addPetBreed(e)} required />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Adoption Status:</Form.Label>
                                    <Form.Control as="select" onChange={selectValue => adoptSelect(selectValue)} required >
                                        <option></option>
                                        <option value='adopted'>Adopted</option>
                                        <option value='fostered'>Fostered</option>
                                        <option value='available'>None of Above</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Hypoalergenic:</Form.Label>
                                    <Form.Control as="select" onChange={selectValue => hypoSelect(selectValue)} required>
                                        <option></option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Dietary Restrictions</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Dietary Restrictions..." onChange={e => addDiet(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    {!imgActive ? <Form.Label>After Submitting You Can Upload Pet's Image Here</Form.Label> :
                                        <Form.Label>Upload Pet's Image</Form.Label>}
                                    {imgActive && <input id="exampleFormControlFile1"
                                        label="Upload Pet's Image"
                                        type='file' name='file' onChange={e => imageHandler(e)} />}
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Pet's Bio" onChange={e => addPetBio(e)} />
                        </Form.Group>
                        <Button className="w-100 mb-1" variant="warning" type="submit">
                            Submit
                    </Button>
                    </Form>
                    {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                </Container>
            </div>
        </>
    )

}
export default AdminForm;