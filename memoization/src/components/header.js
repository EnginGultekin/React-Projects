import React from 'react'

function Header({ increment }) {
    console.log('Header Changed')
    return (
        <div>
            Header-
            <br />
            <br />
            <button onClick={increment}>İncrease</button>
        </div>
    )
}

export default React.memo(Header)


/*

' React.memo ' kullanımı  sayesinde ekranda değişen bir şey olmadığı 
               sürece bu companent boşuna render edilmez ...

 Ancak bu durum  obje gönderildiğinde  sağlanmaz çünkü objeler hiçbir zaman aynı olamaz 
 bu nedenle aslında doğrudur değişen bir şey var ancak  biz bu  durumu ekranda görmüyoruz ....

Yukardaki Sorun ise ' useMemo ' kullanılarak çözülür 

*/


/*
1.Çalışma

import React from 'react'

function Header({ number, data }) {
    console.log('Header Changed')
    return (
        <div>
            Header-{number}
            <br />
            <br />
            {JSON.stringify(data)}
        </div>
    )
}

export default React.memo(Header)


*/