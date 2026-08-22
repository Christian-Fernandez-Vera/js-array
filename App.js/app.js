/**
 * 1. Esercizio: Stampa i numeri da 1 a 10 usando un ciclo for.
 * 2. Stampa i numeri da 1 a 10 usando un ciclo while.
 *3.Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.
 *4.Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo while.
 * 5.Stampa la tabellina del 5.
 * 6.Chiedi all'utente una parola e un numero N. Stampa quella parola N volte.
 *7.Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato.
 *8. Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finchÃ© l'utente non inserisce "0" per terminare. Stampa il totale della spesa.
 *9. L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"
 * 10. Il computer pensa a un numero tra 1 e 100. L'utente indovina. Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.
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


// const input = prompt("Dammi un numero N");
// const n = Number(input);

// if (input !== null && !Number.isNaN(n) && n >= 0) {

//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     }
// } else {
//     console.error("Input non valido, reinserisci")
// }

//------------------------------------------------

// function printNumbers() {
//     const input = prompt(" Dammi un numero N: ");

//     if (input === null || input.trim() === "") {
//         console.warn("Operazione annullata o input vuoto.");
//         return;        
//     }

//     const n = Number (input);

//     if (!Number.isInteger(n) || n < 0) {
//         console.error("Errore: Devi inserire un numero intero positivo o zero");
//         return;
//         }

//         let current = 0;
//         while (current <= n) {
//             console.log(current);
//             current++;
//         }
//     }

//     printNumbers();


//------------------------------------------------

// /**
//  * @param {Number} numBase
//  * @param {Number} [limit = 10]
//  * @return {void} 
//  */

// function printMultiples(numBase, limit = 10) {

//     if (typeof numBase !== 'number' || Number.isNaN(numBase)) {
//         throw new TypeError('Il primo parametro deve essere un numero.');
//     }

//     for (let i = 0; i <= limit; i++) {
//         const result = i * numBase;
//         console.log(`${numBase} x ${i} = ${result}`);        
//     }
// }

//     const MULTI_BASE = 5;
//     printMultiples(MULTI_BASE);

//------------------------------------------------


// /**
//  * @param {string} word
//  * @param {number} times
//  * @throws {TypeError}
//  * @throws {RangeError} 
//  */

// function repeatWord(word, times) {

//     if (typeof word !== 'string' || word.trim() === "") {
//         throw new TypeError("La parola deve essere una stringa non vuota")
//     }

//     if (typeof times !== 'number' || Number.isNaN(times) || !Number.isInteger || times < 0) {
//         throw new RangeError("Il secondo parametro deve essere un numero intero non negativo.")

//     }

//     for (let i = 0; i < times; i++) {
//         console.log(`[${i + 1}/${times}] ${word}`);

//     }

// }

// const userInputWord = prompt ('Inserisci una parola:')??'';
// const userInputTimes = Number(prompt('Inserisci un numero N:'));

// try {
//     repeatWord(userInputWord, userInputTimes);
// } catch (error) {
//     console.error(`Errore di validazione: ${error.message}`);
// }


//------------------------------------------------

// /**
//  * Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finchÃ© l'utente non inserisce "0" per terminare. Stampa il totale della spesa.
//  *@returns {void}
//  */


// function runShoppingCart() {
//     let totalExpense = 0;
//     let isShopping = true;

//     while (isShopping) {
//         const rawInput = prompt("Inserisci il costo del prodotto (inserisci '0' per terminare): ");

//         if ( rawInput === null) {
//             console.warn("Operazione annullata dall'untente");
//             return;
//         }

//         const sanitizedInput = rawInput.trim().replace(',', '.')
//         const price = Number(sanitizedInput);

//         if (sanitizedInput === '' || Number.isNaN(price) || price < 0) {
//             alert ("Errore: Inserisci un numero valido e positivo.");
//             continue;
//         }
//         if (price === 0) {
//             isShopping = false;
//         } else {
//             totalExpense += price;
//         }
//     }

//     const formattedTotal = totalExpense.toFixed(2);
//     console.log(`Il totale della spesa è: ${formattedTotal} €`);

//     }

//     runShoppingCart();


//------------------------------------------------

// /**
//  * L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"
//  * @returns {void}
//  */

// function verifyPassword() {
//     const pass_Correct = "nascosto123";
//     const massTentativi = 3;
//     let accesoConceduto = false;

//     for (let tentativo = 1; tentativo <= massTentativi; tentativo++) {
//         const inputUsuario = prompt(`Tentativo ${tentativo} di ${massTentativi}. Inserisci la password:`);

//     if ( inputUsuario === null) {
//         break;
//     }

//     if (inputUsuario.trim() === pass_Correct) {
//         accesoConceduto = true;
//         break;
//         }
//     }

//     if (accesoConceduto) {
//         alert ("Benvenuto");
//     } else {
//         alert ("Bloccato");
//     }

// }

// verifyPassword();

//------------------------------------------------

// /**
//  * Gioco di indovinelli: Indovina il numero tra 1 e 100.
//  * @returns {void}
//  */

// function guessTheNumber() {
//     const MIN = 1;
//     const MAX = 100;
//     const targetNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

//     let attempts = 0;
//     let hasGuessed = false;

//     while (!hasGuessed) {
//         const rawInput = prompt(`Indovina un numero compreso tra ${MIN} e ${MAX}`);

//         if (rawInput === null) {
//             console.warn("Partita interrota dall'untente");
//             return;
//         }


//         const trimmedInput = rawInput.trim();
//         const userGuess = Number(trimmedInput);

//         if (trimmedInput === "" || Number.isNaN(userGuess) || Number.isInteger(userGuess)) {
//             alert("Devi inserire un numero intero valido.");
//             continue;
//         }

//         attempts++;

//         if (userGuess === targetNumber) {
//             alert(`Bravo! Hai indovinato il numero ${targetNumber} in ${attempts} tentativi.`);
//             hasGuessed = true;
//         } else if (userGuess > targetNumber) {
//             alert("Troppo alto! Riprova.");        
//         } else {
//             alert("Troppo basso! Riprova");
//         }
        
//     }
// }

// guessTheNumber();