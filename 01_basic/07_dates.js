// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 24)
// let myCreateDate = new Date(2024, 0, 24, 5, 30)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp =   Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());