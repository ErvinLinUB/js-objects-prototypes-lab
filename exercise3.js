/*----- Part 3: Object Literals -----*/

/*
Exercise 4: Creating and Modifying Object Literals
*/

// Create an object literal with properties: firstName, lastName, studentId, and courses (empty array)
const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

    // Add a method called getFullName() that returns the full name
    getFullName() {
        return `${student.firstName} ${student.lastName}`;
    },

    // Add a method called enrollCourse(courseName) that adds a course to the courses array
    enrollCourse(courseName) {
        student.courses.push(courseName);
    },

    // Add a method called getCourseCount() that returns the number of enrolled courses
    getCourseCount() {
        return student.courses.length;
    }
};

// Test all methods with appropriate console.log statements
console.log(student.getFullName());
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount()); // Expected: 2