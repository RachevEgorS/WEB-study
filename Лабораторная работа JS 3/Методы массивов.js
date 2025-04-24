let numbers = [1, 2, 3, 4, 5];

// Фильтрация четных чисел
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Умножение элементов на 3
let tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]