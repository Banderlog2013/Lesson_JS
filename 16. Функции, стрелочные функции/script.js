"use strict";


// FUNCTION DECLARATION
function showFirstMessage () { //function - функция, указываем имя функции, в {действия фунции}, по имени фунции() обращаемся к ней.
    console.log("Hello World");
}

showFirstMessage(); // обращение к функции

let num = 20;

function showFirstMessage (text) { 
    console.log(text);
    console.log(num);
}
showFirstMessage("Hello World");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// // возвращает сумму a+b

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));
// Такую функцию можно переиспользовать.

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Во вн. переменной можно пометсить результат работы функции.

// FUNCTION EXPRESSION - Ф-ЦИЯ помещается во вн. переменной.

const logger = function() {
    console.log("Hello");
};
logger();

// const calc = (a, b) => a + b;

const calc = (a, b) => {
    console.log('1');
    return a + b;
};


