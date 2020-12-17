import React, { useState } from 'react'
import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetProfile from './petprofile';
import PetStatus from './petstatus';

function AdminDashboard() {
    const [key, setKey] = useState('home');

    return (
        <div>
            <h1 className="text-center pet-page">Admin Dashboard</h1>
            <Tabs
                className="tab-pets"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="All Users" className="tab-item" >
                </Tab>
                <Tab eventKey="profile" title="All Pets" className="tab-item pet-status">
                </Tab>
            </Tabs>
        </div>
    )

}
export default AdminDashboard;