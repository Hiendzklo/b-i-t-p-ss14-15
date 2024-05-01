"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} enrolled in course: ${course.title}`);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        console.log(`${this.name} created course: ${title}`);
        return new Course(title, this);
    }
    createLesson(title) {
        console.log(`Lesson "${title}" created by ${this.name}`);
        return new Lesson(title);
    }
    createAssignment(title) {
        console.log(`Assignment "${title}" created by ${this.name}`);
        return title;
    }
    createAssessment(title) {
        console.log(`Assessment "${title}" created by ${this.name}`);
        return title;
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
// Tạo các thực thể để kiểm tra
const student1 = new Student(1, "Alice");
const instructor1 = new Instructor(101, "Bob");
const course1 = instructor1.createCourse("JavaScript Basics");
const lesson1 = instructor1.createLesson("Introduction to JavaScript");
const lesson2 = instructor1.createLesson("Variables and Data Types");
const assessment1 = instructor1.createAssessment("Mid-term Exam");
const assignment1 = instructor1.createAssignment("Variables Exercise");
course1.addLesson(lesson1);
course1.addLesson(lesson2);
course1.addAssessment(assessment1);
lesson1.addAssignment(assignment1);
student1.enroll(course1);
