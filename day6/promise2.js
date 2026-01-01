// Promise Structure
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve('Task Completed');
    }else{
        reject('Task Failed');
    }
});

// Promise Consume
// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// async await
async function runTask() {
    try{
        const result = await myPromise;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

runTask();