//declarando
class User{};

//instancia de una clase
//const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

const srd = new user();
console.log(srd.greeting());


//constructor

class user2 {
    //uso del contructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const sebastian = new user2();

//this

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}


const ana = new user('Ana');
console.log(ana.greeting());


//setter & getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const susanagimenez = new user ('David', 15);
console.log(susanagimenez.uAge);
console.log(susanagimenez.uAge = 20);