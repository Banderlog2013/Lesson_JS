'use strict';

// this - это то что окружает функцию и в каких услових она вызывается

// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5); 

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// function User(name, id) { // получаем имя и id пользователя
//     this.name = name; // присваиваем имя пользователя
//     this.id = id; // присваиваем id
//     this.human = true; // обозначаем, что это человек
//     this.hello = function() { // добавляем метод
//         console.log(`Hello ${this.name}`); // можно обратиться к свойствам внутри ф-ции
  
//     };
// }
// let ivan = new User('Ivan');

// function sayName(sername) {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'Вася'
// };

// sayName.call(user, 'Петя'); // устанавливаем контекст
// sayName.apply(user, '[Коля]');

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));


// 1) Обычная ф-я: this = window, но если use strict - undefined
// 2) Если мы используем метод внутри объекта, то контектс вызова будет всегда ссылать на этот объект
// Контекст у методов объектов - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     //console.log(this); 
//     // Когда конт вызова исп-ся в класс. ф-ции тога контекстом вызова яв-ся сам элемент на котором произошло событие
//     this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'; // в таком виде тоже работает
});

// Если в обработчике события исп-ть стрел. ф-ю, то контексст вызова теряется. 
// Если исп-ем класс. ф-ю, то работает

// У стрелочной ф-ции нет своего контекста вызова, она всегда берет контекст у своего родителя

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }

};

obj.sayNumber();

// Укороченный вариант стрел. ф-ции. Если ф-я помещается в одну строку, то исп-ся укороч вариант ф-ии
//const double = (a) => a * 2;

// Если ф-ция принимает только один аргумент () использовать не нужно
const double = a => a * 2;
console.log(double(4));