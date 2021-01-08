import React from 'react';
import { MainContext } from '../Context/context';
import { useContext } from 'react';
import PetItem from './petitem';
import UserItem from './useritem';
import AdminItem from './adminItem';

function AdminsList() {
    const { admins } = useContext(MainContext);
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
                {admins && admins.map(admin =>
                    <AdminItem
                        key={Math.random()}
                        firstName={admin.firstName}
                        lastName={admin.lastName}
                        email={admin.email}
                        id={admin.id}
                    />
                )}
            </ul>
        </>
    )
}
export default AdminsList;