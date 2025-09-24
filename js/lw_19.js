// 1
const findAnna = /Anna/;

console.log(findAnna.test("Anna Petrova")); // true
console.log(findAnna.test("Ivan Ivanov")) // false

// 2
const text = "Колледж может стать отличным стартом для будущей карьеры.\n" +
  "Именно поэтому Иван так усердно готовился к поступлению в этот\n" +
  "престижный колледж.\n" +
  "Он знал, что учеба поможет ему реализовать все свои мечты, ведь\n" +
  "этот колледж славится сильной программой и талантливыми\n" +
  "преподавателями"

const findCollegeWithRegister = /колледж/gi;
const findCollegeWithoutRegister = /колледж/g;

console.log("Без регистра: " + text.match(findCollegeWithRegister).length);
console.log("С учётом регистра: " + text.match(findCollegeWithoutRegister).length);

// 3
const findEmail = /mail.com/;

console.log(findEmail.test("student@mail.com")) // true
console.log(findEmail.test("student@gmail.com")) // false;

// 4
const emails = ["student@mail.com", "user123@gmail.com", "anna.petrov@yandex.ru", "test.user@mail.com", "random.email@outlook.com"];
const regexReplace = /@mail.com/;

const newEmails = emails.map(email => email.replace(regexReplace, "university.edu"));
console.log(newEmails.join(", ").match(/university.edu/g)); // [ 'university.edu', 'university.edu' ]

// 5
const phoneNumber = "8-777-123-45-67";

console.log(phoneNumber.replace(/-/g, " ")); // 8 777 123 45 67

// 6
const yearText = "Event: 2025, Previous Event: 2020, Next Event: 2030";

console.log(yearText.match(/\d{4}/g)); // ['2025', '2020', '2030']

// 7
const emailsText = "anna@mail.com; ivan@mail.com, petr@mail.com";

console.log(emailsText.split(/[;,]/)); // [ 'anna@mail.com', ' ivan@mail.com', ' petr@mail.com' ]
