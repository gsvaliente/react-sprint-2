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

const person = new Person("Gabriel");
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
    console.log("Hello, waited 3 seconds!");
  }, 3000);
};
printInSeconds();

// TERNARY OPERATOR
// Exercise 2.1
function canDrive(age) {
  return age >= 18 ? "You can drive!" : "You can't drive!";
}

// Exercise 2.2
function compareNums(num1, num2) {
  return num1 > num2 ? `${num1} is greater` : `${num2} is greater`;
}

// Exercise 2.3
function explainNum(num) {
  return num === 0 ? "zero" : num < 0 ? "negative" : "positive";
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
