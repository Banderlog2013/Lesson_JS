/* let num = 50;

while (num < 55) {
    console.log(num);
    num++;
} */

"use strict";

let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i =1; i < 8; i++) {
//     console.log(i);
//     num++;
// }
// Цикл for сотоит из переменной, остановки цикла при достижении определенных параметров и самого действия цикла.

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; //прерывает цикл
        continue; // пропускает шаг, который не нужен, при этом не прерывает полностью цикл.
    }

    console.log(i);
}