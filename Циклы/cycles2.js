// Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
function sumRange(min, max) {
    let count = 0;
    for (let i = min; i <= max; i++) {
        count += i;
    }
    return count;
}

// Запросить 2 числа и найти только наибольший общий делитель.
function findNOD(a, b) {
    let i = Math.min(a, b)
    while (i > 0) {
        if ((a % i === 0) && (b % i === 0)) {
            return i;
        }
        i--;
    }
    return '404 Not Found';
}

// Запросить у пользователя число и вывести все делители этого числа.
function findDividers(x) {
    for (let i = x; i > 0; i--) {
        if (x % i === 0) {
            console.log(i);
        }
    }

    return 'Completed';
}

// Определить количество цифр в введенном числе.
function countNumbers(x) {
    let count = 0;

    while (x > 0) {
        if (x >= 10) {
            x /= 10;
            count++;
        } else {
            count++;
            break
        }
    }

    return count;
}

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function numberAnalysis() {
    positive = 0;
    negative = 0;
    neutral = 0;
    even = 0;
    odd = 0;

    for (let i = 1; i <= 10; i++) {
        x = +prompt(`${i}. Введите случайное число:`)

        if (x > 0) positive++;
        else if (x === 0) neutral++;
        else negative++;

        if (x % 2 === 0) even++;
        else odd++;
    }
    
    confirm(`Положительных чисел: ${positive}\nНулей: ${neutral}\nОтрицательных: ${negative}\nЧетных: ${even}\nНечетных: ${odd}`);
    return `Положительных чисел: ${positive} Нулей: ${neutral} Отрицательных: ${negative} Четных: ${even} Нечетных: ${odd}`;
}

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
function infinityCalculator() {
    let nextIteration = false;

    do {
        a = +prompt('Введите первое число:');
        symbol = prompt('Введите математический знак');
        b = +prompt('Введите второе число:');

        switch (symbol) {
            case '+':
                alert(`Ответ: ${a + b}`);
                console.log(`Ответ: ${a + b}`);
                break;
            case '-':
                alert(`Ответ: ${a - b}`);
                console.log(`Ответ: ${a - b}`);
                break;
            case '/':
                alert(`Ответ: ${a / b}`);
                console.log(`Ответ: ${a / b}`);
                break;
            case '*':
                alert(`Ответ: ${a * b}`);
                console.log(`Ответ: ${a * b}`);
                break;
            case '**':
                alert(`Ответ: ${a ** b}`);
                console.log(`Ответ: ${a ** b}`);
                break;
            case '%':
                alert(`Ответ: ${a % b}`);
                console.log(`Ответ: ${a % b}`);
                break;
            default:
                alert('Незнаю такого знака');
                break;
        }

        nextIteration = confirm('Хотите еще раз посчитать в калькуляторе?')
    } while(nextIteration)
}

// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function swapNumbers(numbers, swap) {
    let numbersStr = numbers.toString();

    let result = numbersStr.slice(swap)
    result += numbersStr.slice(0, swap)

    return result;
}


// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. 
function checkWeekDay() {
    let checkNextDay = false;
    let weekdayIndex = 0;

    do {
        switch (weekdayIndex) {
            case 0:
                alert('Понедельник');
                console.log('Понедельник');
                break
            case 1:
                alert('Вторник');
                console.log('Вторник');
                break
            case 2:
                alert('Среда');
                console.log('Среда');
                break
            case 3:
                alert('Четверг');
                console.log('Четверг');
                break
            case 4:
                alert('Пятница');
                console.log('Пятница');
                break
            case 5:
                alert('Суббота');
                console.log('Суббота');
                break
            case 6:
                alert('Воскресенье');
                console.log('Воскресенье');
                break
            default:
                weekdayIndex = 0;
                alert('Понедельник');
                console.log('Понедельник');
        }

        checkNextDay = confirm('Вы хотите увидеть следующий день недели?')
        weekdayIndex++;
    } while(checkNextDay)

    return 'Completed!';
}

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function multiplicationTable(x) {
    if (x < 2 || x > 9) {
        x = 2;
        console.log('Неверная цифра! Установлена цифра по умолчанию');
    }

    for (let c = 1; c <= 10; c++) {
        console.log(`${x} * ${c} = ${x * c}`);
    }

    return 'Completed!';
}

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число> N, <N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число> 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
function guessTheNumber(number) {
    let currentNumber = 50;
    let maxPossible = 0;
    let minPossible = 0;

    for (let i = 1; i <= 15; i++) {
        console.log(currentNumber)
        userAnswer = prompt(`Ваше число ${currentNumber}? (<, > или =)`)

        switch (userAnswer) {
            case '<':
                maxPossible = currentNumber
                currentNumber = Math.floor(maxPossible * 0.50);
                break
            case '>':
                minPossible = currentNumber
                currentNumber = Math.floor(minPossible * 1.25);
                break
            case '=':
                alert(`Вы загадили ${number}`);
                return `Вы загадили ${number}`;
            case 'break':
                return 'Досрочное завершение работы';
            default:
                alert('Неверный символ!');
                i--;
        }
    }

    alert(`Вы победили! Неотгаданное число: ${number}. Текущие число: ${currentNumber}`)
    return `Вы победили! Неотгаданное число: ${number}. Текущие число: ${currentNumber}`;
}