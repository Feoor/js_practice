// 1
const input1 = "<p>Text</p><div>More</div>";

console.log(input1.match(/<.+?>/g)); // ["<p>", "</p>", "<div>", "</div>"]

// 2-3
const input2 = "350000тг, 5000$, 1500тг, 20$";

console.log(input2.match(/\d+(?=\$)/g)); // ["5000", "20"]
console.log(input2.match(/\d+(?!\d*\$)/g)); // ["350000", "1500"]

// 4
const regex4 = /^(?=.*[a-z])(?=.*\d).{6,}$/i;

console.log(regex4.test("mIDd0EO[192t<;q")); // true

// 5
const input5 = "student@mail.com";

console.log(input5.match(/(?<=@).+$/)[0]); // "mail.com"

// 6
const input6 = "+7-701-123-45-67, +3-544-435-12-23, +7-905-654-67-98, +5-765-982-37-61"

console.log(input6.match(/\+7-\d{3}-\d{3}-\d{2}-\d{2}/g)); // ["+7-701-123-45-67", "+7-905-654-67-98"]

// 7
const input7 = "report.doc, photo.png, music.mp3, data.xls";

console.log(input7.match(/\w+\.(?:doc|xls)/g));

// 8
const input8 = "«JavaScript» и «RegExp»"

console.log(input8.match(/(?<=«).+?(?=»)/g)); // ["JavaScript", "RegExp"]
