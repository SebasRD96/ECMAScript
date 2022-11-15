
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Sebastián', 'Leandro', 'Pablo', 'Susana', 'Sofia', 'Florencia']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);