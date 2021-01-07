import React from 'react';
import { Button } from 'react-bootstrap';

function AdminItem(props) {
    return (
        <div
            className='user-item'>
            <span
                className='user-name'>
                {`First Name : 
                ${props.firstName}`}
            </span>
            <span
                className='user-lastname'>
                {`Last Name : 
                ${props.lastName}`}
            </span>
            <span
                className='user-email'>
                {`Email : 
                ${props.email}`}
            </span>
            <a href={`/admins/${props.id}`} className="btn btn-success user-link" >View Admin's Full Profile</a>
        </div>
    )
}

export default AdminItem;