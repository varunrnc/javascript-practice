// Day 6 TASKS (VERY IMPORTANT)
// Task 1: Create a Promise

const checkAge = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve('Allowed');
        } else {
            reject('Not Allowed');
        }
    });
}

// then catch

// checkAge(10)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// async await
async function verifyAge(age) {
    try {
        const result = await checkAge(age);
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

verifyAge(19)


// Step 1: Fake API function
function fetchProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Laptop", price: 50000 });
        }, 2000);
    })
}


// Step 2: Consume using async/await
// async function getProduct() {
//     try{
//         const product = await fetchProduct();
//         console.log(product);
        
//     }catch(error){
//         console.log(error);
//     }
// }

// getProduct();

// fetchProduct()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

