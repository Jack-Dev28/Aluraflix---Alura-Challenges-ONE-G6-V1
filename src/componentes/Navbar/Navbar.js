import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleNewVideoClick = () => {
        navigate('/new-video');
    };

    return (
        <header className="header">
            <Link to="/" className="logo"><img src="/images/LogoMain.png" alt="LogoMain" /></Link>
            <nav className="navbar">
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleNewVideoClick}>Register New Video</button>
            </nav>
        </header>
    );
};

export default Navbar;