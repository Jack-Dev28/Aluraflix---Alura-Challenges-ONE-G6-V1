// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header-link">Home</Link>
            <Link to="/nuevo-video" className="header-link">Nuevo video</Link>
        </div>
    );
};

export default Header;
