/*----- Part 4: Object.create() and Prototypes -----*/

/*
Exercise 9: Library Management System (Challenge)
*/

// Create a library object with properties: name and books (empty array)
const library = {
    name: 'City Library',
    books: [],

// Add a method addBook(title, author, isbn) that creates a book object and adds it to books
    addBook(title, author, isbn) {
        // Create book object and push to books array
       const book = {
            title,
            author,
            isbn
        };
        this.books.push(book);
        return book;
    },

    // Add a method findBookByTitle(title) that returns the book object or null
    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    // Add a method listAllBooks() that prints all book titles
    listAllBooks() {
        console.log(`${this.name} - All Books:`);
        if (this.books.length === 0) {
            console.log("No books in library");
        } else {
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" by ${book.author} (ISBN: ${book.isbn})`);
            });
        }
    },

    // Bonus: Add a method to search books by author using an arrow function with filter()
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
};

// Create a universityLibrary object using Object.create(library)
const universityLibrary = Object.create(library);
universityLibrary.name = 'University Library';
universityLibrary.courses = []; // Add a courses property (array) to universityLibrary

// Add a method addCourseBook(courseName, title, author, isbn) that adds both the course and book
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    // Add the book to the library
    const book = this.addBook(title, author, isbn);
    
    // Check if course exists, if not add it
    if (!this.courses.includes(courseName)) {
        this.courses.push(courseName);
    }
    
    console.log(`Added "${title}" to ${courseName} course`);
    return { book, course: courseName };
};

// Test all methods with at least 3 books
console.log("=== Testing Library Methods ===");

// Add books to universityLibrary
universityLibrary.addBook('Calculus', 'James Stewart', '978-1285740621');
universityLibrary.addBook('Chemistry', 'Raymond Chang', '978-0078021510');
universityLibrary.addBook('Physics', 'David Halliday', '978-1118230718');

// Add course-specific books
universityLibrary.addCourseBook('CS101', 'Intro to Programming', 'John Smith', '978-0131103627');
universityLibrary.addCourseBook('CS101', 'Data Structures', 'Jane Doe', '978-0262033848');
universityLibrary.addCourseBook('MATH201', 'Linear Algebra', 'Gilbert Strang', '978-0980232776');

console.log("\n=== Listing All Books ===");
universityLibrary.listAllBooks();

console.log("\n=== Finding Books ===");
console.log("Find 'Physics':", universityLibrary.findBookByTitle('Physics'));
console.log("Find 'Non-existent':", universityLibrary.findBookByTitle('Non-existent'));

console.log("\n=== Bonus: Find Books by Author ===");
console.log("Books by 'Jane Doe':", universityLibrary.findBooksByAuthor('Jane Doe'));
console.log("Books by 'Gilbert Strang':", universityLibrary.findBooksByAuthor('Gilbert Strang'));

console.log("\n=== University Library Specific ===");
console.log("Courses offered:", universityLibrary.courses);
console.log("Library name:", universityLibrary.name);

// Testing inheritance
console.log("\n=== Testing Inheritance ===");
console.log("Is library prototype of universityLibrary?", library.isPrototypeOf(universityLibrary)); // true
console.log("University library owns 'courses'?", Object.hasOwn(universityLibrary, 'courses')); // true
console.log("University library owns 'addCourseBook'?", Object.hasOwn(universityLibrary, 'addCourseBook')); // true
console.log("University library inherits 'addBook'?", 'addBook' in universityLibrary && !Object.hasOwn(universityLibrary, 'addBook')); // true