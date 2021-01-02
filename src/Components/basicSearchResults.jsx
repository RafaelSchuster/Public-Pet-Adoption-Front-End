import React, { useEffect, useState } from 'react';
import { MainContext } from '../Context/context';
import { useContext } from 'react';
import PetItem from './petitem';
import { searchPetByType } from '../Api/api';
import NavBar from './navbar';

function BasicSearchResults(props) {
    const [basicSearchResults, setBasicSearchResults] = useState();
    const [typeSearch, setTypeSearch] = useState(props.match.params.type);

    const basicSearching = (e) => {
        searchPetByType(typeSearch)
            .then(res => {
                setBasicSearchResults(res);
            })
    }

    useEffect(() => {
        basicSearching(typeSearch);
    }, [])

    return (
        <>
            <NavBar />
            {basicSearchResults && !basicSearchResults.length && <h1 className="header-admin mb-5">No Matches.Sorry!</h1>}
            {basicSearchResults && basicSearchResults.length && <h1 className="header-admin mb-5">Basic Search Results!</h1>}
            <ul className="pet-list-admin basic-search">
                {basicSearchResults && basicSearchResults.map(pet =>
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
        </>
    )
}
export default BasicSearchResults;