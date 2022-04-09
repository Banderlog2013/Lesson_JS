'use script';

// установка обработчика событий

//const btn = document.querySelector('button'); // получаем элемент со страницы
// btn.onclick = function() {
//     alert('Click');
// }; // устаревший метод назначания обработчика

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (event) => {
//     //console.log('Hover');
//     console.log(event.target); // смотрим событие в консоли браузера
//     event.target.remove(); // удаляет событием в месте с элементом
// });


// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement); // удаляет событие с элемента
//     }
// }; // функция с удалением элемента

//btn.addEventListener('click', deleteElement); // после события click - удаляется элемент

// btn.addEventListener('click', (event) => {
//     //console.log('Hover');
//     //console.log(event.target); // смотрим событие в консоли браузера
//     event.target.remove(); // удаляет событием в месте с элементом
// });

// ВСПЛЫТИЕ СОБЫТИЙ

// const btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');

//     const deleteElement = (event) => {
//         console.log(event.target);
//         console.log(event.type);
//     };

//     btn.addEventListener('click', deleteElement); 
//     overlay.addEventListener('click', deleteElement); 

    // ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ БРАУЗЕРА (СОБЫТИЙ БРАУЗЕРА)

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});


// УСТАНОВКА ОДНОГО ОБРАБОТЧИКА СОБЫТИЙ НА НЕСКОЛЬКО ЭЛЕМЕНТОВ

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

    const deleteElement = (event) => {
        console.log(event.target);
        console.log(event.type);
    };

    //btn.addEventListener('click', deleteElement); 
    //overlay.addEventListener('click', deleteElement); 
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // {опции и события}
});
