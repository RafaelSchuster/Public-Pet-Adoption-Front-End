import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetProfile from './petprofile';
import PetStatus from './petstatus';
import NavBar from './navbar';

function Pets(props) {
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
                <Tab eventKey="profile" title="Pet Status" className="tab-item pet-status">
                    <PetStatus id={id} />
                </Tab>
                <Tab eventKey="contact" title="Saved Pets" className="tab-item">
                </Tab>
            </Tabs>
        </div>
        </>
    )

}
export default Pets;