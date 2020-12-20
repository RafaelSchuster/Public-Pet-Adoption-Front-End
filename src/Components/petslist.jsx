import React from 'react';
import { MainContext } from '../Context/context';
import { useContext } from 'react';
import PetItem from './petitem';

function PetsList() {
    const { allPets } = useContext(MainContext);
    return (
        <ul className="pet-list-admin">
            {allPets && allPets.map(pet =>
                <PetItem
                    key={Math.random()}
                    name={pet.name}
                    type={pet.type}
                />
            )}
        </ul>
    )
}
export default PetsList;