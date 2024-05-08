class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}pratik`
    }

    set password(value) {
        return this._password = value
    }
}

const pratik = new User("p@pratik.ai", "abc");
console.log(pratik.password);
console.log(pratik.email);