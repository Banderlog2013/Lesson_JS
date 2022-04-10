/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//  Оптимизация загрузки. Скрипт ждет полной загрузки версти после чего выполняется код DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {  
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'), 
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // получаем форму со страницы
          addInput = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]'); // проверяем чекбокс
          
    addForm.addEventListener ('submit', (event) => {
        event.preventDefault(); // отменяем стандартное поведение
        let newFilm = addInput.value; // проверяем, что ввел пользователь в форму
        const favorite = checkbox.checked; // проверяем чекбокс
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm); // добавляем фильм в базу введный пользователем
            sortArr(movieDB.movies);  // сортируем фильмы по алфавиту
            createMoviesList(movieDB.movies, movieList);
        }

        event.target.reset();

    });
    
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };
            
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMoviesList(films, parent) {
        parent.innerHTML = ""; 
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(1, i);
                createMoviesList(films, parent);
            });
        });

    }
    deleteAdv(adv);
    makeChanges();
    createMoviesList(movieDB.movies, movieList);
});