const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

//Ejemplo de uso eliminando elementos repetidos en un array

const arr = [1, 1, 2, 2, 3, 4, 4, 5];

const set = new Set(arr);

const arrSinRep = Array.from(set)

const sinRepetidos = [...arrSinRep];

console.log(arr);
console.log(arrSinRep);
console.log(sinRepetidos);