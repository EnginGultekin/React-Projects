import { useState, useEffect } from 'react'

function Counter() {

    // useState ve useEffect gibi şeylere hook denilmektedir ve
    // bu hooklar sadece return'nün üstünde kullanılr ver hiçbir koşula tabi tutulmamalılar
    const [number, setNumber] = useState(0)

   // Mount olma anında yapılacak işlemler '** () => {} **' şeklinde 
   // eğer takip edilmek istenen bir değişken varsa '** [...,...]** ' 
   // UnMount olma durumunda da yapılacaklar '** return () => **'  şeklinde söyliyebiliriz 
    useEffect(() => {
        console.log('Componant mount edildi');

        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000)

        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        console.log('Number State Güncellendi')
    }, [number])


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>

            <br /><br /><hr />
        </div>
    );
}

export default Counter



/*

 const [names, setNames] = useState(['Hakim',])


    useEffect(() => {
        console.log('Name State Güncellendi')
    }, [names])


    <h1>{names.map((name, index) => <div key={index}>{name}</div>)}</h1>
            <button onClick={() => setNames([...names, 'LaganHan'])}>Add Name</button>

*/