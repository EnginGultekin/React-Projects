// ************* Odev-1 *************

import axios from 'axios';

const getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        user ? resolve(user) : reject('There is an Error on User')
    })
}

const getUserPost = (userId) => {
    return new Promise(async (resolve, reject) => {
        const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        post ? resolve(post) : reject('There is an Error on UserPost')
    })
}


export default async function getData(userId) {
    try {
        const user = await getUser(userId);
        const UserPost = await getUserPost(userId);

        console.log(user);
        console.log(UserPost);

    } catch (e) {
        console.log(e)
    }
}


//By The Way, Just This Enought
/* 
export default async function (number) {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
    
    return [user, post];
}
*/
