import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import React, { useContext } from 'react';
import { MainContext } from '../Context/context';

function PetStatus() {
    const { adopted, fostered } = useContext(MainContext);
    return (
        <div>
            <p>Adoption Status</p>
            {(adopted || fostered) && <Button variant="warning">Return</Button>}
            {!adopted && < Button variant="warning">Adopt</Button>}
            {(!adopted && !fostered) && <Button variant="warning">Foster</Button>}
        </div>
    )
}
export default PetStatus;