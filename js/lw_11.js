// 1
const promise1 = Promise.resolve(5);
promise1
  .then(res => {
    res *= 2;
    return res;
  })
  .then(res => {
    res += 3;
    return res;
  })
  .then(res => {
    console.log(res)
  });

// 2 - 3
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, ms)
  });
}

const p1 = delay(1000, "Первый промис завершен");
const p2 = delay(2000, "Второй промис завершен");
const p3 = delay(3000, "Третий промис завершен");

Promise.all([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err);
  })

// 4
const promiseWithError = Promise.resolve(123);
promiseWithError
  .then(res => {
    res *= 2;
    return res;
  })
  .then(res => {
    console.log(res)
    throw new Error("Ошибка");
  })
  .catch(err => {
    console.log(`Произошла ошибка при обработке: ${err}`);
  })

// 5
Promise.race([
  delay(1000, "Быстрый"),
  delay(3000, "Медленный")
])
  .then((result) => console.log(`Результат: ${result}`))
