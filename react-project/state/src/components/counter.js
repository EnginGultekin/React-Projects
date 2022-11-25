import { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const increase = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)

    return (
        <>
            <h2>Counter Component</h2>
            <h1>{counter}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </>
    );
}

export default Counter



/* !!!!!!!!!!!!  ************************ NOOOOOT ************************

******* jquery-example.html ******** ve bu dosyada bunu test etmiş olduk 

---------------------------- React ve JQuery ----------------------------

--------------------------------- Render --------------------------------

Şimdi, Yapmış olduğumuz sayaç uygulamasında sürekli artma yerine sadece 
değeri 1 e eşitleme işlemi yaptığımızda ekranın bir kere render edilmesini
bekleriz bu durum React'ta bu şekilde gerçekleşirken, JQuery de bu şekilde 
ilerlemiyor bir kere değiştiğinde değişen yer render edilir ve butona basmaya 
devam ettiğimizde aynı alanda herhangi bir değişiklik olmamasına rağmen 
aynı yer butona bastığımız  her defasında render edilir. 

DİKKAT: Burdan çıkarılacak sonuç,
React ta değişmeyen bir yer render edilmezken JQuery de bu durum tam tersidir 
her defasında değer değişmesede render işlemi gerçekleşir


*/

