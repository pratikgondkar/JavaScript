// let myName = "Pratik     "
// let myChannel = "chai     "

// console.log(myName.length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pratik = function() {
    console.log(`pratik is present in all objects`);
}

Array.prototype.heyPratik = function() {
    console.log(`Pratik Says hello`);
}

// heroPower.pratik()
// myHeros.pratik()
// myHeros.heyPratik()
// heroPower.heyPratik()  * they can not access


// +++++++++++++++ inheritance ++++++++++++++++

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"pratik    ".trueLength()
"chai   ".trueLength()
