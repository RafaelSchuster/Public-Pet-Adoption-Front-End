import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './userlist';
import PetsList from './petslist';
import NavBar from './navbar';
import AdminsList from './adminsList';

function AdminDashboard() {
    const [key, setKey] = useState('home');

    return (
        <>
            <NavBar />
            <div>
                <h1 className="text-center pet-page">Admin Dashboard</h1>
                <Tabs
                    className="tab-pets"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="home" title="All Users" className="tab-item" >
                        <UsersList />
                    </Tab>
                    <Tab eventKey="profile" title="All Pets" className="tab-item pet-status">
                        <PetsList />
                    </Tab>
                    <Tab eventKey="admin" title="All Admin" className="tab-item" >
                        <AdminsList />
                    </Tab>
                </Tabs>
            </div>
        </>
    )

}
export default AdminDashboard;