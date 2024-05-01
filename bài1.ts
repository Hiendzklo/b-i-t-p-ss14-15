class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course): void {
        this.enrolledCourses.push(course);
        console.log(`${this.name} enrolled in course: ${course.title}`);
    }
}

class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string): Course {
        console.log(`${this.name} created course: ${title}`);
        return new Course(title, this);
    }

    createLesson(title: string): Lesson {
        console.log(`Lesson "${title}" created by ${this.name}`);
        return new Lesson(title);
    }

    createAssignment(title: string): string {
        console.log(`Assignment "${title}" created by ${this.name}`);
        return title;
    }

    createAssessment(title: string): string {
        console.log(`Assessment "${title}" created by ${this.name}`);
        return title;
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }

    addLesson(lesson: Lesson): void {
        this.lessons.push(lesson);
    }

    addAssessment(assessment: string): void {
        this.assessments.push(assessment);
    }
}

class Lesson {
    title: string;
    assignments: string[];

    constructor(title: string) {
        this.title = title;
        this.assignments = [];
    }

    addAssignment(assignment: string): void {
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
