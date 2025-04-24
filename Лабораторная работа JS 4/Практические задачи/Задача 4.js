//Задача 4: Сумма и произведение цифр числа

function sumAndProduct(num) {
    const str = num.toString();
    let sum = 0, product = 1;
    for (let char of str) {
        const digit = parseInt(char);
        sum += digit;
        product *= digit;
    }
    return { sum, product };
}
console.log(sumAndProduct(123)); // { sum: 6, product: 6 }