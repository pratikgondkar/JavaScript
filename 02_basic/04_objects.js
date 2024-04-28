// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "tony"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regulerUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Pratik",
            lastName: "Gondkar"
        }
    }
}

// console.log(regulerUser.fullName);
// console.log(regulerUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id: 1 ,
        email:"pratik@google.com"
    },
    {
        id: 1,
        email:"pratik@google.com"
    },
    {
        id: 1,
        email:"pratik@google.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))