"use strict"

// alert('Hello')

//const result = confirm('Вы здесь?');
//console.log(result);
// Ввод данных пользователя выводить в консоль боаузера.

//const answer = prompt('Вам есть 18?', '18');
//console.log(answer);
// Типы данных приходящих от пользователя всегда строка.
//console.log(typeof(answer));
// При помощи оператора typeof проверяется тип данных. При помощи дополнительных операторов можно менять тип данных получаемых от пользователя.

const answers = [];
answers[0] = prompt('Как Ваше имя', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

document.write(answers); // Данная  команда заменяет весь контент на сайте.