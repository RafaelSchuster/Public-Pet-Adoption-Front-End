import React from 'react';
import { MainContext } from '../Context/context';
import { useContext } from 'react';
import PetItem from './petitem';
import UserItem from './useritem';

function UsersList() {
    const { users, setUsers } = useContext(MainContext);
    return (
        <>
            <ul>
                {users && users.map(user =>
                    <UserItem
                        key={Math.random()}
                        name={user.name}
                    />
                )}
            </ul>
        </>
    )
}
export default UsersList;