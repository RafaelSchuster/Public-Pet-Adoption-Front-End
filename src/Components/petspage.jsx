import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetProfile from './petprofile';
import PetStatus from './petstatus';
import NavBar from './navbar';
import SavedPetsList from './savedPets';

function PetsPage(props) {
    const [id, setId] = useState(props.match.params.id);
    const [key, setKey] = useState('home');

    return (
        <>
        <NavBar/>
        <div>
            <h1 className="text-center pet-page">Pet Page</h1>
            <Tabs
                className="tab-pets"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Pet Profile" className="tab-item" >
                    <PetProfile id={id} />
                </Tab>
                <Tab eventKey="saved" title="Saved Pets" className="tab-item">
                    <SavedPetsList/>
                </Tab>
            </Tabs>
        </div>
        </>
    )

}
export default PetsPage;