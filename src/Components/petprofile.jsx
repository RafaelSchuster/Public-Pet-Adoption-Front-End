import { Card, Nav, Button, Tabs, Tab, Alert } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { getImgById, getPetById } from '../Api/api';
import NavBar from './navbar';
import { MainContext } from '../Context/context';
import PetStatus from './petstatus';

function PetProfile(props) {
    const [admin] = useState(localStorage.getItem('admin'));
    const [error, setError] = useState();
    const [thisPet, setThisPet] = useState({});
    const [imgPath, setImgPath] = useState();
    const { token, setToken, userId, savedPets, setSavedPets, petsSaved, setPetsSaved, saved, setSaved } = useContext(MainContext);

    useEffect(() => {
        getPetById(token, props.id)
            .then(res => {
                setThisPet(res);
            })
            .catch(err => console.log(err));

        getImgById(token, props.id)
            .then(res => {
                if (res) setImgPath(res);
            })
    }, [petsSaved, savedPets, saved])

    const onSavePet = async () => {
        if (admin == 'true' || token == 'noToken') {
            setError('You must login as a User to Save Pets');
            return;
        }
        try {
            const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/${userId}/pet/${props.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ post: 'Saving Pet' }),
            })
            const body = await response.json();
            setSavedPets(body);
            setSaved(true);
        } catch (error) {
            console.log(error);
        }
    }

    const onUnSavePet = async () => {
        try {
            const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/save_pet/user/${userId}/pet/${props.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ post: 'Unsaving Pet' }),
            })
            const body = await response.json();
            setSaved(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {error && <Alert variant="danger" className='profile-error'>{error}</Alert>}
            <div>
                {imgPath && <img src={`${imgPath}`} className='profile-img' />}
                <div className='pet-info'>
                    <p>Name: {thisPet.name} </p>
                    <p>Type: {thisPet.type}</p>
                    <p>Breed: {thisPet.breed}</p>
                    <p>Color: {thisPet.color}</p>
                    <p>Height in Cm: {thisPet.height}</p>
                    <p>Weight in Kg: {thisPet.weight}</p>
                    <p>Bio: {thisPet.petBio}</p>
                    <p>Hypoallergenic: {thisPet.hypoalergenic}</p>
                    <p>Dietary Restrictions: {thisPet.dietRestrictions}</p>
                    <img src="" alt="" />
                    {!error && !saved && <Button type="button" variant="warning" onClick={() => { onSavePet() }}>Save for Later</Button>}
                    {!error && saved && <Button type="button" variant="warning" onClick={() => { onUnSavePet() }}>Click here to remove from Save List</Button>}
                    <PetStatus id={props.id}/>
                </div>
            </div>
        </>
    )
}
export default PetProfile;