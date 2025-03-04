// Задание 1
// Создать, массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
let shoppingList = [
    milk = {
        name: 'Milk',
        count: 4,
        isBought: false
    },
    bread = {
        name: 'Bread',
        count: 2,
        isBought: true
    },
    eggs = {
        name: 'Eggs',
        count: 10,
        isBought: false
    },
    butter = {
        name: 'Butter',
        count: 1,
        isBought: true
    }
]
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные.
function viewShoppingList(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isBought) {
            console.log(`${arr[i].name} - ${arr[i].count} - куплено`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].isBought) {
            console.log(`${arr[i].name} - ${arr[i].count} - не куплено`);
        }
    }

    return 0;
}
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addProduct(arr, product_name, product_count) {
    if (arr[product_name]) {
        arr[product_name].count += product_count;
    } else {
        arr[product_name] = {
            name: product_name,
            count: product_count,
            isBought: false
        }
    }

    console.log(`Товар ${product_name} добавлен в список покупок`);
    return arr[product_name];
}
// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function buyProduct(arr, product_name) {
    if (arr[product_name]) {
        arr[product_name].isBought = true;
        console.log(`Товар ${product_name} куплен`);
    } else {
        console.log(`Товар ${product_name} не найден в списке покупок`);
    }

    return arr[product_name];
}


// Задание 2
// Создать, массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20)
// и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
let auditoriums = [
    group1 = {
        name: 'Какая-то аудитория 1',
        seats: 15,
        faculty: 'Факультет 1'
    },
    group2 = {
        name: 'Еще одна аудитория 2',
        seats: 10,
        faculty: 'Факультет 2'
    },
    group3 = {
        name: 'Аудитория 3',
        seats: 20,
        faculty: 'Факультет 3'
    },
    group4 = {
        name: 'Последняя аудитория 4',
        seats: 12,
        faculty: 'Факультет 1'
    }
]

// 1. Вывод на экран всех аудиторий.
function viewAuditoriums(arr) {
    for (let i= 0; i < arr.length; i++) {
        console.log(`${arr[i].name} - ${arr[i].seats} - ${arr[i].faculty}`);
    }

    return arr;
}

// 2. Вывод на экран аудиторий для указанного факультета.
function viewAuditoriumsByFaculty(arr, faculty_name) {
    let resultArr = [];

    for (let i= 0; i < arr.length; i++) {
        if (arr[i].faculty === faculty_name) {
            resultArr.push(i);
            console.log(`${arr[i].name} - ${arr[i].seats} - ${arr[i].faculty}`);
        }
    }

    return resultArr;
}

// 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
function viewAuditoriumsByGroup(arr, group) {
    if (arr[group]) {
        console.log(`Аудитория: ${arr[group].name}\nКоличество мест: ${arr[group].seats}\nФакультет: ${arr[group].faculty}`);
        return arr[group];
    } else {
        console.log(`Группа ${group} не найдена`);
    }

    return 0;
}

// 4. Функция сортировки аудиторий по количеству мест.
function sortAuditoriumsBySeats(auditoriumsList) {
    // Сортировка массива по количеству мест
    for (let i = 0; i < auditoriumsList.length - 1; ++i) {
        for (let j = 0; j < auditoriumsList.length - i - 1; ++j) {

            // Сравниваем количество мест в аудиториях
            if (auditoriumsList[j + 1].seats < auditoriumsList[j].seats) {
                // Если кол-во мест у правого элемента меньше, чем у левого, меняем их местами

                let temp = auditoriumsList[j];
                auditoriumsList[j] = auditoriumsList[j + 1];
                auditoriumsList[j + 1] = temp;
            }
        }
    }

    return auditoriumsList;
}

// 5. Функция сортировки аудиторий по названию (по алфавиту).
function sortAuditoriumsByName(auditoriumsList) {
    // Сортировка массива по названию
    for (let i = 0; i < auditoriumsList.length - 1; ++i) {
        for (let j = 0; j < auditoriumsList.length - i - 1; ++j) {

            // Название аудитории преобразуется в код ASCII и сравнивается(ГЕНИИАЛЬНО)
            if (auditoriumsList[j + 1].name < auditoriumsList[j].name) {
                // Если код ASCII следующего элемента меньше, чем текущего, то меняем их местами

                let temp = auditoriumsList[j];
                auditoriumsList[j] = auditoriumsList[j + 1];
                auditoriumsList[j + 1] = temp;
            }
        }
    }

    return auditoriumsList;
}