import { Button, Alert } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../Context/context';
import { getPetById } from '../Api/api';

function PetStatus(props) {
    const [admin] = useState(localStorage.getItem('admin'));
    const [error, setError] = useState();
    const [thisPet, setThisPet] = useState({});
    const { token, email, userPets, setRefresher } = useContext(MainContext);
    const [adopted, setAdopted] = useState('');
    const [fostered, setFostered] = useState('');
    const [owner, setOwner] = useState(false)

    useEffect(() => {
        getPetById(token, props.id)
            .then(res => {
                setThisPet(res);
                if (res.petStatus == 'adopted') setAdopted(true);
                else if (res.petStatus == 'fostered') setFostered(true);
            })
            .catch(err => console.log(err));
        if (userPets && userPets.includes(props.id)) setOwner(true);
    }, [adopted, fostered, userPets])

    const onChangingStatus = async (newStatus) => {
        if (admin == 'true' || token == 'noToken') {
            setError('You must login as a User to Adopt/Foster Pets');
            return;
        }
        const response = await fetch(`http://localhost:5000/pet_status/${props.id}/update/${newStatus}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ post: newStatus, userEmail: email }),
        })
        const body = await response.json();
        if (newStatus == 'adopted') {
            setAdopted(true)
            setOwner(true)
        }
        else if (newStatus == 'fostered') {
            setFostered(true)
            setOwner(true)
        }
        else if (newStatus == 'available') {
            setFostered(false);
            setAdopted(false);
            setOwner(false)
            setRefresher(true);
        }
    }

    return (
        <div>
            {error && <Alert variant="danger" className='profile-error'>{error}</Alert>}
            {thisPet.petStatus ? <p> Pet Status : {thisPet.petStatus}</p> :
                <p> Pet Status : Available {thisPet.petStatus}</p>}
            {owner && (adopted || fostered) && <Button variant="warning" onClick={() => onChangingStatus('available')}>Return</Button>}
            {!error && !adopted && < Button variant="warning" onClick={() => onChangingStatus('adopted')}>Adopt</Button>}
            {!error && (!adopted && !fostered) && <Button variant="warning" onClick={() => onChangingStatus('fostered')}>Foster</Button>}
        </div>
    )
}
export default PetStatus;