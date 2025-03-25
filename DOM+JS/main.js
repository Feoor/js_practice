// 1 Задание
const usersTable = document.querySelector("#usersTable");

// Thead
for (const tr of usersTable.children[0].children) {
    for (const th of tr.cells) {
        th.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "#404eed";
            event.target.style.color = "white";
        })
        th.addEventListener("mouseleave", function(event) {
            event.target.style.backgroundColor = "#fff";
            event.target.style.color = "black";
        })
    }
}

// Tbody
for (const tr of usersTable.children[1].children) {
    for (const td of tr.cells) {
        td.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "#5865f2";
            event.target.style.color = "white";
        })
        td.addEventListener("mouseleave", function(event) {
            event.target.style.backgroundColor = "#fff";
            event.target.style.color = "black";
        })
    }
}


// 2 Задание
noContextBlock = document.querySelector("#noContextMenu");

noContextBlock.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Контекстное меню отключено");
})

// 3 Задание
const likeButton = document.querySelector("#likeButton");
const likeButtonCounter = document.querySelector("#likeButtonCounter");
let likesCounter = 0;
likeButton.addEventListener("click", function() {
    likeButtonCounter.innerHTML = `${++likesCounter}`;
})

// 4 Задание
let calculatorOutput = document.querySelector("#calculatorOutput");
const calculatorButtons = document.querySelector("#calculatorButtons");
let calculatorBroker = [];

for (const button of calculatorButtons.children) {
    button.addEventListener("click", function(event) {
        const buttonValue = event.target.innerHTML;

        if (buttonValue === "=") {
            console.log(calculatorBroker);

            if (calculatorBroker.length === 0) {
                return false;
            }

            let currentNumber = '';
            let secondOperand = '';
            let operator = '';

            for (let i = 0; i < calculatorBroker.length; i++) {
                const value = calculatorBroker[i];

                if (value === "+" || value === "-" || value === "*" || value === "/") {
                    operator = value;

                    // Поиск следующего числа пока не встретим оператор или не закончится массив
                    for (i += 1; i < calculatorBroker.length; i++) {
                        const value = calculatorBroker[i];
                        const nextValue = calculatorBroker[i + 1];
                        secondOperand += value;

                        // Если следующий элемент - оператор или конец массива, то выходим из цикла
                        if (nextValue === undefined || nextValue === "+" || nextValue === "-" || nextValue === "*" || nextValue === "/") {
                            currentNumber = Number(currentNumber);
                            secondOperand = Number(secondOperand);

                            switch (operator) {
                                case "+":
                                    currentNumber += secondOperand;
                                    break;
                                case "-":
                                    currentNumber -= secondOperand;
                                    break;
                                case "*":
                                    currentNumber *= secondOperand;
                                    break;
                                case "/":
                                    currentNumber /= secondOperand;
                                    break;
                            }

                            currentNumber = String(currentNumber);
                            secondOperand = '';
                            break;
                        }
                    }
                } else {
                    currentNumber += value;
                }
            }

            calculatorBroker = [];
            calculatorOutput.value = currentNumber;
        } else if (buttonValue === "+"|| buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
            const lastArrayElement = calculatorBroker.at(-1);

            if (lastArrayElement === undefined || lastArrayElement === "+"|| lastArrayElement === "-" || lastArrayElement === "*" || lastArrayElement === "/") {
                return false;
            }

            calculatorBroker.push(buttonValue);
            calculatorOutput.value = calculatorBroker.join('');
        } else {
            calculatorBroker.push(buttonValue);
            calculatorOutput.value = calculatorBroker.join('');
        }
    })
}