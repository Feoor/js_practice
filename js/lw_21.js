// 1
const regex1 = /^\d+$/;

console.log(regex1.test("2025")) // true
console.log(regex1.test("20a5")) // false

// 2
const input2 = "cat catalog scatter cat";

console.log(input2.match(/\bcat\b/g));

// 3
const input3 = "Ivanov college Petrov Sidorov student";

console.log(input3.match(/\b[A-Z][a-z]+\b/g));

// 4
const input4 = "I like red, green and blue. Green is my favorite color";

console.log(input4.match(/red|green|blue/gi));

// 5
const input5 = "Ivan Petrov";

console.log(input5.replace(/(\w+)\s+(\w+)/, "$2 $1"));

// 6
const input6 = "2025-09-17";

console.log(input6.replace(/(\d{4})[-\/](\d{2})[-\/](\d{2})/, "$3.$2.$1"));

// 7
const input7 = "87011234567";

console.log(input7.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5"));

// 8
const regex8 = /^[a-z]\w{5,}/i;

console.log(regex8.test("mIDd0EO[192t<;q")); // true
