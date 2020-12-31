import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { getImgById, getPetById } from '../Api/api';
import NavBar from './navbar';
import { MainContext } from '../Context/context';

function PetProfile(props) {
    const [thisPet, setThisPet] = useState({});
    const [imgPath, setImgPath] = useState();
    const {token, setToken } = useContext(MainContext)



    useEffect(() => {
        getPetById(token, props.id)
            .then(res => {
                setThisPet(res);
            })
            .catch(err => console.log(err));

        getImgById(token, props.id)
            .then(res => {
                if (res) setImgPath(res.FileName);
            })
    }, [])

    return (
        <>
            <div>
                {imgPath && <img src={`http://localhost:5000/${imgPath}`} className='profile-img' />}
                <div className='pet-info'>
                    <p>Name: {thisPet.name} </p>
                    <p>Type: {thisPet.type}</p>
                    <p>Breed: {thisPet.breed}</p>
                    <p>Color: {thisPet.color}</p>
                    <p>Height: {thisPet.height}</p>
                    <p>Weight: {thisPet.weight}</p>
                    <p>Bio: {thisPet.petBio}</p>
                    <p>Hypoalergenic: {thisPet.hypoalergenic}</p>
                    <p>Dietary Restrictions: {thisPet.dietRestrictions}</p>
                    <img src="" alt="" />
                    <Button type="button" variant="warning" >Save for Later</Button>
                </div>
            </div>
        </>
    )
}
export default PetProfile;