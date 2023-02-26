import React, { useContext } from 'react';
import { ContextAuth } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(ContextAuth);
    return (
        <div>
            <h2> Home: Place for ghummm! </h2>
            {user?.email && <p>welcome, {user.email}</p>}
        </div>
    );
};

export default Home;