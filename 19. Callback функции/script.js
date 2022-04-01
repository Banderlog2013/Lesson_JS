'use strict';

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`); // сначала выполняется эта функция
    callback(); // затем эта
}

// learnJS('JavaScript', function() {
//     console.log('я прошел этот урок!');
// });

function done() {
    console.log('Я прошел этот курс!');
}

learnJS('Javascript', done);