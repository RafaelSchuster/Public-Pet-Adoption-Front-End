import React from 'react';
import '../App.css';

function PetItem(props) {
    const admin = localStorage.getItem('admin')
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
            <span
                className='pet-breed'>
                {`Breed : ${props.breed}`}
            </span>
           {admin === 'true' && <a href={`/pet_profile/${props.id}`} className="btn btn-success">Admin Edit Pet Profile</a>}
            <a href={`/pet_page/${props.id}`} className="btn btn-success profile-link">View Pet's Profile</a>
        </div>
    )
}

export default PetItem;