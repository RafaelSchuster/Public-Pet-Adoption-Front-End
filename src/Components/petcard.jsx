import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../App.css';
import { useEffect } from 'react';
import { getImgById } from '../Api/api'
import { useContext } from 'react';
import { MainContext } from '../Context/context';

function PetCard(props) {
    const [thisPet, setThisPet] = useState({});
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [imgPath, setImgPath] = useState();
    const { currentUser, token,refresher, setRefresher, email} = useContext(MainContext);
    const [adopted, setAdopted] = useState(false);
    const [fostered, setFostered] = useState(false);
    const[thisPetStatus, setThisPetStatus] = useState(props.petStatus);
    const [footText, setFootText] = useState()

    useEffect(() => {
        getImgById(token, props.id)
            .then(res => {
                if (res) setImgPath(res);
            })
        if (props.petStatus == 'adopted') setAdopted(true)
        else if (props.petStatus == 'fostered') setFostered(true);
    }, [currentUser,refresher])

    const onChangingStatus = async (newStatus) => {
        const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/pet_status/${props.id}/update/${newStatus}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ post: newStatus, userEmail: email }),
        })
        const body = await response.json();
        if (newStatus == 'adopted'){
            setAdopted(true)
            setThisPetStatus('adopted')
            setFootText('You adopted me!')
        } 
        else if (newStatus == 'fostered'){
            setFostered(true)
            setThisPetStatus('fostered')
            setFootText('Please adopt me!')
        } 
        else if (newStatus == 'available') {
            setFostered(false);
            setAdopted(false);
            setRefresher(true);
            setThisPetStatus('available')
            setFootText('I need a home!')
        }
    }

    return (
        <>
            <Card className="my-card">
                <Card.Img variant="top" src={`${imgPath}`} alt='Pet Image' className='img-card' />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <p>Pet Status : {thisPetStatus} </p>
                    {(adopted || fostered) && <Button variant="warning" onClick={() => onChangingStatus('available')}>Return</Button>}
                    {!adopted && < Button variant="warning" onClick={() => onChangingStatus('adopted')}>Adopt</Button>}
                    {(!adopted && !fostered) && <Button variant="warning" onClick={() => onChangingStatus('fostered')}>Foster</Button>}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{footText}</small>
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
                    {props.height && <div>Height in Cm: {props.height}</div>}
                    {props.weight && <div>Weight in Kg: {props.weight}</div>}
                    {props.hypoalergenic && <div>Hypoalergenic: {props.hypoalergenic}</div>}
                    {props.diet && <div>Diet: {props.diet}</div>}
                    {props.bio && <div>Bio: {props.bio}</div>}
                </Modal>
            </Card>
        </>
    )
}
export default PetCard;