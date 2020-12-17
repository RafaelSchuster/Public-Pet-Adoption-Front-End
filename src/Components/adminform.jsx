import React from 'react';
import { Alert, Button, Container, Form, FormControl, Col, Row, Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function AdminForm() {
    return (
        <div>
            <h1 className="header-profile mb-5"> Admin Pet's Upload Form</h1>
            <a
                href="/admindashboard"
                className="btn btn-danger w-100 admin-link"
                variant="warning"
                type="submit"
            >
                To Admin's Dashboard
            </a>
            <Container className="container-profile admin-prof">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Type" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Pet's Name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Color" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col>
                            <Form.Control type="number" placeholder="Height" />
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="Weight" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Breed" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Adoption Status:</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>Adopted</option>
                                    <option>Fostered</option>
                                    <option>None of Above</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Hypoalergenic:</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Dietary Restrictions</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Dietary Restrictions..." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Upload Pet's Image" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Pet's Bio" />
                    </Form.Group>
                    <Button className="w-100 mt-2" variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )

}
export default AdminForm;