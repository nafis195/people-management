// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// Friend.js
// 03/15/2020





import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Friends.css';
import People from '../People/People';
import Summary from '../Summary/Summary';

const Friends = () => {
    const first10 = fakeData.slice(0, 20);
    const [users, setUser] = useState(first10);
    const [summary, setSummary] = useState([]);

    const handleAddUser = (people) => {
        const newSummary = [...summary, people];
        setSummary(newSummary);
    }

    return (
        <div className = "user-container">
            <div className="people-container">
                {
                    users.map(user => <People 
                        handleAddUser = {handleAddUser}
                        people = {user}>
                        </People>)
                }
            </div>
            <div className="summary-container">
                <Summary summary = {summary}></Summary>
            </div>
        </div>
    );
};

export default Friends;