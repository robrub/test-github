// Arrat.map **************************************************************
/**
 * Il metodo map() di un array in JavaScript crea un nuovo array con i risultati della chiamata di una funzione fornita su ogni elemento nell'array originale.
 */
let numeri = [1, 2, 3, 4, 5];

// Crea un nuovo array con il quadrato di ogni numero
let quadrati = numeri.map(function(numero) {
    return numero * numero;
});

console.log(quadrati); // Stampa [1, 4, 9, 16, 25]

// Array.filter **************************************************************
/**
 * Il metodo filter() di un array in JavaScript crea un nuovo array con tutti gli elementi che passano un test implementato dalla funzione fornita.
 */

// Crea un nuovo array con solo i numeri pari
// In questo esempio, la funzione passata a filter() verifica se ogni numero nell'array numeri è pari. Se lo è, il numero passa il test e viene incluso nel nuovo array. Se non lo è, viene escluso
let pari = numeri.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pari); // Stampa [2, 4]

// Array.reduce **************************************************************
// Il metodo reduce() di un array in JavaScript esegue una funzione riduttrice su ciascun elemento dell'array, restituendo un singolo valore di output.

// Calcola la somma di tutti i numeri nell'array
// In questo esempio, la funzione passata a reduce() prende due argomenti: un accumulatore e l'elemento corrente. L'accumulatore è il valore restituito dalla chiamata precedente alla funzione riduttrice, o il valore iniziale se fornito (come lo 0 in questo caso). L'elemento corrente è l'elemento dell'array attualmente in elaborazione.
// La funzione riduttrice somma l'accumulatore e l'elemento corrente, e restituisce il risultato. Questo risultato viene poi utilizzato come accumulatore per la prossima chiamata alla funzione riduttrice.
let somma = numeri.reduce(function(accumulatore, numero) {
    return accumulatore + numero;
}, 0);

console.log(somma); // Stampa 15

// Array.find **************************************************************
// Il metodo find() di un array in JavaScript restituisce il primo elemento nell'array che soddisfa la funzione di test fornita. Se nessun elemento soddisfa la funzione di test, viene restituito undefined.

// Trova il primo numero nell'array che è maggiore di 3
let numero = numeri.find(function(n) {
    return n > 3;
});

console.log(numero); // Stampa 4

// Array.findIndex **************************************************************
// Trova l'indice del primo numero nell'array che è maggiore di 3
let indice = numeri.findIndex(function(n) {
    return n > 3;
});

console.log(indice); // Stampa 3

// Array.concat **************************************************************
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Unisce arr1 e arr2
let arr3 = arr1.concat(arr2);

console.log(arr3); // Stampa [1, 2, 3, 4, 5, 6]

let arr1a = [1, 2, 3];
let arr2a = [4, 5, 6];
let arr3a = [7, 8, 9];

// Unisce arr1, arr2 e arr3
let arr4 = arr1a.concat(arr2a, arr3a);

console.log(arr4); // Stampa [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.forEach **************************************************************

// Stampa ogni numero
numeri.forEach(function(numero) {
    console.log(numero);
});

// Array.slice **************************************************************
// Il metodo slice() di un array in JavaScript restituisce una copia superficiale di una porzione di un array in un nuovo array. Puoi specificare sia l'indice di inizio che quello di fine (esclusivo). L'array originale non verrà modificato.
// Prende una fetta dell'array da indice 1 a indice 3
let fetta = numeri.slice(1, 3);

console.log(fetta); // Stampa [2, 3]


// Prende una fetta dell'array da indice 2 fino alla fine
let fetta2 = numeri.slice(2);

console.log(fetta); // Stampa [3, 4, 5]