# ABOUT

This repo is for Sprint 2 of React - JavaScript 1
The first index.js and index.html are aiming to solve the first part of the sprint.
The eCommerce directory, has its own README and will be used to resolve the second part of the sprint.

## ARROW FUNCTIONS

### Level 1 Exercises

1. Create an arrow function that adds two numbers
2. Create a function called randomNumber that takes no parameter and returns a random number between 0 and 100
3. Create a person class that has a name property and a greet function. This should print the person's name. Ex. console.log(Hello, ${this.name})

### Level 2 Exercises

1. Create an arrow function within a loop. Call it 'printNumbers' that accepts an array of numbers and uses a for loop to print each number to the console using an arrow function

### Level 3 Exercises

1. Arrow function setTimeout: create a function that prints a message to the console after waiting 3 seconds

## TERNARY OPERATOR

### Level 1 Exercises

1. Write a 'canDrive' funciton that accepts age as a parameter and uses the ternary operator to determine whether the user can drive. If age is >= 18 = "You can drive" ? "You cannot drive"
2. Use comparison operator, compare two numbers if num1 > return num1 is greater if not, num2 is greater

### Level 2 Exercises

1. Link ternary operator: write an expression that uses links of ternary operators to detemrine whether a number is positive, negative, or zero
2. Create a findMaximum function that accepts three parameters (a,b,c) use the ternary operator to determine the max value

### Level 3 Exercises

1. Create oddOrEven function that accepts an array of numbers and uses a for loop to iterate through the array. Inside the loop use the ternary operator to determine if each number is odd or even

## CALLBACKS

### Level 1 Exercises

1. Write a callback function called process that accepts two parameters, (number, cb). The function must call the cb function, passing the number as parameter
2. Write a calculator function that accepts three parameters, (num1,num2,cb). The function must call the cb with the two numbers as parameter.

### Level 2 Exercises

1. Async function: write waitForHello function that accepts (name,cb). The function must then wait 2 seconds and then invoke the cb. Passing the name as parameter
2. With Arrays: write processElements function that accepts (array,cb). The process must call the cb for each element of the array

### Level 3 Exercises

1. Write processString, it accepts (string, cb). The function must convert the string to uppercase and then call the cb with the transformed string

## REST & SPREAD

### Level 1 Exercises

1. Create two arrays, use the spread operator to create a third array containing all the elements of both created arrays

2. Create a 'sum' function that uses the rest operator to accept an undetermined number of arguments and return their sum

### Level 2 Exercises

1. Create an object, then create another one which is a copy of the first. Change a property of the second without changing it in the first
2. Create an array with several items, asign the first 2 to variables, and the rest to another

### Level 3 Exercises

1. Create a function that accepts three parameters and call the function using the spread operator with that array

2. Create two objects with different properties, ue the spread operator to merge them

## ARRAY TRANSFORMATIONS

### Level 1 Exercises

1. Map: Create a new array containing the square of each number
2. Filter: Create a new array containing the even numbers
3. Find: Use the find method to find the first number that is greater than 10
4. Reduce: Calculate the total sum of the numbers

### Level 2 Exercises

1. Create a one-line function that filters > 10, multiplies by 2, calculates the sum, returns value

### Level 3 Exercises

1. Every/Some: use both to determine if all or some of the elements in the array are > 10

## ARRAY LOOP

### Level 1 Exercises

1. forEach: have an array of names, use forEach to print each name
2. forOff: use it to print each name to the console
3. use filter to create a new array that contains only the even numbers

### Level 2 Exercises

1. forIn: use a forIn loop to print each key and its value to console
2. forOf with break: print the numbers of an array but stop at 5

### Level 3 Exercises

1. forOf with index: use a forLoop to print the console element of the array and its index

## PROMISES & ASYNC/AWAIT

### Level 1 Exercises

1. create a promise that resolves after 2 seconds ands returns 'Hello, world'
2. Use the previous promise, create a .then that prints the result to console
3. Create a promise that resolves after 2 seconds if the text is 'Hello, world', if not, reject it
4. Use async/await to wait for the promise created in 1.

### Level 2 Exercises

1. Error Handle: Modify the function 4. Use a try/catch block to look for possible errors

### Level 3 Exercises

1. Promise.all: create 2 promises that resolve after 2, 3 seconds. Use promise.all to wait for both promises to resolve and print to console
