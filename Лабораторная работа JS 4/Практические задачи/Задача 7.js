//Задача 7: Игра "Угадай число"

function guessNumber() {
    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;

    while (attempts > 0) {
        const guess = parseInt(prompt(`Попыток осталось: ${attempts}. Введите число:`));
        if (guess === target) {
            alert(`Победа! Число: ${target}.`);
            return;
        } else if (guess < target) {
            alert("Загаданное число больше.");
        } else {
            alert("Загаданное число меньше.");
        }
        attempts--;
    }
    alert(`Попытки закончились. Число: ${target}.`);
}
guessNumber();