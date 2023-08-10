import slugify from "slugify"      
import TOPLA, { hello, cikar, text, usersArray } from "./my-module.js"

console.log('Hello React');

// slugify Paketinini Kullanımı
const title = slugify("some string lorem dolor");
console.log(title)

// Kendi Yazdığımız dosyanın kullanımı
console.log('Fonksiyon Sonucu: ', TOPLA(5, 6));
console.log('Fonksiyon Sonucu: ', cikar(15, +8));
hello('Engin Gültekin')
console.log(text);
console.log(usersArray);
