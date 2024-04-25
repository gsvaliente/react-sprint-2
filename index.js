// Exercise 1.1
const add = (a, b) => a + b;
console.log(add(3, 2));

// Exercise 1.2
const randomNumber = () => Math.floor(Math.random(0, 100) * 100);
console.log(randomNumber());

// Exercise 1.3
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person('Gabriel');
person.greet();

// Exercise 1.4
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  const printNumber = (list) => {
    console.log(list[i]);
  };
  printNumber(numbers);
}

// Exercise 1.5
const printInSeconds = () => {
  setTimeout(() => {
    console.log('Hello, waited 3 seconds!');
  }, 3000);
};
printInSeconds();

// TERNARY OPERATOR
// Exercise 2.1
function canDrive(age) {
  return age >= 18 ? 'You can drive!' : "You can't drive!";
}

// Exercise 2.2
function compareNums(num1, num2) {
  return num1 > num2 ? `${num1} is greater` : `${num2} is greater`;
}

// Exercise 2.3
function explainNum(num) {
  return num === 0 ? 'zero' : num < 0 ? 'negative' : 'positive';
}

// Exercise 2.4
function findMax(a, b, c) {
  return a > b && a > c ? a : b > a && b > c ? b : c;
}

// Exercise 2.5
function oddOrEven(list) {
  for (let i = 0; i < list.length; i++) {
    const info = list[i] % 2 === 0 ? `${list[i]} is even` : `${list[i]} is odd`;
    console.log(info);
  }
}

// CALLBACKS
// Exercise 3.1
const process = (num, cb) => {
  cb(num);
};

const printNumber = (num) => {
  console.log(num);
};

process(9, printNumber);

// Exercise 3.2
const calculator = (num1, num2, cb) => {
  console.log(cb(num1, num2));
};

calculator(3, 8, add);

// Exercise 3.3
const waitForHello = (name, cb) => {
  setTimeout(() => {
    cb(name);
  }, 2000);
};

const printName = (name) => {
  console.log(`Hello, my name is ${name}`);
};

waitForHello('Gabriel', printName);

// Exercise 3.4
const animals = ['cat', 'dog', 'fish', 'bird', 'rabbit'];
const processElements = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const printElement = (el) => {
  console.log(el);
};

processElements(animals, printElement);

// Exercise 3.5
const randomWord = 'helloworld';

const processString = (str, cb) => {
  const newWord = str.toUpperCase();
  cb(newWord);
};

processString(randomWord, printElement);

// SPREAD AND REST OPERATORS
// Exercies 4.1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combinedArrays = [...arr1, ...arr2];
console.log(combinedArrays);
// Exercise 4.2
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Exercise 4.3
const user = {
  name: 'Gabriel',
  age: 25,
  country: 'El Salvador',
};

const user2 = { ...user };
user2.age = 31;
console.log({ user, user2 });

// Exercise 4.4
const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = randomArray;

// Exercise 4.5
const colors = ['red', 'blue', 'green'];

const printColors = (color1, color2, color3) => {
  console.log(color1, color2, color3);
};
printColors(...colors);

// Exercise 4.6
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2015,
};
const looks = {
  color: 'black',
  rims: 'silver',
};

const newCar = { ...car, ...looks };
console.log(newCar);

// ARRAY TRANSFORMATION
// Exercise 5.1
const mapArray = [1, 2, 3, 4];
const mappedArray = mapArray.map((num) => num * 2);

// Exercise 5.2
const filterArray = [1, 2, 3, 4];
const filteredArray = filterArray.filter((num) => num % 2 === 0);

// Exercise 5.3
const findArray = [1, 10, 8, 11];
const foundArray = findArray.find((num) => num > 10);

// Exercise 5.4
const reduceArray = [13, 7, 8, 21];
const reducedArray = reduceArray.reduce((acc, curr) => acc + curr, 0);

// Exercise 5.5
const oneLineArray = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const megaArray = () =>
  oneLineArray
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, curr) => acc + curr, 0);
console.log(megaArray());

// Exercise 5.6
const everySomeArray = [11, 12, 13, 14];

const everyArray = everySomeArray.every((num) => num > 10);

const someArray = everySomeArray.some((num) => num > 10);

// ARRAY LOOPS
// Exercise 6.1
const names = ['Anna', 'Bernat', 'Clara'];

names.forEach((name) => console.log(name));

// Exercise 6.2
for (const name of names) {
  console.log(name);
}

// Exercise 6.3
const filterArray2 = [1, 2, 3, 4, 5, 6];

const filteredArray2 = filterArray2.filter((num) => num % 2 === 0);
console.log(filteredArray2);

// Exercise 6.4
const forInObject = {
  name: 'Gabriel',
  age: 31,
  country: 'El Salvador',
};

for (const key in forInObject) {
  console.log(key, forInObject[key]);
}

// Exercise 6.5
for (const num of filterArray2) {
  if (num > 5) break;
  console.log(num);
}

// Exercise 6.6
for (const [idx, name] of names.entries()) {
  console.log(name, idx);
}

// PROMISES AND ASYNC/AWAIT
// Exercise 7.1
const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello, world');
  }, 2000);
});

// Exercise 7.2
firstPromise.then((res) => console.log(res));

// Exercise 7.3
const getValidation = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'Hello') {
        resolve('Success');
      }
      reject('Error');
    }, 2000);
  });
};
getValidation('Hello')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Exercise 7.4
const asyncFunction = async () => {
  const res = await firstPromise;
  console.log(res);
};
asyncFunction();

// Exercise 7.5
const asyncFunction2 = async () => {
  try {
    const res = await firstPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// Exercise 7.6
const promiseWait1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('first promise');
  }, 2000);
});

const promiseWait2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('second promise');
  }, 3000);
});

Promise.all([promiseWait1, promiseWait2]).then((res) => console.log(res));
