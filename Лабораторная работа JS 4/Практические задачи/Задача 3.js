//Задача 3: Факториал числа

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}
console.log(factorial(5)); // 120