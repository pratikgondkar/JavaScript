class User{
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return "123"
    }
}

const pratik = new User("pratik")
// console.log(pratik.createId());

class Techer extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Techer("iPhone", "i@phone.com")
iPhone.logMe();
// console.log(iPhone.createId());  // static ek vedA Dedifine kelya natr tyacha access child pan geu shkat nahi