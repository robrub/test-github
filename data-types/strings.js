let str1 = 'Ciao'; // Stringa con singoli apici
let str2 = "Mondo"; // Stringa con doppi apici

let saluto = str1 + ' ' + str2; // Concatenazione con l'operatore +
console.log(saluto); // Stampa "Ciao Mondo"

let lunghezza = str1.length;
console.log(lunghezza); // Stampa 4

let primoCarattere = str1[0]; // Accede al primo carattere
console.log(primoCarattere); // Stampa "C"

let posizione = str2.indexOf('on'); // Trova la posizione di 'on' in str2
console.log(posizione); // Stampa 1

let sottostringa = str2.substring(1, 3); // Estrae la sottostringa da indice 1 a 3
console.log(sottostringa); // Stampa "on"

let nuovaStringa = str2.replace('on', 'an'); // Sostituisce 'on' con 'an' in str2
console.log(nuovaStringa); // Stampa "Mando"

console.log(str1.toUpperCase()); // Stampa "CIAO"
console.log(str2.toLowerCase()); // Stampa "mondo"

