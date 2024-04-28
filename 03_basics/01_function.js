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

// console.log(loginUserMessage("pratik"));
// console.log(loginUserMessage());

// function calututeCardPrice(num1) {
//     return num1
// }

//console.log(calututeCardPrice(2));

// function calututeCardPrice(...num1) { // rest operator
//     return num1
// }

// console.log(calututeCardPrice(200, 400, 600));

function calututeCardPrice(val1, val2, ...num1) { // rest operator
    return num1
}

// console.log(calututeCardPrice(200, 400, 600, 800));

const user = {
    username: "pratik",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


