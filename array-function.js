const usersName = ['Engin', 'Melek', 'Defne']

const user = [
    {
        name: 'Nehir',
        age: 18,
    },
    {
        name: 'Nehir',
        age: 35,
    },
    {
        name: 'Asya',
        age: 12,
    },
    {
        name: 'Derin',
        age: 24,
    },
]

/*
push
map
find
filter
some
every
includes
*/

// Push
usersName.push('Alp')
user.push({ name: 'Sıla', age: 16, })

console.log('UserName\n', usersName);
console.log('User\n', user);


// Map
usersName.map((item) => console.log(`- ${item} -`))
user.map((item) => console.log(item.name))


// find 
// ilk bulduğu elemanı döner
const result = user.find((item) => item.name === 'Nehir' && item.age > 16)
console.log(result)

// filter
// Bulduğu tüm elamanları  orjinal listeyi bozmadan yeni bir listede topladı
const filtered = user.filter((item) => item.name === 'Nehir' && item.age > 16)
console.log(filtered);


// some
const some = user.some((item) => item.age === 18)
console.log(some);

// every
const every = user.every((item) => item.age > 5)
console.log(every);


//includes
const meyveler = ['elma', 'armut', 'muz', 'ananas']

console.log('\n', meyveler.includes('elma'));
console.log(meyveler.includes('tıffağa'));