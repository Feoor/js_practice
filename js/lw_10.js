// 1 - 4
function loadDat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { data: "Данные загружены"};
      const result = (Math.random() >= 0.5); // 3 Задание

      if (result) {
        resolve(data);
      } else {
        reject(new Error("Ошибка загрузки"));
      }
    }, 3000)
  })
}

const promise1 = loadDat();
promise1
  .then(data => {
    console.log(data);
    return data;
  })
  // 2 Задание
  .then(data => {
    data.data += " — обработано"
  })
  .catch(error => {
    console.log(error);
  })
  // 4 Задание
  .finally(() => {
    console.log("Операция завершена.");
  })

