/**
 * 1. Esercizio: Stampa i numeri da 1 a 10 usando un ciclo for.
 * 2. Stampa i numeri da 1 a 10 usando un ciclo while.
 *3.Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.
 *
 *
 *
 *
 *
 *
 */

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//------------------------------------------------

// let counter = 1
// while (counter <= 10) {
//     console.log(counter);

//     counter++;
// }

//------------------------------------------------


const input = prompt("Dammi un numero N");
const n = Number(input);

if (input !== null && !Number.isNaN(n) && n >= 0) {

    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
} else {
    console.error("Input non valido, reinserisci")
}


//------------------------------------------------


