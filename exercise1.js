/*
Exercise 1: Function Declarations

Write a function declaration named calculateArea that takes length and width
parameters and returns their product
*/

function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 10)); // Expected: 50
console.log(calculateArea(7, 3)); // Expected: 21
console.log(calculateArea(4, 4)); // Expected: 16

/*
Exercise 2: Function Expressions

Create a function expression named calculatePerimeter that takes length and width
parameters and returns the perimeter (2 * length + 2 * width)
*/

const calculatePerimeter = function(length, width) {
    return 2 * length + 2 * width;
};

console.log(calculatePerimeter(5, 10)); // Expected: 30
console.log(calculatePerimeter(7, 3)); // Expected: 20
console.log(calculatePerimeter(4, 4)); // Expected: 16