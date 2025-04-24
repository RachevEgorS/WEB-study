//Задача 2: Создать массив чисел от 30 до 0, кратных 3

let multiplesOfThree = [];
for (let i = 30; i > 0; i--) {
    if (i % 3 === 0) multiplesOfThree.push(i);
}
console.log(multiplesOfThree); // [30, 27, 24, ..., 3]