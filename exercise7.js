/*----- Part 4: Object.create() and Prototypes -----*/

/*
Exercise 8: Method Overriding
*/

// Create a shape object with a method calculateArea() that returns 0
const shape = {
    calculateArea() {
        return 0;
    }
};

// Create a rectangle object using Object.create(shape) with width and height properties
// Override the calculateArea() method in rectangle to return width * height
const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;
rectangle.calculateArea = function() {
    return this.width * this.height;
};

// Create a circle object using Object.create(shape) with a radius property
// Override the calculateArea() method in circle to return π * radius²
const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// Test both objects to demonstrate method overriding
console.log("Shape area:", shape.calculateArea()); // 0
console.log("Rectangle area:", rectangle.calculateArea()); // 20
console.log("Circle area:", circle.calculateArea().toFixed(2)); // 78.54

// Expected output:
// Rectangle area: 20
// Circle area: 78.54