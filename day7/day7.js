console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// task 1 - 1,4,3,2

async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
  }
  
  console.log("C");
  test();
  console.log("D");

  // task 2 - C, A, D, B

  console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// task 3 - start, end, promise, timeout