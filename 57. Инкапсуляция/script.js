'use strict';
// функция конструктор
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27); // переменная с потомком и аргументами
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30; // меняем значения 
// ivan.name = 'Alex'; // меняем значения

// ivan.say(); // вызываем метод say
// // Происходит изменение свойств объекта, что является не правильным поведением

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this.userAge}`);
//     };
// }

// const ivan = new User('Ivan', 27); // переменная с потомком и аргументами
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.userAge = 30; // меняем значения 
// ivan.name = 'Alex'; // меняем значения

// ivan.say(); // вызываем метод say
// // Изменения свойств объекта не произошло, т.е к переменной let нет доступа из вне она яв-ся изолированной


//Инкапсуляция
// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this.userAge}`);
//     };

//     this.getAge = function() {
//         return userAge; // возвращает возраст
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0, age < 110) { // проверяем условие
//             userAge = age; // записываем значение в переменную.
//         } else {
//             console.log('недопустимое значение');
//         }
//     };
// }

// const ivan = new User('Ivan', 27); // переменная с потомком и аргументами
// console.log(ivan.name);
// console.log(ivan.getAge()); // получаем значание

// ivan.setAge(30); // устанавливаем значение
// ivan.setAge(300);
// console.log(ivan.getAge()); 


// ivan.say(); // вызываем метод say

// Инкапсуляция на классах

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя ${this.name}, возраст ${this._age}`);
    }

    get age() {
        return this._age; // возвращает возраст
    }

    set age(age) {
        if (typeof age === 'number' && age > 0, age < 110) { // проверяем условие
            this._age = age; // записываем значение в переменную.
        } else {
            console.log('недопустимое значение');
        }
    }
}

const ivan = new User('Ivan', 27); // переменная с потомком и аргументами
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say(); // вызываем метод say
