/*----- Part 4: Object.create() and Prototypes -----*/

/*
Exercise 7: Multi-Level Prototype Chain
*/

// Create a person object with properties: species ('Human') and a method breathe()
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

// Create an employee object that inherits from person, add: company and position properties
const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

// Create a manager object that inherits from employee, add: department and team (array) properties
const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

// Add a method to manager called addTeamMember(name) that adds to the team array
manager.addTeamMember = function(name) {
    this.team.push(name);
    return `Added ${name} to the team`;
};

// Demonstrate the prototype chain by accessing properties from all levels
console.log("=== Accessing properties from manager ===");
console.log("Manager's own property - department:", manager.department); // Direct
console.log("From employee - position:", manager.position); // Inherited from employee
console.log("From employee - company:", manager.company); // Inherited from employee
console.log("From person - species:", manager.species); // Inherited from person
console.log("From person - breathe():", manager.breathe()); // Inherited from person

// Test the addTeamMember method
console.log("\n=== Testing addTeamMember method ===");
console.log(manager.addTeamMember('Alice'));
console.log(manager.addTeamMember('Bob'));
console.log("Team members:", manager.team);

// Check inheritance chain
console.log("\n=== Checking prototype chain ===");
console.log("Is employee prototype of manager?", employee.isPrototypeOf(manager)); // true
console.log("Is person prototype of manager?", person.isPrototypeOf(manager)); // true
console.log("Is person prototype of employee?", person.isPrototypeOf(employee)); // true

// Check own vs inherited properties
console.log("\n=== Own vs inherited properties ===");
console.log("manager owns 'department':", Object.hasOwn(manager, 'department')); // true
console.log("manager owns 'position':", Object.hasOwn(manager, 'position')); // false
console.log("manager owns 'species':", Object.hasOwn(manager, 'species')); // false
console.log("manager owns 'addTeamMember':", Object.hasOwn(manager, 'addTeamMember')); // true

// Prototype chain should be:
// manager -> employee -> person -> Object.prototype -> null