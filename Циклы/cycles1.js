// Вывести # столько раз, сколько указал пользователь.
function countNumberSign(count) {
    let i = 0;
    while (i < count) {
        console.log('#')
        ++i;
    }
    return 'Completed!';
}

// Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
function countToZero(number) {
    if (number > 0) {
        let i = number;
        while (i >= 0) {
            console.log(i)
            --i;
        }

        return 'Completed!';
    } else {
        return 'Нужно число больше 0';
    }
}

// Запросить число и степень. Возвести число в указанную степень и вывести результат.
function outputToPower(number, power) {
    let i = 1;
    let result = number;

    while (i < power) {
        result *= number
        ++i;
    }

    return result;
}

// Запросить 2 числа и найти все общие делители.
function findCommonDividers(a, b) {
    let i = Math.min(a, b)
    while (i > 0) {
        if ((a % i == 0) && (b % i == 0)) {
            console.log(i);
        }
        i--;
    }
    return 'Completed!';
}

// Посчитать факториал введенного пользователем числа.
function getFactorial(x) {
    let i = 1;
    let result = 1;
    
    while (x >= i) {
        result *= i;
        ++i;
    }

    return result;
}

// Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
function checkUserMath() {
    do {
        userAnswer = +prompt('Сколько будет 2 + 2 * 2?')
    } while (userAnswer != 6)

    alert('Правильно!');
    return 'Completed!';
}

// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
function division1000() {
    a = 1000;
    count = 0;

    do {
        a /= 2;
        count++;
    } while (a > 50)
    
    console.log(a)
    return count;
}

// Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
function printMultiples(x) {
    for (let i=1; i <= 100; i++) {
        if (i % x === 0) {
            console.log(i)
        }
    }
}

// Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
function printEveryFourthInRange(min, max) {
    for (let i=min; i <= max; i += 4) {
        console.log(i);
    }
}

// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.
function isPrime(x) {
    x = Math.abs(x)

    for (let i = x; i > 0; --i) {
        if (x % i === 0) {
            return 'Не простое число';
        }
    }

    return 'Простое число';
}