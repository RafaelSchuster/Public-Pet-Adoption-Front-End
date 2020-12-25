import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../App.css';
import { useEffect } from 'react';
import { getImgById } from '../Api/api'
import { useContext } from 'react';
import { MainContext } from '../Context/context';



function PetCard(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [imgPath, setImgPath] = useState();
    const { currentUser } = useContext(MainContext);

    useEffect(() => {
        getImgById(props.id)
            .then(res => {
                setImgPath(res.FileName);
            })
    }, [currentUser])

    return (
        <>
            <Card className="my-card">
                <Card.Img variant="top" src={`http://localhost:5000/${imgPath}`} alt='Pet Image' />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
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
                    {props.name && <div>Name: {props.name}</div>}
                    {props.type && <div>Type: {props.type}</div>}
                    {props.breed && <div>Breed: {props.breed}</div>}
                    {props.color && <div>Color: {props.color}</div>}
                    {props.height && <div>Height: {props.height}</div>}
                    {props.weight && <div>Weight: {props.weight}</div>}
                    {props.petStatus && <div>Pet Status: {props.petStatus}</div>}
                    {props.hypoalergenic && <div>Hypoalergenic: {props.hypoalergenic}</div>}
                    {props.diet && <div>Diet: {props.diet}</div>}
                    {props.bio && <div>Bio: {props.bio}</div>}
                </Modal>
            </Card>
        </>
    )
}
export default PetCard;