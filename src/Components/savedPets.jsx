import React, { useEffect, useState, useContext } from 'react';
import { MainContext } from '../Context/context';
import PetItem from './petitem';
import { getPetById } from '../Api/api';

function SavedPetsList() {
    const { savedPets, token,petsSaved, setPetsSaved,saved, setSaved } = useContext(MainContext);
    

    useEffect(() => {
        let petsSavedArr = [];
        if (savedPets) {
            savedPets.map(petId => {
                getPetById(token, petId)
                    .then(response => {
                        if (!petsSavedArr.includes(response)) petsSavedArr.push(response);
                    })
            })
            setPetsSaved(petsSavedArr);
        };
    }, [savedPets,saved])

    return (
        <ul className="pet-list-admin">
            {petsSaved && petsSaved.map(pet =>
                <PetItem
                    key={Math.random()}
                    id={pet.id}
                    name={pet.name}
                    type={pet.type}
                    color={pet.color}
                    height={pet.height}
                    weight={pet.weight}
                    breed={pet.breed}
                    adopted={pet.adopted}
                    fostered={pet.fostered}
                    hypoalergenic={pet.hypoalergenic}
                    diet={pet.dietRestrictions}
                    bio={pet.bio}
                />
            )}
        </ul>
    )
}
export default SavedPetsList;
