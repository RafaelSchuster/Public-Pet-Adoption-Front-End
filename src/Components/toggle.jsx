import React, { useContext, useState } from 'react';
import { Accordion, Card, useAccordionToggle, Button, Form, FormControl, Image, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { advancedSearchPet } from '../Api/api';
import AdvResultItem from './advSearchResults'

const AccordionContext = React.createContext({});

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'blue' : 'orange' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function Toggle() {
    const [typeSearch, setTypeSearch] = useState();
    const [adoption, setAdoption] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [type, setType] = useState();
    const [petName, setPetName] = useState();
    const [advResult, setAdvResult] = useState();
    const [error, setError] = useState('');



    const addPetName = (e) => {
        setPetName(e.target.value);
    }
    const addPetType = (e) => {
        setType(e.target.value);
    }

    const addPetHeight = (e) => {
        setHeight(e.target.value);
    }
    const addPetWeight = (e) => {
        setWeight(e.target.value);
    }

    const adoptSelect = (e) => {
        setAdoption(e.target.value);
    }

    const advSearchSubmit = (e) => {
        e.preventDefault();
        advancedSearchPet(adoption, height, weight, type, petName)
            .then(res => {
                console.log(res)
                setAdvResult(res);
            })
    }

    const handleTypeInput = (e) => {
        setTypeSearch(e.target.value);
    }

    const basicSearching = (e) => {
        e.preventDefault();
        javascript: window.location.href = `/basic_search_results/${typeSearch}`;
    }

    return (
        <>
            <Accordion defaultActiveKey="0" className="accordion">
                <Card className="accordion">
                    <Card.Header>
                        <ContextAwareToggle eventKey="0">Basic Search By Pet Type </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body >
                            <Form className="form-hp " onSubmit={e => basicSearching(e)}>
                                <FormControl
                                    as="textarea"
                                    className="form-control search-basic  "
                                    id='basic'
                                    rows={2}
                                    onChange={e => handleTypeInput(e)}
                                    placeholder='Search Pets By Type...' required>
                                </FormControl>
                                <Button className="btn btn-success w-100 basic-btn" variant='success' type="submit"  >Basic Search By Type</Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion">
                    <Card.Header>
                        <ContextAwareToggle eventKey="1">Advanced Search</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form className="form-adv" onSubmit={e => advSearchSubmit(e)} encType="multipart/form-data">
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" onChange={selectValue => adoptSelect(selectValue)}  >
                                                <option></option>
                                                <option value='adopted'>Adopted</option>
                                                <option value='fostered'>Fostered</option>
                                                <option value='available'>Available</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Control type='number' placeholder="Height in Cm" onChange={e => addPetHeight(e)} />
                                    </Col>
                                    <Col>
                                        <Form.Control type='number' placeholder="Weight in Kg" onChange={e => addPetWeight(e)} />
                                    </Col>
                                </Form.Row>
                                <Form.Row >
                                    <Col>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control placeholder="Type" type="text" onChange={e => addPetType(e)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control placeholder="Name" type="text" onChange={e => addPetName(e)} />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button className="w-100 mt-2" variant="success" type="submit">
                                    Advanced Search
                            </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <ul>
                {advResult && advResult.map(pet =>
                    <AdvResultItem
                        key={Math.random()}
                        id={pet.id}
                        name={pet.name}
                        type={pet.type}
                        color={pet.color}
                        height={pet.height}
                        weight={pet.weight}
                        breed={pet.breed}
                        adopted={pet.adopted}
                        fostered={pet.fostered}
                        hypoalergenic={pet.hypoalergenic}
                        diet={pet.dietRestrictions}
                        bio={pet.bio}
                    />
                )}
            </ul>
        </>
    );
}
export default Toggle;
