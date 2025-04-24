//Задача 5: Реверс числа

function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed);
}
console.log(reverseNumber(12345)); // 54321