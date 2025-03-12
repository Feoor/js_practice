#include <iostream>

void print_array(int arr[], const int size) {
    std::cout<<"[ ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i];
        if (i != size - 1) std::cout << ", ";
    }
    std::cout <<" ]" << '\n';
}

bool isVowel(const char c) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        return true;
    } else return false;
}

// 1)	Создать массив, запросить значение элементов, вывести массив, а после посчитать количество положительных,
// отрицательных, четных, нечетных и нулей в этом массиве.
void ex_1(const int arr[], const int size) {
    int positive{0};
    int negative{0};
    int zero{0};
    int even{0};
    int odd{0};

    // Вывод всего массива + Подсчёт
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << ", ";

        // Анализ числа массива
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else if (arr[i] == 0) {
            zero++;
        }

        if (arr[i] % 2 == 0) {
            even++;
        } else if (arr[i] % 2 == 1) {
            odd++;
        }
    }

    // Вывод результатов
    std::cout << std::endl << std::endl;
    std::cout << "positive: " << positive << '\n';
    std::cout << "negative: " << negative << '\n';
    std::cout << "zero: " << zero << '\n';
    std::cout << "even: " << even << '\n';
    std::cout << "odd: " << odd << '\n';
    std::cout << std::endl << std::endl;
}

// 2)	Создать массив, запросить значение элементов, вывести массив, а после создать новый массив, состоящий из
// отрицательных элементов первого.
void ex_2(int arr[], const int size) {
    // Вывод исходного массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Подсчёт отрицательных чисел
    int negativeCount{0};

    for (int i = 0; i < size; i++) {
        if (arr[i] < 0 ) {
            negativeCount++;
        }
    }

    // Новый массив из отрицательных чисел
    int* result = new int[negativeCount];
    int j = 0;

    for (int i = 0; i < size; i++) {
        if (arr[i] < 0) {
            result[j++] = arr[i];
        }
    }

    // Вывод нового массива
    std::cout << "New array: ";
    print_array(arr, size);

    // Освобождение памяти
    delete[] result;
}

// 3)	Создать динамический массив, запросить значение элементов, вывести массив, а после перезаписать первый и
// последний элемент местами.
void ex_3(int arr[], const int size) {
    // Вывод исходного массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Меняем местами первый и последний элемент массива
    const int temp = arr[0];
    arr[0] = arr[size - 1];
    arr[size - 1] = temp;

    // Вывод нового массива
    print_array(arr, size);
}

// 4)	Создать динамический массив, запросить значение элементов, вывести массив, а после перезаписать местами два
// элемента, указанные пользователем.
void ex_4() {
    std::cout << "Enter the length of the array: ";
    int arraySize;
    std::cin >> arraySize;

    // Создание массива и запись элементов в него
    int arr[arraySize];
    std::cout << "Enter the array elements" << std::endl;
    for (int i = 0; i < arraySize; i++) {
        std::cin >> arr[i];
    }

    // Вывод массива
    std::cout << "Created array: ";
    print_array(arr, arraySize);

    // Запрашиваем два индекса для перестановки
    int firstIndex, secondIndex;
    std::cout << "Enter first index: ";
    while (true) {
        std::cin >> firstIndex;
        if (firstIndex < 0 || firstIndex >= arraySize) {
            std::cout << "Invalid index. Try again." << std::endl;
        } else {
            break;
        }
    }
    std::cout << "Enter second index: ";
    while (true) {
        std::cin >> secondIndex;
        if (secondIndex < 0 || secondIndex >= arraySize) {
            std::cout << "Invalid index. Try again." << std::endl;
        } else {
            break;
        }
    }

    // Перестановка в массиве
    const int temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    // Вывод массива
    std::cout << "Swapped array: ";
    print_array(arr, arraySize);
}

// 5)	Создать динамический массив, запросить значение элементов, вывести массив, а после полностью
// перезаписать массив в обратном порядке.
void ex_5(int arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Переписываем массив в обратном порядке
    int result[size];
    int j = size - 1;
    for (int i = 0; i < size; i++) {
        result[i] = arr[j--];
    }

    // Вывод нового массива
    print_array(result, size);
}

// 6 - 7)	Создать динамический массив, запросить значение элементов, вывести массив, а после найти наименьшее
// число в массиве.
void ex_6_7(int arr[], const int size) {
    std::cout << "Source array: ";
    print_array(arr, size);

    int min = arr[0];
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) min = arr[i];
        else if (arr[i] > max) max = arr[i];
    }

    std::cout << "Minimum element: " << min << std::endl;
    std::cout << "Maximum element: " << max << std::endl;
}

// 8)	Создать динамический массив, запросить значение элементов, вывести массив, а после найти наибольшее
// число в массиве.
void ex_8(int arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Поиск минимального и максимального значения
    int* min = &arr[0];
    int* max = &arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < *min) min = &arr[i];
        else if (arr[i] > *max) max = &arr[i];
    }

    // Вывод найденных значений
    std::cout << "Minimum element: " << *min << std::endl;
    std::cout << "Maximum element: " << *max << std::endl;

    // Меняем местами два элемента
    const int temp = *min;
    *min = *max;
    *max = temp;

    // Вывод массива
    std::cout << "Swapped array: ";
    print_array(arr, size);
}

// 9)	Создать динамический массив, запросить значение элементов, вывести массив, а после удалить выбранный
// пользователем элемент.
void ex_9(int arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Запрос у пользователя на удаление элемента
    std::cout << "Select element from array: ";
    int selectedElement;
    std::cin >> selectedElement;

    // Поиск этого элемента в массиве и его удаление
    int newArray[size - 1];
    int j = 0;

    for (int i = 0; i < size; i++) {
        if (arr[i] != selectedElement) {
            newArray[j++] = arr[i];
        }
    }

    std::cout << "New array: ";
    print_array(newArray, size - 1);
}

