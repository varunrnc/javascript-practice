const students = [
  { name: "Rahul", marks: 70 },
  { name: "Vikas", marks: 45 },
  { name: "Amit", marks: 88 },
  { name: "Neha", marks: 60 }
];

// 1. Get only passed students (>=60)
const result = students
.filter(student => student.marks >= 60)
.sort((a,b) => b.marks - a.marks)
.map(student => student.name);
console.log(result);

// 2. Sort them by marks DESC
// const marksDsc = students.sort((a,b) => b.marks - a.marks);
// console.log(marksDsc);

// 3. Return only names
// const studentsName = students.map(student => student.name);
// console.log(studentsName);

