//Пример: Использование объекта arguments

function sumAll() {
    let total = 0;
    for (let arg of arguments) total += arg;
    return total;
}
console.log(sumAll(1, 2, 3)); // 6