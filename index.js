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
  const printNumber = () => {
    console.log(numbers[i]);
  };
  printNumber();
}

// Exercise 1.5
setTimeout(() => {
  console.log("Hello, waited 3 seconds!");
}, 3000);
