import React from 'react'
import style from './style.module.css'

/* 
Şimdi sadecev 'style.css' şeklinde isimlendirirsek ve içinde aynı className 
bulundurduğumuzda ve bu dosya sayısı birden fazla olursa hangisi hangisi 
anlaşılamaz ve stil hataları meydana gelebilir. Bunun çözümü

'style.module.css' css dosyalarımızı bu şekilde tanımlamaktır bu sefer className 
aynı olsada farklı ID'ler tanımlandığı için stillendirmede herhangi bir 
karmaşıklık meydana gelmiyecektir . 

Kullanımı : className={style.title}

*/

function A() {
  return (
    <div className={style.title}>A</div>
  )
}

export default A