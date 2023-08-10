// setTimeout(function, time)
// ------> setTimeout(() => { console.log('Geldiiiii') }, 2000)

// setInterval(function, time)
// ------> setInterval(() => { console.log("HEr Saniyede Çalışacam HAdi Bakalım"); }, 1000)

/*
const sayHello = () => console.log('Merhaba')
sayHello()

const sayMessage = (message) => console.log(message)
sayMessage('Messag is Okey')
*/

// İşlemleri Sıralı yapmanın yollarından biri

// 1.Fetch İşlemi 

import fetch from "node-fetch";    /* Bu importları kullanmamaıza gerek kalmadı bizim ama görmek için yazdık*/
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(`-------------*** Users ***-------------\n${users}\n`);

//         // 2.Fetch İşlemi
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((post1) => {
//                 console.log(`-------------*** Posts-1 ***-------------\n`, post1);

//                 // 3.Fetch İşlemi
//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((post2) => {
//                         console.log(`-------------*** Posts-2 ***-------------\n`, post2);
//                     })
//             })
//     })


// Yukarıdaki Karmaşıklığın Daha basiti 'async - await '
// ******* 1. *******

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(`*** users ***\n${users}\n`)
//     console.log(`*** Post1 ***\n`, post1)
//     console.log(`*** Post2 ***\n`, post2)
// }
// getData()


// ******* 2. *******
// Anonim Fonksyon içinde de bu şekilde yazabiliri (...)()
/*
(async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log(`*** users ***\n${users}\n`)
    console.log(`*** Post1 ***\n`, post1)
    console.log(`*** Post2 ***\n`, post2)
})() 
*/


// axios işlemleri ......
/*
(async () => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log(`*** users ***\n`, users)
    console.log(`*** Post1 ***\n`, post1)
    console.log(`*** Post2 ***\n`, post2)
})() 
*/


// Promises ......

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
        reject('1. sorunuzum')
    })
}

const getPosts = (postId) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId)
        resolve(data)
        reject('2. Sorunuzum')
    })
}


/*
(async () => {

    // await getUsers()
    //     .then((data) => console.log(data))   resolve'den dönen değeri alır 
    //     .catch((e) => console.log(e));       reject'ten dönen değeri alır  

    // await getPosts(1)
    //     .then((data) => console.log(data))
    //     .catch((e) => console.log(e));
    try {
        const users = await getUsers();       // resolve dönünce çalışır burası
        const post = await getPosts(1);

        console.log(users);
        console.log(post);

    } catch (e) {
        console.log(e)   // Yukardan reject dönerse çalışır
    }
})()
*/


Promise.all([getUsers(), getPosts(1)])
.then(console.log)
.catch(console.log)

