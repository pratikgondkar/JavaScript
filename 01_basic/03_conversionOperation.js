// let score = "33"  //33
// let score = "33abc"  //NaN
// let score = null //0
// let score = undefined //NaN
let score = true //true => 1 / false => 0

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = "Pratik"
let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Pratik" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************************************* Operations ****************************************

let value = 3
let negvalue = -value
// console.log(negvalue)

let str1 = "Pratik "
let str2 = "Gondkar"

let str3 = (str1 + str2)
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

let gameCounter = 100
gameCounter++;
console.log(gameCounter) //101


