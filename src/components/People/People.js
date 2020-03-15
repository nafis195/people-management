// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// People.js
// 03/15/2020





import React from 'react';
import './People.css';

const People = (props) => {
    console.log(props.people.fullname);
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
            </div>
        </div>
    );
};

export default People;