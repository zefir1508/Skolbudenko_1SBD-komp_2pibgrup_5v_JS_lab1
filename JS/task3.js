// Функція для перевірки, чи число двозначне
function isTwoDigitNumber(num) {
    return num >= 10 && num <= 99;
}

// Функція для перевірки, чи число ділиться на 9 або містить цифру 9
function isDivisibleOrContainsNine(num) {
    return num % 9 === 0 || num.toString().includes('9');
}

// Функція для знаходження всіх двозначних чисел, які діляться на 9 або містять цифру 9
function findNumbers() {
    let result = [];
    for (let i = 10; i <= 99; i++) {
        if (isDivisibleOrContainsNine(i)) {
            result.push(i);
        }
    }
    return result;
}

// Функція для валідації введеного користувачем числа
function validateInput(input) {
    if (!input.trim().match(/^\d+$/)) {
        console.log("Попередження: Введено неправильне значення. Будь ласка, введіть ціле число.");
        return false;
    }
    const num = parseInt(input);
    if (!isTwoDigitNumber(num)) {
        console.log("Попередження: Введено неправильне значення. Будь ласка, введіть двозначне число.");
        return false;
    }
    return true;
}

// Функція для обробки введеного користувачем числа та виведення результату
function processInput(input) {
    if (validateInput(input)) {
        const num = parseInt(input);
        if (isDivisibleOrContainsNine(num)) {
            console.log("Ви ввели правильне двозначне число, яке ділиться на 9 або містить цифру 9.");
        } else {
            console.log("Введене число не ділиться на 9 та не містить цифру 9.");
        }
    }
}

// Приклад виклику функції processInput з введеним користувачем числом
const userInput = prompt("Будь ласка, введіть двозначне число:");
processInput(userInput);
