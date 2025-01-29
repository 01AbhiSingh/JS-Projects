class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Courses: ${this.courses.map(c => c.name).join(", ")}`;
    }
}

class Course {
    constructor(code, name, credits) {
        this.code = code;
        this.name = name;
        this.credits = credits;
    }

    getDetails() {
        return `Course Code: ${this.code}, Name: ${this.name}, Credits: ${this.credits}`;
    }
}

class Grade {
    constructor(student, course, grade) {
        this.student = student;
        this.course = course;
        this.grade = grade;
    }

    getDetails() {
        return `Student: ${this.student.name}, Course: ${this.course.name}, Grade: ${this.grade}`;
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
    }

    addStudent(id, name, email) {
        const student = new Student(id, name, email);
        this.students.push(student);
        return student;
    }

    addCourse(code, name, credits) {
        const course = new Course(code, name, credits);
        this.courses.push(course);
        return course;
    }

    enrollStudent(student, course) {
        student.enroll(course);
    }

    assignGrade(student, course, grade) {
        const gradeEntry = new Grade(student, course, grade);
        this.grades.push(gradeEntry);
        return gradeEntry;
    }

    calculateGPA(student) {
        let totalCredits = 0;
        let totalGradePoints = 0;

        this.grades.forEach((gradeEntry) => {
            if (gradeEntry.student.id === student.id) {
                const gradePoint = this.convertGradeToPoint(gradeEntry.grade);
                totalGradePoints += gradePoint * gradeEntry.course.credits;
                totalCredits += gradeEntry.course.credits;
            }
        });

        return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    }

    convertGradeToPoint(grade) {
        const gradeMap = {
            A: 4.0,
            B: 3.0,
            C: 2.0,
            D: 1.0,
            F: 0.0,
        };
        return gradeMap[grade] || 0.0;
    }

    displayStudents() {
        this.students.forEach((student) => {
            console.log(student.getDetails());
        });
    }

    displayCourses() {
        this.courses.forEach((course) => {
            console.log(course.getDetails());
        });
    }

    displayGrades() {
        this.grades.forEach((grade) => {
            console.log(grade.getDetails());
        });
    }
}

// Instantiate the system
const sms = new StudentManagementSystem();

// Add students
const student1 = sms.addStudent(1, "Alice", "alice@example.com");
const student2 = sms.addStudent(2, "Bob", "bob@example.com");

// Add courses
const course1 = sms.addCourse("CS101", "Introduction to Computer Science", 3);
const course2 = sms.addCourse("MATH101", "Calculus", 4);

// Enroll students in courses
sms.enrollStudent(student1, course1);
sms.enrollStudent(student1, course2);
sms.enrollStudent(student2, course1);

// Assign grades
sms.assignGrade(student1, course1, "A");
sms.assignGrade(student1, course2, "B");
sms.assignGrade(student2, course1, "C");

// Display all students, courses, and grades
sms.displayStudents();
sms.displayCourses();
sms.displayGrades();

// Calculate GPA for a student
console.log(`GPA for ${student1.name}: ${sms.calculateGPA(student1)}`);
console.log(`GPA for ${student2.name}: ${sms.calculateGPA(student2)}`);
