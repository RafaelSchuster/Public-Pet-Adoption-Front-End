import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRouteProfile = ({ component: Component, ...rest }) => {
    const [permited, setPermited] = useState(localStorage.getItem('token'));

    return (
        <Route
            {...rest}
            render={
               (props) => {
                    if (permited !== 'noToken'){
                        return <Component {...props} />
                    } 
                    else {
                        return (
                            <Redirect to={{
                                pathname: '/logged_out',
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