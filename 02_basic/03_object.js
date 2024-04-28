// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "pratik",
    "Full Name" : "Pratik Gondkar",
    [mySym]: "myKey1",
    email: "pratik@google.com",
    age: 22,
    location: "Nagpur",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log( JsUser[mySym]);

JsUser.email = "pratik@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "pratik@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


