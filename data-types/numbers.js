let intero = 10; // Un numero intero
let decimale = 10.5; // Un numero decimale

let a = 10;
let b = 5;

console.log(a + b); // Addizione, stampa 15
console.log(a - b); // Sottrazione, stampa 5
console.log(a * b); // Moltiplicazione, stampa 50
console.log(a / b); // Divisione, stampa 2
console.log(a % b); // Modulo (resto della divisione), stampa 0

let x = 9;

console.log(Math.sqrt(x)); // Radice quadrata, stampa 3
console.log(Math.pow(x, 2)); // Potenza, stampa 81
console.log(Math.abs(-x)); // Valore assoluto, stampa 9
console.log(Math.round(9.5)); // Arrotondamento, stampa 10
console.log(Math.floor(9.5)); // Arrotondamento per difetto, stampa 9
console.log(Math.ceil(9.5)); // Arrotondamento per eccesso, stampa 10

let str = "123";
let num = Number(str); // Converte la stringa in un numero
console.log(num); // Stampa 123

let val = "123";
console.log(isNaN(val)); // Verifica se il valore non è un numero, stampa false

/**
 * Ricorda che JavaScript segue le regole standard dell'aritmetica per le operazioni numeriche. Se tenti di dividere per zero, otterrai Infinity, e se tenti di effettuare un'operazione matematica con un valore non numerico, otterrai NaN (Not a Number).
 */