// 10)	Создать динамический массив, запросить значение элементов, вывести массив, а после запросить новое значение
// и после какого элемента его добавить и добавить его.

// 10)	Создать динамический массив, запросить значение элементов, вывести массив, а после запросить новое значение
// и после какого элемента его добавить и добавить его.
void ex_10(int arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Запрос нового элемента и его позиции
    std::cout << "Enter new element: ";
    int newElement;
    std::cin >> newElement;
    std::cout << "Enter the index after which to insert a new element: ";
    int position;
    std::cin >> position;

    // Проверка корректности индекса
    if (position < 0 || position >= size) {
        std::cout << "Invalid index" << std::endl;
        return;
    }

    // Создание копии массива и добавление нового элемента
    int newArray[size + 1];

    for (int i = 0, j = 0; i < size + 1; i++) {
        if (i == position + 1) {
            newArray[i] = newElement;
        } else {
            newArray[i] = arr[j++];
        }
    }

    // Вывод массива
    std::cout << "New array: ";
    print_array(newArray, size + 1);
}

// 11)	Создать динамический массив, запросить значение элементов, вывести массив, а после отсортировать его
// по возрастанию.
void ex_11(int arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: ";
    print_array(arr, size);

    // Сортировка массива
    for (int i = 0; i + 1 < size; i++) {
        for (int j = 0; j + 1 < size - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Если текущий элемент меньше следующего, меняем их местами

                const int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Вывод отсортированного массива
    std::cout << "New array: ";
    print_array(arr, size);
}

// 13)	Создать динамический символьный массив для английских букв, запросить значение элементов, вывести массив,
// а после отсортировать его таким образом, чтобы сперва были записаны гласные буквы, потом согласные.
void ex_13(char arr[], const int size) {
    // Вывод массива
    std::cout << "Source array: [ ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i];
        if (i != size - 1) std::cout << ", ";
    }
    std::cout << " ]" << std::endl;

    // Подсчёт гласных и согласных
    int vowels{0}, consonants{0};

    for (int i = 0; i < size; i++) {
        if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' || arr[i] == 'y') {
            vowels++;
        } else consonants++;
    }

    // Создание массива с гласными и согласными отдельно
    char vowelsArray[vowels];
    char consonantsArray[consonants];

    // Заполняем массив гласных
    for (int i = 0, j = 0; i < size; i++) {
        if (isVowel(arr[i])) {
            vowelsArray[j++] = arr[i];
        }
    }
    // Заполняем массив согласных
    for (int i = 0, j = 0; i < size; i++) {
        if (!isVowel(arr[i])) {
            consonantsArray[j++] = arr[i];
        }
    }

    // Объединяем массивы в один
    for (int i = 0, j = 0; i < size; i++) {
        if (i < vowels) {
            arr[i] = vowelsArray[i];
        } else {
            arr[i] = consonantsArray[j++];
        }
    }

    // Вывод массива
    std::cout << "New array: [ ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i];
        if (i != size - 1) std::cout << ", ";
    }
    std::cout << " ]" << std::endl;
}

// 14)	Запросить у человека число, посчитать сколько в нем цифр, создать динамический массив на данное количество цифр
// и занести отдельные цифры числа в созданный массив. Вывести его.
void ex_14(int number) {
    // Подсчёт цифр в числе
    int digitsCount = 0;
    int temp = number;
    while (temp != 0) {
        temp /= 10;
        digitsCount++;
    }

    // Заносим отдельные цифры числа в массив
    int digitsArray[digitsCount];
    int tempNumber = number;

    // Заполняем массив с конца
    for (int i = digitsCount - 1; i >= 0; i--) {
        digitsArray[i] = tempNumber % 10;
        tempNumber /= 10;
    }

    // Вывод массива
    std::cout << "Digits Array: ";
    print_array(digitsArray, digitsCount);
}

int main() {
    // 1)
    // int arr[] = {1, 2, -23, 3, 132, 43, 34, 234, 42, -42, 0};
    // ex_1(arr, std::size(arr));

    // 2)
    // int arr[] = {-3, 12, 43, 34, 24, 42, -42, 0};
    // ex_2(arr, std::size(arr));

    // 3)
    // int arr3[] = {1, 2, 3, 4, 5};
    // ex_3(arr3, std::size(arr3));

    // 4)
    // ex_4();

    // 5)
    // int arr5[] = {1, 2, 3, 4, 5, 6};
    // ex_5(arr5, std::size(arr5));

    // 6) - 7)
    // int arr6[] = {34, 21, 45, -32, 0, 2};
    // ex_6_7(arr6, std::size(arr6));

    // 8)
    // int arr8[] = {1, 2, 3, 4, 5, 6};
    // ex_8(arr8, std::size(arr8));

    // 9)
    // int arr9[] = {34, 21, 45, -32, 0, 2};
    // ex_9(arr9, std::size(arr9));

    // 10)
    // int arr10[] = {34, 21, 45, -32, 0, 2};
    // ex_10(arr10, std::size(arr10));

    // 11)
    // int arr11[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    // ex_11(arr11, std::size(arr11));

    // 13)
    // char arr13[] = {'a', 'B', 'E', 't', 'd', 'u'};
    // ex_13(arr13, std::size(arr13));

    // 14)
    ex_14(123456789);

    return 0;
}
