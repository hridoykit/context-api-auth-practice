import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ContextAuth);

    if(loading){
        return <div>loading...</div>
    };

    if(user && user.uid){
        return children;
    }
    else{
        return <Navigate to='/signin' />;
    };
    
};

export default PrivateRoute;