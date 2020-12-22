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
export default PetsList;