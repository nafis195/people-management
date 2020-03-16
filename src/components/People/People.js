// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// People.js
// 03/15/2020





import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './People.css';

const People = (props) => {
    //console.log(props);

    const { img, fullname, email, phone, salary } = props.people;
    return (
        <div className="people">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="people-div">
                <h3 className="people-name">{fullname}</h3>
                <h5>Email: {email}</h5>
                <h5>Phone: {phone}</h5>
                <h5>Salary: ${salary}</h5>
                <button 
                    className = "add-btn" onClick = {() => props.handleAddUser(props.people)}> 
                    <FontAwesomeIcon icon={faUser} /> Add Me
                </button>
            </div>
        </div>
    );
};

export default People;