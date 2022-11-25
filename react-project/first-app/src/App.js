import './App.css';
import User from './components/user'

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Engin" },
  { id: 3, name: "Asya" },
  { id: 4, name: "Nil" },
  { id: 5, name: "Tayfun" },
]

function App() { 
  return (
    <>
      <User
        //name='Mehmet'
        surname='Seven'
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={
          {
            title: 'Ankara/Gölbaşı',
            zip: 521456
          }
        }
      />
    </>
  );
}

export default App;



{/* ---------- 1 ----------

import React from 'react'   // gerektiğinde açarız
import Header from './components/header'

<>  // <div>  --  <React.Fragment> 
<p className="xyz" >Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı<br />
  oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri
  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.<br />
  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı </p>

<header>Hellooo React</header>
 // fonkson isimlerini büyük harfle başlatıyoruz nedeni
 // de yukardaki gibi etiketlerle karışmasını engellemek 

<Header />
<br />
<label htmlFor='myinput'>
  Name: 
  <input id="myinput" />
</label>

</>  // </div>  --  </React.Fragment>  div veya React.Fragment yerine içi boş kullanabiliriz burası için 

*/}


{/* ---------- 2 ----------

const name = 'EngLeng'
const surname = 'Yeregelmez'
const isLoggedIn = true;

<>
   <h1> {isLoggedIn
     ? `Benim Adım ${name} Soyadım ${surname}`
     : 'Giriş Yapmadınız'}</h1>
</>

*/}