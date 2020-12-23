import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import image1 from "../images/dog.jpg";
import '../App.css';



function PetCard(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    console.log(props)
    return (
        <>
            <Card className="my-card">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.name}
                    </Card.Text>
                    <p>Adoption Status</p>
                    {(props.adopted || props.fostered) && <Button variant="warning">Return</Button>}
                    {!props.adopted && < Button variant="warning">Adopt</Button>}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                <Button type="button" variant="warning" onClick={() => setModalIsOpen1(true)}>See More</Button>
                <Modal className="my-modal"
                    isOpen={modalIsOpen1}
                    onRequestClose={() => setModalIsOpen1(false)}
                >
                    <h1 className="text-center">More Info About Your Pet</h1>
                    {props.type && <div>Type: {props.type}</div>}
                </Modal>
            </Card>
        </>
    )
}
export default PetCard;