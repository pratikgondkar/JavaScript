class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Techer extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new couses was added by ${this.username}`);
    }
}

const chai = new Techer("chai", "chai@techer.com", "123");
chai.addCourse()
// chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()