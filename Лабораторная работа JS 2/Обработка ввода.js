let input = "24 42";
let [a, b] = input.split(' ').map(Number);
console.log(a + b); // 66

let str = "   меЛОДИЯ   ";
let formatted = str.trim().toLowerCase();
formatted = formatted[0].toUpperCase() + formatted.slice(1);
console.log(formatted); // "Мелодия"

var numbers = [1, 2, 3, 4, 5];
var even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

var doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]