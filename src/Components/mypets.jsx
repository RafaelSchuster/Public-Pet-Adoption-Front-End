import React, { useContext, useEffect, useState } from 'react';
import { Card, CardDeck, Container, CardImg, CardImage, Image, Img, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import image1 from "../images/dog.jpg";
import image2 from "../images/cat.jpg";
import image3 from "../images/giraffe.jpg";
import { MainContext } from '../Context/context';
import PetCard from './petcard';

function MyPets() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const { pets, setPets, adopted, fostered, userPetStatus } = useContext(MainContext);

    return (
        <>
            <div>
                <h1 className="header-profile mb-5"> Your Pets</h1>
            </div>
            <Card className="status">
                {userPetStatus && <Card.Body className="head-status">{`You have adopted ${userPetStatus} Pets.`}</Card.Body>}
            </Card>
            <Container className="my-pets">
                <CardDeck className="deck">
                    {pets && pets.map(pet =>
                        <PetCard
                            key={Math.random()}
                            name={pet.name}
                            adopted={pet.adopted}
                            fostered={pet.fostered}
                            type={pet.type} />
                    )
                    }
                </CardDeck>
            </Container>
        </>
    )
}

export default MyPets;