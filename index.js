// Not importtan sonra kullanılan isim isteğe bağlıdır ve onı kuallanarak işlem yapacağız
import slugify from "slugify"               // Paket Yüklemesiyle import
import TOPLA, { hello, cikar, text, usersArray } from "./my-module.js"          // Kendi yazmış olduğumuz dosyayı import ettik
// Tek bir şey import edilirken böyle iken 
// import Topla from "./my-module.js" 

// ilk denememiz
console.log('Hello React');

// slugify Paketinini Kullanımı
const title = slugify("some string lorem dolor");
console.log(title)

// Kendi Yazdığımız dosyanın kullanımı
console.log('Fonksiyon Sonucu: ', TOPLA(5, 6));
console.log('Fonksiyon Sonucu: ', cikar(15, +8));
hello('Engin Gultakin')
console.log(text);
console.log(usersArray);
