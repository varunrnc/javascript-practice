const students = [
    { name: "Rahul", marks: 70 },
    { name: "Vikas", marks: 60 },
    { name: "Ram", marks: 45 },
    { name: "Kamal", marks: 85 }
];

// Task 1
const studentsNameUpperCase = students.map(student => student.name.toUpperCase());
console.log(studentsNameUpperCase);

// Task 2
const passStudents = students.filter(student => student.marks >= 60);
console.log(passStudents);

// Task 3
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log(totalMarks);

// Task 4
const topperStudent = students.reduce((topper, curr) =>
    curr.marks > topper.marks ? curr : topper
);
console.log(topperStudent);
