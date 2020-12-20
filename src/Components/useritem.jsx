import React from 'react';
import { Button } from 'react-bootstrap';

function UserItem(props) {
    return (
        <div
            className='user-item'>
            <span
                className='user-name'>
                {`Name : 
                ${props.name}`}
            </span>
            <a href={`/${props.name}`} className="btn btn-success user-link">View User's Full Profile</a>
        </div>
    )
}

export default UserItem;