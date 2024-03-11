// Перевірка, чи є введене значення числом
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Введення координат точки А та перевірка на правильність вводу
var xInput, yInput;

do {
    xInput = prompt("Введіть координату x точки А:");
    if (!isNumber(xInput)) {
        console.log("Будь ласка, введіть числове значення для координати x.");
    }
} while (!isNumber(xInput));

do {
    yInput = prompt("Введіть координату y точки А:");
    if (!isNumber(yInput)) {
        console.log("Будь ласка, введіть числове значення для координати y.");
    }
} while (!isNumber(yInput));

// Конвертація координат в числа
var x = parseFloat(xInput);
var y = parseFloat(yInput);

// Визначення чверті, в якій лежить точка
var quadrant;

if (x > 0 && y > 0) {
    quadrant = "першій";
} else if (x < 0 && y > 0) {
    quadrant = "другій";
} else if (x < 0 && y < 0) {
    quadrant = "третій";
} else if (x > 0 && y < 0) {
    quadrant = "четвертий";
} else if (x === 0 && y !== 0) {
    quadrant = "лежить на вісі y";
} else if (y === 0 && x !== 0) {
    quadrant = "лежить на вісі x";
} else if (x === 0 && y === 0) {
    quadrant = "лежить в початковій точці";
}

// Виведення результату
console.log("Точка А(" + x + ", " + y + ") лежить у " + quadrant + " чверті.");
