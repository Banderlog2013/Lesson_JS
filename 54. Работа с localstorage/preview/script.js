'use strict';
// // Работа слокальной БД внутри браузера
// localStorage.setItem('number', 5); // передает данные в локалстородж
// //localStorage.getItem('number'); // получаем данные из локал сторадж
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number'); // удаляет данные
// localStorage.clear(); // очищает локальное хранилище

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isCheked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changet') {
    form.style.background = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isCheked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changet') {
        localStorage.removeItem('bg');
        form.style.background = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));