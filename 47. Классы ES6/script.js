'use strict';
// классы это оберта конструторов ф-ций

class Rectangle { // скласс созается при помощи class, название класса с Большой буквы
    constructor(heigth, width) { // constructor ( передаем аргументы ширинаб высота)
        this.heigth = heigth;
        this.width = width; // создаем базовые свойства
    }

    calcArea() { // создаем метод
        return this.heigth * this.width; // возвращаем площадь фигуры

    }
}

class ColoredRectangleWidthText extends Rectangle { // наследование от класса выше
    constructor(heigth, width, text, bgColor) { // передаем аргументы
        super(heigth, width); // метод супер вызывает супер конструктор родителя, ук-ем наслед. св-ва к-ые нужно исп. 
        // super должен быть на 1-м месте в конструкторе
        this.text = text; // прописываем тексты
        this.bgColor = bgColor;

    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWidthText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.caclArea);

// const square = new Rectangle(10, 10); // создаем объект при помощи класса и передаем аргументы
// const long = new Rectangle(20, 100);
// console.log(long.calcArea());

// console.log(square.calcArea());