'use strict';
// Получение элемента при помощи id
const box = document.getElementById('box');
console.log(box);

// Получение элементов по тегу
// Происходит получение псевдомассива
// const btns = document.getElementsByTagName('button');
//const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');
console.log(btns[1]);
// Для получение отдельного элемента псевдомассива обращаеся по индексу элемента

// Получение классов со страницы. Тоже получаем псевдомассив
const circles = document.getElementsByClassName('circle');
console.log(circles);

// Современные методы получения элементов со страницы.

const hearts = document.querySelectorAll('.heart'); // () - можно поместить любой css селектор
// Все равно получаем псевдомассив, но имеет метод forEach
//console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');// Позволяет получить только один элемент со страницы b самый первый элемент
console.log(oneHeart);