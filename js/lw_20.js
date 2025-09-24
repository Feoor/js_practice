// 1
const input1 = "Иван, Anna, r2d2, Max123, Oleg_2025, cat";
const regex1 = /[a-zA-Zа-яА-Я]+/g;

console.log(input1.match(regex1)); // ['Иван', 'Anna', 'r', 'd', 'Max', 'Oleg', 'cat']

// 2
const input2 = "Петр — 25 лет, Анна — 19 лет, Иван — 7 лет";
const regex2 = /\d+/g;

console.log(input2.match(regex2)); // ['25', '19', '7']

// 3
const input3 = "Иванов, Петров, R2D2, студент, Сидоров, Smith, колледж";
const regex3 = /[А-ЯA-Z][а-яa-z]+/g;

console.log(input3.match(regex3)); // ['Иванов', 'Петров', 'Сидоров', 'Smith']

// 4
const input4 = "Телефон: +7-701-123-45-67";
const regex4 = /\d+/g;

console.log(input4.match(regex4));

// 5
const input5 = "Ноутбук — 350000тг, Iphone15 - 1000$, Кофе — 1500тг, macbook air - 120000руб, Мышь — 5000тг";
const regex5 = /\d+тг/g;

console.log(input5.match(regex5)); // ['350000тг', '1500тг', '5000тг'];

// 6
const input6 = "12kg 30min 100km";
const findDigits = /\d+/g;
const findLetters = /[a-zA-Z]+/g;

console.log(input6.match(findDigits)); // ['12', '30', '100']
console.log(input6.match(findLetters)); // ['kg', 'min', 'km']

// 7
const input7 = "В 2023 Иван поступил в колледж. Сейчас он на 3 курсе. Он закончит колледж в 2026 году"
const regex7 = /\d{4}/g;

console.log(input7.match(regex7));
