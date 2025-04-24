//Задача 6: Подсчет четных и нечетных цифр

function countEvenOdd(num) {
    const str = num.toString();
    let even = 0, odd = 0;
    for (let char of str) {
        const digit = parseInt(char);
        digit % 2 === 0 ? even++ : odd++;
    }
    return { even, odd };
}
console.log(countEvenOdd(13579)); // { even: 0, odd: 5 }