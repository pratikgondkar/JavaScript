/* this => current context */

const user = {
    userName: "Pratik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let userName = "Pratik"
//     // console.log(this.userName);
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let userName = "Pratik"
//     console.log(this.userName);
// }
// chai()

const chai = () => {
    console.log(this);
}
// chai();

// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

// const addTwoNum = (num1, num2) => num1 + num2 /* Implsite return */ 
// const addTwoNum = (num1, num2) => (num1 + num2)
const addTwoNum = (num1, num2) => ({userName: "Pratik"})
console.log(addTwoNum(3, 5))