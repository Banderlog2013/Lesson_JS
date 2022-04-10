/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const delAdv = document.querySelector('.promo__adv');
// delAdv.remove();

// const genre = document.querySelector('.promo__genre');
// genre.remove();

// div.innerHTML = '<div class="promo__genre">КОМЕДИЯ</div>';

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),// получаем родительский элемент
      genre = poster.querySelector('.promo__genre'), // через родительский элемент получаем дочерний
      movieList = document.querySelector('.promo__interactive-list');
// Получаем всю рекламу сос страницы
// Удалить весь рекламный блок нельзя. Перебераем всю рекламу и удаляем блоки по порядку при помощи цикла

adv.forEach(item => {
    item.remove();
});

//удаление при помощи функции

// adv.forEach(function (item) {
//     item.remove();
// });

genre.textContent = 'драма'; // меняем текст
poster.style.backgroundImage = 'url("img/bg.jpg")'; // меняем картинку фона
movieList.innerHTML = ""; // удаляем содержимое блока
movieDB.movies.sort(); // сортируем по алфавиту

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});