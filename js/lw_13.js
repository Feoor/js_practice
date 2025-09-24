// 1
async function getPost(postId) {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
  console.log(`Статус запроса: ${response.statusText}`);

  let data = await response.json();
  console.log({ title: data.title, body: data.body });
}

// getPost(1);

// 2
async function getUsersName() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  let users = [];
  for (let user of data) {
    users.push(user.name);
  }

  console.log(users);
}

// getUsersName();

// 3
async function getRandomDogImg() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();

  console.log(`Dog img url: ${data.message}`);
}

// getRandomDogImg();

// 4
async function getRates() {
  let response = await fetch("https://v6.exchangerate-api.com/v6/8be20e5de8ab11f1bc291782/latest/USD");
  let data = await response.json();

  console.log(`Курс USD к EUR: ${data.conversion_rates.EUR} €`)
  console.log(`Курс USD к JPY: ${data.conversion_rates.JPY} ¥`)
}

// getRates();

// 5
async function unknownUrl() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/unknown");
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    let data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(`Ошибка: ${err}`);
  }
}

unknownUrl();
