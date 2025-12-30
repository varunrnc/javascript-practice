const users = [
  { name: "Ravi", age: 17 },
  { name: "Neha", age: 21 },
  { name: "Aman", age: 19 },
  { name: "Pooja", age: 16 }
];

// 1. Get users age >= 18
// 2. Return only names
// 3. Sort by age ASC
// 4. Final output: ["Aman", "Neha"]

const result = users
.filter(user => user.age >= 18)
.sort((a, b) => a.age - b.age)
.map(user => user.name);

console.log(result);
