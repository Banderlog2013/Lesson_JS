'use script';
const number = 1;

// модуль со своей областью видимости, работатет локально
(function(){ // анонимная самовызывающая функция
    let number = 2;
    console.log(number);
    console.log(number + 3);

}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('Приват');
    };

    return {
        sayHello: privat
    };

}());

user.sayHello();