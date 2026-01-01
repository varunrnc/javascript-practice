// Promises in JavaScript
const pobj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
    }, 2000);
});

const getBioData = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: "Varun",
                age: 26
            }
            resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old.`);
        }, 2000, indexdata);
    });
}

// pobj1.then((roll_no1) => {
//     console.log(roll_no1);
//     return getBioData(roll_no1[1]);
// }).then((biodata)=>{
//     console.log(biodata);
// }).catch((error)=>{
//     console.log(error);
// });

// async await in javascript
async function getData(){
    const rollnodata = await pobj1;
    console.log(rollnodata);
    const biodatas = await getBioData(rollnodata[1]);
    console.log(biodatas);
}

getData();