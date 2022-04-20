'use strict';

const persone = {
    name: 'Alex',
    tel: '+986786',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); // передача данных на сервер
//console.log(JSON.parse(JSON.stringify(persone)));// возращаем объект с сервера
const clone = JSON.parse(JSON.stringify(persone)); // создаем полный клон без изменения родителя
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);