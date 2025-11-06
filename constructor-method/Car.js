class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car('Ford', 1997);
console.log(`My Car  is ${myCar.age()} year old.`);
