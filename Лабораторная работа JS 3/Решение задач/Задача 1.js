// Задача 1: Создать массив четных чисел меньше 20

let evenNumbers = [];
for (let i = 0; i < 20; i += 2) {
    evenNumbers.push(i);
}
console.log(evenNumbers); // [0, 2, 4, ..., 18]