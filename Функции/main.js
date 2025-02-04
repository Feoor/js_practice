// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.
function numberComparison(a, b) {
  if (a < b) {
      return -1;
  } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
}

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i + i;
    }
    return result;
}

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9
// превратятся в число 149.
function convertDigitsToNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1
// параметр, то она вычисляет площадь квадрата.
function calculateArea(a, b = 0) {
    return (b === 0) ? a * 4 : (a * 2) + (b * 2);
}

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число,
// равное сумме всех своих собственных делителей.
function checkPerfectNumber(number) {
    if (number === 0) return '0 Совершенное число';
    let result = 0;

    for (let i = (number - 1); i >= 0; i--) {
        if (number % i === 0) {
            result += i;
        }
    }

    return (result === number) ? `${result} Совершенное число` : false;
}

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из
// диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или
// нет.
function findPerfectNumber(a, b = 0) {
    let maxNumber = Math.max(a, b);

    for (let i = maxNumber; i >= 1; i--) {
        const perfectNumber = checkPerfectNumber(i);
        if (perfectNumber) {
            console.log(perfectNumber);
        }
    }

    return true;
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function showTime(hour, minute='00', second='00') {
    if (hour > 24 || minute > 60 || second > 60) {
        return 'Неверный формат времени';
    }

    return `${hour}:${minute}:${second}`;
}

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function convertToSeconds(seconds, minutes = 0, hours = 0) {
    minutes += hours * 60;
    seconds += minutes * 60;
    return seconds;
}

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде
// строки «чч:мм:сс».
function convertSeconds(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    return `${hours}:${minutes}:${seconds}`;
}

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и
// возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
function dateComparison(aHours, aMinutes, aSeconds, bHours, bMinutes, bSeconds) {
    const aDateSeconds = convertToSeconds(aSeconds, aMinutes, aHours)
    const bDateSeconds = convertToSeconds(bSeconds, bMinutes, bHours)

    let secondsDifference = Math.abs(aDateSeconds - bDateSeconds);
    let minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    secondsDifference %= 60;
    minutesDifference %= 60;

    const aDate = convertSeconds(aDateSeconds);
    const bDate = convertSeconds(bDateSeconds);

    return `Разница между ${aDate} и ${bDate} - ${hoursDifference} час ${minutesDifference} минут ${secondsDifference} секунд`;
}