'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; // получаем ширину без паддингов и марджинов
// const heigth = box.clientHeight; // получаем высоту

// const width = box.offsetWidth; // получаем ширину c паддингов и марджинов
// const heigth = box.offsetHeight; // получаем высоту

// const width = box.scrollWidth; // полная высота скрола
// const heigth = box.scrollHeight; // ширина скрола

// console.log(width, heigth);

btn.addEventListener('click', () => {
    //box.style.heigth = box.scrollHeight + 'px'; // при нажатии раскрывает скролл полностью
    //console.log(box.scrollTop);
});

//console.log(box.getBoundingClientRect()); // получаем координаты элемента с 4-х сторон
console.log(box.getBoundingClientRect().top); // получение координат с верху

const style = window.getComputedStyle(box);
console.log(style.display);

