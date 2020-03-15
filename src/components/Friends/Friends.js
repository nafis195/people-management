// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// Friend.js
// 03/15/2020





import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Friends.css';
import People from '../People/People';

const Friends = () => {
    const first10 = fakeData.slice(0, 20);
    const [users, setUser] = useState(first10);
    return (
        <div className = "user-container">
            <div className="people-container">
                {
                    users.map(user => <People people = {user}></People>)
                }
            </div>
            <div className="summary-container">
                <h3>This is summary</h3>
            </div>
        </div>
    );
};

export default Friends;