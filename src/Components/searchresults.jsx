import React from 'react';
import { MainContext } from '../Context/context';
import { useContext } from 'react';
import PetItem from './petitem';

function SearchResults() {
    const { pets, setPets } = useContext(MainContext);
    return (
        <>
            <h1 className="header-profile mb-5"> Search Results</h1>
            <ul>
                {pets && pets.map(pet =>
                    <PetItem
                        key={Math.random()}
                        name={pet.name}
                        type={pet.type}
                    />
                )}
                
            </ul>
        </>
    )
}
export default SearchResults;