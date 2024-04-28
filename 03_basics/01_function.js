function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("K");
}

// sayMyName();

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumber(3, 4)

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3, 4)
// console.log("results:", result);

// function loginUserMessage(userName) {
//     if(!userName){
//         console.log("Please enter your username");
//         return
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("pratik"));
// console.log(loginUserMessage());

function loginUserMessage(userName = "sam") {
    if(!userName){
        console.log("Please enter your username");
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("pratik"));
// console.log(loginUserMessage());



