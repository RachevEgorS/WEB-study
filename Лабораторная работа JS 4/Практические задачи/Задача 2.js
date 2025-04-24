//Задача 2: Числа Фибоначчи

function fibonacci(count) {
    const fib = [1, 2];
    for (let i = 2; i < count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, count);
}
console.log(fibonacci(5)); // [1, 2, 3, 5, 8]