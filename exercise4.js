/*----- Part 3: Object Literals -----*/

/*
Exercise 5: Dynamic Property Access
*/

// Create a book object with properties: title, author, year, and isbn
const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    isbn: '978-0596517748'
};

// Write a function displayProperty(obj, propertyName) that prints the property value
function displayProperty(obj, propertyName) {

    // Use bracket notation: obj[propertyName]
    if (propertyName in obj) {
        console.log(obj[propertyName]);
    } else {
        console.log(`Property "${propertyName}" not found`);
    }
}

// Write a function updateProperty(obj, propertyName, newValue) that updates a property
function updateProperty(obj, propertyName, newValue) {
    if (propertyName in obj) {
        obj[propertyName] = newValue;
        console.log(`Updated ${propertyName} to: ${newValue}`);
    } else {
        console.log(`Cannot update - property "${propertyName}" doesn't exist`);
    }
}

// Test both functions with different properties
displayProperty(book, 'title');
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');