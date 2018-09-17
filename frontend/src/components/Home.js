import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <h1> My contact application</h1>
            <Link to="/contacts">
            <button className="buttonlist"> List Contacts</button>
            </Link>
            <Link to="/addContact">
            <button className="buttonAdd" > Add Contact</button>
            </Link>
        </div>
    );
};

export default Home;