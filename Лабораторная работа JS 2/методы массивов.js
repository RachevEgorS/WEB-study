// push/pop
days.push('дополнительный день');
console.log(days.pop()); // 'дополнительный день'

// concat
var combined = days.concat(numbers);
console.log(combined); // Объединенный массив

// splice
var removed = days.splice(1, 2, 'новый_день');
console.log(days); // ['пн', 'новый_день', 'чт', ...]

// slice
var sliced = days.slice(0, 3);
console.log(sliced); // ['пн', 'новый_день', 'чт']

// indexOf
console.log(days.indexOf('чт')); // 2