const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
//console.log(btns[0].classList.length); // получаем количество классов
//console.log(btns[0].classList.item(0)); //получаем конкретный класс в соответ с индексом
//console.log(btns[1].classList.add('red')); // добавляем класс
//console.log(btns[0].classList.remove('blue')); // удаляем класс
//console.log(btns[0].classList.toggle('blue')); // позволяет тоглить классы, т.е. если класса нет, то 
// он его доваляет. Если класс есть, то он его убирает

// Контейнс - проверяет наличие класса и возвращает булиновое значение
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.add('red');
    // }
    btns[1].classList.toggle('red');
});

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName === 'BUTTON') {
    //     console.log('Hello');
    // }
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches("button.red")) { // проверка на совпадение
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// Если элемент подходит под условие, то на нем будет срабатывать та функция которую передали