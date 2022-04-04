'use strict';

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}


arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
// Метод forEach позволяет более гибко настроить перебор внутри массива



arr.pop(); // pop удаляет последний элемент массива.
arr.push(10); // push(10) добавляет елемент в конец массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Перебор элементов внутри массива.

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", "); // split формирование массива из строки
products.sort(); // сортирует элементы внутри массива, как строки
console.log(products.join(', '));// join формирование строки из массива
// формирование массива из строк при указании разделителя например запятой. Исользуется к примеру получения списка товаров с сервера .