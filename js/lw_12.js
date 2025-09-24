async function hello() {
  return "Hello, async!";
}

async function testHello() {
  const res = await hello();
  console.log(res)
}

hello().then(res => console.log(res))
testHello();


// 2
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, ms)
  });
}

async function testDelay() {
  const delay1 = await delay(1000, "Первый await");
  console.log(delay1);
  const delay2 = await delay(2000, "Второй await");
  console.log(delay2);
  const delay3 = await delay(1500, "Третий await");
  console.log(delay3);
}
testDelay();

// 3
async function testPromiseReturn(value) {
  return Promise.resolve(value);
}

testPromiseReturn(100).then(result => console.log(result))

// 4
async function testReject() {
  try {
    await new Promise((res, rej) => {
      setTimeout(() => {
        rej("Ошибка")
      }, 1000)
    })
  } catch (error) {
    console.log(`Ошибка обработки: ${error}`);
  }
}
testReject();

// 5
async function testReturn(value) {
  value += " → step1";
  value += " → step2";
  return value;
}
testReturn("start").then(res => console.log(res));
