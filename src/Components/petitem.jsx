import React from 'react';
import '../App.css';

function PetItem(props) {
    return (
        <div
            className='pet-item'>
            <span
                className='pet-name'>
                {`Name : 
                ${props.name}`}
            </span>
            <span
                className='pet-type'>
                {`Type : ${props.type}`}
            </span>
            <a href={`/${props.name}`} className="btn btn-success profile-link">View Pet's Full Profile</a>
            <a href={`/edit`} className="btn btn-warning edit-profile-link">Edit Pet's Profile</a>
        </div>
    )
}

export default PetItem;