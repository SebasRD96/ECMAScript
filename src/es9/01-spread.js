const user = {username: 'srd97', age: 26, country: 'ARG'};
const {username, ...values} = user;
console.log(username);
console.log(values);