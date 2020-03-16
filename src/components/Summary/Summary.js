// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// Summary.js
// 03/15/2020





import React from 'react';
import People from '../People/People';

const Summary = (props) => {
    const summary = props.summary;
    console.log(summary);

    let total = 0;
    let avgSalary = 0;
    for (let i = 0; i < summary.length; i++) {
        const ppl = summary[i];
        total = total + ppl.salary;
    }

    if(total === 0)
    {
        avgSalary = 0
    }
    else
    {
        avgSalary = (total / summary.length).toFixed(2);
    }

    return (
        <div>
            <h2>People Summary</h2>
            <p>People Added: {summary.length}</p>
            <p>Total Salary: ${total}</p>
            <p>Avg Salary: ${avgSalary}</p>
        </div>
    );
};

export default Summary;