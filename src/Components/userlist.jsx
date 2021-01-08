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
                <a
                    href="/admin"
                    className="btn btn-warning w-100 admin-form-link"
                    variant="warning"
                    type="submit"
                >
                    Click Here To Pet's Upload Form
            </a>
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