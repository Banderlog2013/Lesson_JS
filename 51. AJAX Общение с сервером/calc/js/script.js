'use strict';
// Получаем данные со страницы
const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

// назначаем обработчик событий 
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // объект запроса

    request.open('GET', 'js/current.json');// подготовка запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // сам запрос
    request.send(); // отправка запроса

    // request.addEventListener('readystatechange', () => { // событие отслеживающее статус запроса
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response); // получаем данные записываем в переменную
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    //         // реализуем логику. к полученному обекту обращаемся через переменную дата и свойства объекта

    //     } else {
    //         inputUSD.value = "Что-то пошло не так";
    //     }

    // });
    request.addEventListener('load', () => { // событие отслеживающее статус запроса
        if (request.status === 200) {
            const data = JSON.parse(request.response); // получаем данные записываем в переменную
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
            // реализуем логику. к полученному обекту обращаемся через переменную дата и свойства объекта

        } else {
            inputUSD.value = "Что-то пошло не так";
        }

    });

});

// get получение данных от сервера
// post отправка запросов