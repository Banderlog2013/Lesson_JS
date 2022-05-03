'use strict';

// Filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name) { // перебираем массив
//     return name.length < 5; // возвращает имена длиной не более 5 символов
// });

// Map

// const answers = ['IvAn', 'AnnA', 'Hello'];
// // метод мар возвращает новый изменный массив
// // const result = answers.map(item => { // перебираем массив
// //     return item.toLowerCase(); // возвращаем массив в нижнем регистре
// // });

// const result = answers.map(item => item.toLocaleLowerCase());// тоже самое, что и выше
// console.log(result);

//let answers = ['IvAn', 'AnnA', 'Hello'];
// метод мар возвращает новый изменный массив
// const result = answers.map(item => { // перебираем массив
//     return item.toLowerCase(); // возвращаем массив в нижнем регистре
// });

// answers = answers.map(item => item.toLocaleLowerCase());// перезаписываем массив с новыми данными
// console.log(answers);

// Every/some - возращают булиновое значение
//const some = [4, 'sdfs', 'afdf'];
// console.log(some.some(item => typeof(item) === 'number')); // перебираем массив и спрашиваем если число
// some возвращает правду если хотябы один элемент соотвествует запросу
// console.log(some.every(item => typeof(item) === 'number'));
// every возращает правду если все элементы соотвествуют запросу

// Reduce - приводит массив к единственному значению

// const arr = [4, 5, 1, 3, 3, 6];
// const res = arr.reduce((sum, current) => sum + current);
// // складывае числа в последовательности, прибавет к предидущей сумме следующее число
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//.filter(item => item[1] === 'persone');
// console.log(newArr);


// задача 1 

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);   
}

showGoodFilms();