// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// Header.js
// 03/14/2020





import React from 'react';
import logo from '../../images/logo.PNG'
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            <h3 className = "firstH3">People</h3>
            <img src={logo } alt=""/>
            <h3 className = "secondH3">Management</h3>
            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/connection">Connection</a>
            </nav>
        </div>
    );
};

export default Header;