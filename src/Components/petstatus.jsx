import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import React from 'react';
function PetStatus() {
    return (
        <div>
            <p>Adoption Status</p>
            <Button variant="warning">Return</Button>
            <Button variant="warning">Adopt/Foster</Button>
            <Button variant="warning">Adopt if Fostering</Button>
        </div>
    )
}
export default PetStatus;