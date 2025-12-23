// day1.js

// task 1 – Warm-up
let name = "Barun";
const role = "Web Developer";

function intro(name, role){
    return `Hi, I am ${name} and I am a ${role}`;
}

console.log(intro(name, role));

// task 2 - Real-World Thinking (IMPORTANT)
const students = [
    {name: "Rahul", marks: 70},
    {name: "Vikas", marks: 60},
    {name: "Ram", marks: 45},
    {name: "Kamal", marks: 85},
];

// print all students name
console.log('List of All Students: ');

for(student of students){
    // console.log(`Name: ${student['name']}`);
    console.log(`Name: ${student.name}`);
}

// list of those students who pass (marks >= 60)
console.log('List of Those Students who have marks >= 60: ');
for(student of students){
    if(student.marks >= 60){
        console.log(`Name: ${student.name}`);
        
    }
}

// highest marks of student
console.log('Highest Marks student: ');
let highestMarks = students[0].marks;
for(student of students){
    if(student.marks > highestMarks){
        highestMarks = student.marks;
    }
}
console.log(highestMarks);

// write a function checkEvenOdd

function checkEvenOdd(num){
    if((num % 2) === 0 ){
        console.log('even');
        
    }else{
        console.log('odd');
        
    }
}

checkEvenOdd(7); // odd
checkEvenOdd(10); // even



