/*----- Part 2: Arrow Functions -----*/

/*
Exercise 3: Array Methods with Arrow Functions
Create a file named exercise2.js with the following:
*/


// Create an array of numbers:
const numbers = [1, 2, 3, 4, 5];

// Use an arrow function with map() to square each number
const squared = numbers.map(num => {
    return num * num;
});

// Use an arrow function with filter() to get only even numbers
const evens = numbers.filter(num => {
    return num % 2 === 0;
});

// Use an arrow function with reduce() to sum all numbers
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Squared:", squared);
console.log("Even numbers:", evens);
console.log("Sum:", sum);