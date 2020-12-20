import { Card, Nav, Button, Tabs, Tab } from 'react-bootstrap';
import React from 'react';

function PetProfile() {
    return (
        <div>
            <p>Name:</p>
            <p>Type:</p>
            <p>Height:</p>
            <p>Weight:</p>
            <p>Color:</p>
            <p>Bio:</p>
            <p>Hypoalergenic: Y/N</p>
            <p>Dietary Restrictions:</p>
            <p>Breed:</p>
            <img src="" alt="" />
            <Button type="button" variant="warning" >Save for Later</Button>
        </div>
    )
}
export default PetProfile;