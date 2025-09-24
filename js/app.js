// 1
function task1() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.trace();

  return 0;
}

function task2() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");

  console.trace();

  return 0;
}

// task1();
// task2();

// 2
function greeting() {
  console.log("greeting");
  sayHello();
}
function sayHello() {
  console.log("sayHello");
  logMessage()
}
function logMessage() {
  console.log("logMessage");
  console.trace();
}
// greeting();

// 3
function task3(message, timeout) {
  setTimeout(() => {
    console.log(message);
  }, timeout);

  console.trace();
}

// task3("First setTimeout(2000ms)", 2000);
// task3("Second setTimeout(1000ms)", 1000);

// 4
// setTimeout(() => {
//   console.log("First timeout");
//
//   console.trace();
//
//   setTimeout(() => {
//     console.log("Second timeout(in setTimeout)");
//
//     console.trace();
//   }, 500);
// }, 0)

// 5
console.log("start");
setTimeout(() => console.log("1"), 0);
setTimeout(() => console.log("2"), 0);
console.log("end");
