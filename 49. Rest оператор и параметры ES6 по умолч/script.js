// 'use strict';

// Rest - объеденяет отдельные элементы в один массив. Собирает оставшиеся элеементы в массив
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basic) {
//     console.log(number * basic);
// }
// calcOrDouble(3, 5);

function calcOrDouble(number, basic = 2) {
    console.log(number * basic);
}
calcOrDouble(3);