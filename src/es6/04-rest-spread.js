// Arrays destructuring


let fruits = ['Apple' , 'Banana'];
let [a, b] = fruits
console.log(a, fruits[1]);


// Object destructuring


let user = {username: 'Sebastián', age: 26};
let {username, age} = user;
console.log(username, user.age);