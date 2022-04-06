'use strict';

// Превращение в строку

console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';

// Превращение в число


console.log(typeof(Number('4')));

console.log(typeof(+'5'));
console.log(typeof(parseInt("15px", 10)));

// Превращение строки в число при помощи унарного +
let answ = +prompt("Hello", "");

// Превращение в булиновое значание
// 0, '', null, undefined, NaN; - вссегда будут false

let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

console.log(typeof(Boolean('4')));
console.log(typeof(!!"444"));