import React, { useContext } from 'react'
import { Accordion, Card, useAccordionToggle, Button, Form, FormControl, Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

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
    return (
        <Accordion defaultActiveKey="0" className="accordion">
            <Card className="accordion">
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Basic Search By Pet Type </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body >
                        <Form className="form-hp ">
                            <FormControl
                                as="textarea"
                                className="form-control search-basic  "
                                id=''
                                rows={2}
                                placeholder='Search Pets By Type...'>
                            </FormControl>
                            <Button className="w-100 basic-btn" variant='danger' >Basic Search By Type</Button>
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
                        <Form className="form-adv">
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="Adoption Status" />
                                </Col>
                                <Col>
                                    <Form.Control type='number' placeholder="Height" />
                                </Col>
                                <Col>
                                    <Form.Control type='number' placeholder="Weight" />
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="Type" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="Name" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Button className="w-100 mt-2" variant="danger" type="submit">
                                Advanced Search
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default Toggle;
