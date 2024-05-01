const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (value) {
//     console.log(value);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCodding = [
    {
        lauguageName: "javaScript",
        lauguageFileName: "js"
    },
    {
        lauguageName: "java",
        lauguageFileName: "java"
    },
    {
        lauguageName: "python",
        lauguageFileName: "py"
    }
]

myCodding.forEach( (item) => {
    console.log(item.lauguageName);
})