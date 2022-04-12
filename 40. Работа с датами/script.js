'use strict';

// const now = new Date(0);

// console.log(now);

// все даты конвертируются в милисекунды
// отсчет идет с 1970.01.01
// для того чтобы получить более раниий год используй -значение мс

const now = new Date(0);

console.log(now.getFullYear()); // получаем год, год приходит 4-х значным
console.log(now.getMonth()); // месяц
console.log(now.getDate()); // дни итд
console.log(now.getDay()); // номер дня недели, отсчет идет с воскресения

// все данные значения возращаются в соотвествии с местным часовым поясом
console.log(now.getUTCHours()); // получаем время в соотв UTC+

console.log(now.getTimezoneOffset()); // получаем разницу между часом поясом и UTC  в минутах
console.log(now.getUTime()); // получаем кол-во мс прошедших с 1970 г

console.log(now.setHours(18)); // Установка времени. Работают теже параметы но с заменой на set

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
alert(` Цикл отработал за ${end - start} милисекунд`);