'use strict';

// Регулярное выражение при помощи конструктора
// new RegExp('pattern', 'flags'); // старый синтаксис

// /pattern/f // современный синтаксис

// const ans = prompt('Введите ваше имя');
// const reg = /n/i; // указываем патерн и флаг
// console.log(ans.search(reg));// метод search
// console.log(ans.match(reg)); // match
// флаги можно комбинировать
// флаги
// i - поиск внезависимости от регистра
// g - поиск по нескольким вхождениям
// m - вклчает многострочный режим

// метод replace

const pass = prompt('Password');
console.log(pass.replace(/./g, "*")); // заменить на звездочикЫ
console.log('12-34-56'.perlace(/-/g, ':'));

// Меетод test

const ans = prompt('Введите ваше имя');
const reg = /n/i; // указываем патерн и флаг
console.log(ans.test(ans));// метод search
// проверяет на свопадение и возвращает булиновое значение

// Классы

// \d - ищет цифры
// \w - ищет все буквы
// \s - ищет все пробелы

const str = 'My name R2D2';
console.log(str.match(/\w\d\w\d/i));

// Обратые классы
// \D - не цифры
// \W - не классы


