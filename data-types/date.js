// Crea una nuova data con la data e l'ora corrente
let ora = new Date();
console.log(ora); // Stampa la data e l'ora corrente

let data = new Date();

// Ottieni l'anno corrente
let anno = data.getFullYear();
console.log(anno); // Stampa l'anno corrente

// Ottieni il mese corrente (0 = Gennaio, 1 = Febbraio, ..., 11 = Dicembre)
let mese = data.getMonth();
console.log(mese); // Stampa il mese corrente

// Ottieni il giorno del mese
let giorno = data.getDate();
console.log(giorno); // Stampa il giorno del mese

// Imposta l'anno
data.setFullYear(2022);
console.log(data); // Stampa la data con l'anno impostato a 2022

// Imposta il mese (0 = Gennaio, 1 = Febbraio, ..., 11 = Dicembre)
data.setMonth(11);
console.log(data); // Stampa la data con il mese impostato a Dicembre

// Imposta il giorno del mese
data.setDate(25);
console.log(data); // Stampa la data con il giorno del mese impostato a 25

let data1 = new Date(2022, 11, 25); // 25 Dicembre 2022
let data2 = new Date(); // Data corrente

// Calcola la differenza in millisecondi
let differenza = data1.getTime() - data2.getTime();

// Converte la differenza in giorni
let giorni = Math.ceil(differenza / (1000 * 60 * 60 * 24));
console.log(giorni); // Stampa il numero di giorni tra la data corrente e il 25 Dicembre 2022