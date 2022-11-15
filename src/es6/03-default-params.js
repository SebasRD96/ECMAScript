function newUser(name, age, country) {
    var name = name|| 'Sebastián';
    var age = age || 26;
    var country = country || 'ARG';
    console.log(name, age, country);
}

newUser();
newUser('Pablo', 27, 'ARG');

// En ECMAScript 6

function newAdmin(name = 'Sebastián', age = 27, country = 'ARG' ) {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'CO');