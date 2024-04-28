// var c = 300 // global scope
let a = 300
if(true){
    let a = 10
    const b = 20 // block scope
    console.log("Inner: a =>", a)
    // var c = 30
}

console.log(a);
// console.log(b);
// console.log(c);