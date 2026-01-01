// Day 5 TASKS (VERY IMPORTANT)
// ask 1: Fix this Bug
const obj = {
  name: "Kamal",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 500);
  }
};

obj.greet();

// Output should be: Kamal

// Task 2: Closure Counter

function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
        
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// console.log(a);
// let a = 10;

// reference error because let / const does not hoisted 

const user = {
  age: 25,
  normal: function () {
    console.log(this.age);
  },
  arrow: () => {
    console.log(this.age);
  }
};
console.log('normal');
user.normal(); // 25
console.log('arrow');
user.arrow();  // undefined
