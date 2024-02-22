let arr = [1, 2, 3, 4, 5]; // Un array di numeri
let strArr = ['a', 'b', 'c', 'd', 'e']; // Un array di stringhe
let dateArr = [new Date(), new Date('2020-01-01')]; // Un array di oggetti Date
let newArr = ["x", 1, true]; // Un array di tipi di dati misti
let bool = true;


let primoElemento = arr[0]; // Accede al primo elemento
console.log(primoElemento); // Stampa 1

arr[0] = 10; // Modifica il primo elemento
console.log(arr); // Stampa [10, 2, 3, 4, 5]

let lunghezza = arr.length;
console.log(lunghezza); // Stampa 5

arr.push(6);
console.log(arr); // Stampa [10, 2, 3, 4, 5, 6]

arr.pop();
// const lastElement = arr.pop();
console.log(arr); // Stampa [10, 2, 3, 4, 5]

arr.unshift(110);
console.log(arr); // Stampa [110, 10, 2, 3, 4, 5]

arr.shift();
console.log(arr); // Stampa [10, 2, 3, 4, 5]

let indice = arr.indexOf(3);
console.log(indice); // Stampa 2

arr.splice(indice, 1);
console.log(arr); // Stampa [10, 2, 4, 5]

/**
 * Ricorda che gli indici degli array in JavaScript iniziano da 0. Quindi, il primo elemento dell'array è a indice 0, il secondo elemento è a indice 1, e così via.
 */