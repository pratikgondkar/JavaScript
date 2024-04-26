/* Primittive */

// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const BigNumber = 3258755984

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Pratik",
    age: 22
}

const myFunction = function() {
    // console.log("Hello World");
}

// console.log(typeof BigNumber);


// Reference (Non Primittive)

// Array, Object, Functions


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Primitive), Heap (Non Primitive)

let myYoutubeChannelName = "pratikgondkardotcom"
let anotherName = (myYoutubeChannelName)

anotherName = "RadhaGondkar"

console.log(myYoutubeChannelName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pratik@google.com"

console.log(userOne.email)
console.log(userTwo.email)