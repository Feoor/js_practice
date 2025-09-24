// 1
function helloWorld() {
  setTimeout(() => {
    console.log("Привет, Мир!");
  }, 2000);
}

// 2
let intervalId = setInterval(updateClock, 1000);

function toggleClock() {
  const clockButton = document.querySelector("#clockButton");

  if (intervalId === undefined || intervalId === null) {
    updateClock();
    intervalId ??= setInterval(updateClock, 1000);
    clockButton.classList.toggle("btn-danger");
    clockButton.classList.toggle('btn-success');
    clockButton.innerText = "Остановить";
    console.log("Starting Clock");
  } else {
    stopClock();
    clockButton.classList.toggle("btn-danger");
    clockButton.classList.toggle('btn-success');
    clockButton.innerText = "Запустить";
    console.log("Stopped Clock");
  }
}
function updateClock() {
  const clock = document.querySelector("#clock");
  const time = new Date();

  clock.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
function stopClock() {
  clearInterval(intervalId);
  intervalId = null;
}
addEventListener('DOMContentLoaded', () => {
  document.querySelector("#clockButton").addEventListener("click", toggleClock);
});

// 3
// setInterval(function(){
//   console.log(new Date().toLocaleTimeString())
//   const end = new Date() + 2000; // 2 секунды
//   while (Date.now() < end) {}
//   console.log(new Date().toLocaleTimeString())
// }, 1000);

// 4
let countInterval = 0;
const countIntervalId = setInterval(() => {
  console.log(`setInterval count: ${++countInterval}`);

  const start = Date.now();
  while (Date.now() - start < 1500) { }
  if (countInterval >= 5) {
    clearInterval(countIntervalId);
  }
}, 1000);

// 5
let color = true;

let squareTimer;
function startSquare(){
  squareTimer = setInterval(function(){
    if (color){
      document.getElementById("square").style.backgroundColor = "red";
    } else {
      document.getElementById("square").style.backgroundColor = "green";
    }
    color = !color;
  }, 1000);
}

startSquare();
