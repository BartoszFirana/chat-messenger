import React from 'react';

import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <NavLink to="/chat/John-Doe">John Doe</NavLink>
            <NavLink to="/chat/John-Smith">John Smith</NavLink>
            <p>Home</p>
        </>
    );
}

export default Home;