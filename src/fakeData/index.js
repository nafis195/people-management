// Bismillahir Rahmanir Rahim
// Nafis Chowdhury
// People Management Project
// index.js
// 03/15/2020





import users from "./users";

const fakeData = [...users];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;