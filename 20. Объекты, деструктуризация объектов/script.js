'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest(); // вызов созданного метода.

// Деструктуризация.
const {border, bg} = options.colors; // вытаскивание части свойств объекта
console.log(border);
// console.log(Object.keys().length); // создает массив с ключами объекта .length - считает количество св-в объекта

// объект со свойствами.
// console.log(options.name);
// // обращение к свойству объекта
// delete options.name;
// // удаление свойства объекта
// console.log(options);
// let counter = 0; // счетчик для подсчета количества свойств внутри объекта
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++; 
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++; // счетчик
//     }
    
// }
// Перебор свойств внутри объекта