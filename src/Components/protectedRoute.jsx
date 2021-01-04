import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [permited, setPermited] = useState(localStorage.getItem('admin'));

    return (
        <Route
            {...rest}
            render={
               (props) => {
                    if (permited == 'true'){
                        return <Component {...props} />
                    } 
                    else {
                        return (
                            <Redirect to={{
                                pathname: '/adminlogin',
                                state: {
                                    from: props.location
                                }
                            }} />
                        )
                    }
                }
            }
        />
    );
};