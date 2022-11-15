// Enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("srd96", 34, "ARG", 1));