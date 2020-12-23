import React, { useContext, useEffect, useState } from 'react';
import { Card, CardDeck, Container, CardImg, CardImage, Image, Img, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { MainContext } from '../Context/context';
import PetCard from './petcard';
import { getPetById } from '../Api/api'

const arrPets = []

function MyPets() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [petsToDisplay, setPetsToDisplay] = useState([])
    const { pets, setPets, adopted, fostered, userPetStatus, userPets, currentUser } = useContext(MainContext);

    useEffect(() => {
        const arrPets = []
        if (userPets && userPets.length > 0) {
            userPets.map(id => {
                getPetById(id)
                    .then(res => {
                        arrPets.push(res)
                        setPetsToDisplay([...arrPets])
                    })
            })
        }
    }, [userPets])

    return (
        <>
            <div>
                <h1 className="header-profile mb-5"> Your Pets</h1>
            </div>
            <Card className="status">
                {userPets && <Card.Body className="head-status">{`You have adopted ${userPets.length} Pets.`}</Card.Body>}
            </Card>
            <Container className="my-pets">
                <CardDeck className="deck">
                    {petsToDisplay && petsToDisplay.map(pet =>
                        <PetCard
                            key={Math.random()}
                            id={pet.id}
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