'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    // hearts = document.querySelectorAll('.heart'),
    hearts = wrapper.querySelectorAll('.heart'), // т.е можно обратитится к дочернему элементу через родительсткий.
    // oneHeart = document.querySelector('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    // wrapper = document.querySelector('.wrapper');



// Обращение к свойсвам элемента css

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color:blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor ='red';

// Изменение своств у нескольких элементов
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
// При помощи цикла перебираем элементы и присваиваем свойства блю.

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
    
});

// Основные методы для работы с элементами страницы

// Создание блока

const div = document.createElement('div');
// создание текста
//const text = document.createTextNode('Я тут'); // устаревший метод

// Добавление классов
div.classList.add('black');
// Добавление блока в тело сайта
document.body.append(div); // вставляет в конец body
wrapper.append(div); // вставляет блок в конец 

//wrapper.prepend(div); //вставляет блок в начало

//hearts[0].before(div); // вставить блок перед ...
//hearts[0].after(div); // вставить блок после ...
//circles[0].remove(); // удаляет елемент в соотвествии с индексом
//hearts[0].replaceWith(circles[0]); // Замена одного элемента на другой

//div.innerHTML = "<h1>Hello World</h1>"; // вставить текст в блок, можно вставлять html сруктуру.
div.textContent = "Hello"; // вставлет только текст.
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); // вставляет html код, взависимость от выбранного аргумента в()
// beforebegin - вставляет html  перед элементом
// beforeend - вставляет ht ред концом элемента
// afterbegin - вставляет html в начало элемента
// afterend - вставляет html после элемента