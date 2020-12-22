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
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        id={user.id}
                    />
                )}
            </ul>
        </>
    )
}
export default UsersList;