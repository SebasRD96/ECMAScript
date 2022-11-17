class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak(){                                                                           //Metodos privados en ES12 para que solo se puedan acceder dentro de la clase privados en ES12
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){                                                                        //Metodos privados en ES12 para que solo se puedan acceder dentro de la clase privados en ES12            
        return this.age;
    }
    set #uAge(n) {                                                                      //Metodos privados en ES12 para que solo se puedan acceder dentro de la clase privados en ES12
        this.age = n;
    }
}

const susanagimenez = new user ('David', 15);
console.log(susanagimenez.uAge);
console.log(susanagimenez.uAge = 20);