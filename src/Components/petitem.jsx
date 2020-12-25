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
            <span
                className='pet-breed'>
                {`Breed : ${props.breed}`}
            </span>

            <a href={`/pet_profile/${props.id}`} className="btn btn-success profile-link">Edit Profile</a>
            <a href={`/pet_page/${props.id}`} className="btn btn-success">View Profile</a>
        </div>
    )
}

export default PetItem;