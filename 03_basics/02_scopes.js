// var c = 300 // global scope
let a = 300
if(true){
    let a = 10
    const b = 20 // block scope
    // console.log("Inner: a =>", a)
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "pratik"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

   // two()
}

one()


if (true) {
    const username = "Pratik"
    if (username === "Pratik") {
        const website = "Yotube"
       // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num) {
    return num + 1
}


// console.log(addTwo(7))    // this is wrong decration 
const addTwo = function(num1) {
    return num1 + 2
}

console.log(addTwo(7))