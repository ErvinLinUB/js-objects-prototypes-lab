/*----- Part 4: Object.create() and Prototypes -----*/

/*
Exercise 6: Basic Prototype Chain
*/

// Create an object literal called vehicle with properties: wheels (4) and a method describe()
const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

// Use Object.create(vehicle) to create a car object
const car = Object.create(vehicle);

// Add properties to car: make, model, and year
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

// Call the describe() method on car (inherited from vehicle)
// Use Object.hasOwn() to check which properties belong directly to car vs. inherited

// Expected checks:
console.log(Object.hasOwn(car, 'make')); // true
console.log(Object.hasOwn(car, 'wheels')); // false
console.log(car.wheels); // 4 (from prototype)
console.log(car.describe()); // method from vehicle