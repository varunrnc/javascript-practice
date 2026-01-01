// 🧠 CONCEPT 1: Callback (OLD STYLE ❌)

function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((result) => {
    console.log(result);
});

// 🧠 CONCEPT 2: Promise (MODERN ✅)
// 🔹 Promise Structure
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
        console.log('T C');

    } else {
        reject("Task failed");
        console.log('T F');
    }
});



// 🔹 Consume Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 🧠 CONCEPT 3: async / await (BEST PRACTICE 🔥)
async function runTask() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

runTask();


// 🧠 CONCEPT 4: Fetch API (REAL-WORLD)
async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchUsers();
