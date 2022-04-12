// const timerID = setTimeout(function() {
//     console.log('Hello');
// }, 2000);  // Вызов функции через 2000 мс.

// const timerID = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');  // Дополнительно передаем в ф-цию текст

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     const timerId = setInterval(logger, 500); // вызывает ф-цию через интервал времени, циклично
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId); // сброс таймера
//     }
//     console.log('text');
//     i++;
// } // также можно передавать готовую ф-цию

