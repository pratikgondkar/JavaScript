const user = {
    username: "Pratik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);

        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Pratik", 8, true);
const userTwo = new User("Radha", 12, false);
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);