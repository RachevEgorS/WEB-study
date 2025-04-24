//Задача 3: Подсчет четных чисел в массиве

let arr = [2, 5, 6, 8, 4, 9, 12, 14, 11];
let count = 0;

for (let num of arr) {
    if (num % 2 === 0) count++;
}
console.log("Количество четных чисел: " + count); // 6