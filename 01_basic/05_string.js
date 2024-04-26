const name = "Pratik"
const repoCount = 28

// console.log(name + repoCount)

console.log(`hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("PRATIK-PG-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('M'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotheString = gameName.slice(-8, 4)
console.log(anotheString);

const newStringOne = "     Pratik    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://pratik.com/pratik%20gondkar"

console.log(url.replace('%20', '-'));

console.log( url.includes('pratik'));
console.log( url.includes('radha'));

console.log(gameName.split('-'));

