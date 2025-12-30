// call
function greet(city) {
    console.log(this.name, city);

}
const user = { name: 'Varun' };
// greet.call(user, "Ranchi");

// apply
// greet.apply(user, ['Ranchi']);

// bind
const boundGreet = greet.bind(user);
// boundGreet("Bokaro");

// Q1
function outer() {
    let x = 10;
    return function inner() {
        console.log(x);
    };
}

const fn = outer();
fn();

// Q2
const obj = {
    name: "Rahul",
    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 100);
    }
};

obj.greet();

// FIX the issue so output is "Rahul"