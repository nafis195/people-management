// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// Friend.js
// 03/15/2020





import React, { useState } from 'react';

// const Friends = () => {

//     fetch('https://my.api.mockaroo.com/my_saved_schema.json?key=73b78ca0')
//     .then(response => response.json())
//     .then(data => console.log(data))

//     const [name, setName] = useState();
        

//     return (
//         <div>
//             <h1>{name.length}</h1>
//         </div>
//     );
// };

const Friends = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {showData(data)});

    function showData(data){
        console.log(data);
        let userHTML = ' ';

        data.forEach(user => {
            userHTML = userHTML + `<div>${user.name} </div>`

        });
        
    }
    return (
        <div>
            
        </div>
    );
};

export default Friends;