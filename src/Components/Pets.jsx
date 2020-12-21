import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetProfile from './petprofile';
import PetStatus from './petstatus';

function Pets() {
    const [key, setKey] = useState('home');

    return (
        <div>
            <h1 className="text-center pet-page">Pet Page</h1>
            <Tabs
                className="tab-pets"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Pet Profile" className="tab-item" >
                    <PetProfile />
                </Tab>
                <Tab eventKey="profile" title="Pet Status" className="tab-item pet-status">
                    <PetStatus />
                </Tab>
                <Tab eventKey="contact" title="Saved Pets" className="tab-item">
                </Tab>
            </Tabs>
        </div>
    )

}
export default Pets;