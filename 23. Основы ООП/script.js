'use script';

// создаем основной прототип

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Helo");
//     }
// };

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier); // в () первым аргументом пишет тот объект, которому назначаем прототип, вторым аргументом
// // указываем сам прототип
// // Т.е установил прототип для Джона от солдата.

//john.__proto__ = soldier; // устаревший формат. Протитипом джона является солдат.
// Некоторые массвы могут забирать свойства из прототипа.

// Как правильно сделать
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Helo");
    }
};

const john = Object.create(soldier); 
// Создаем новый объект Джон и назначаем ему прототип солдата.
john.sayhello();
