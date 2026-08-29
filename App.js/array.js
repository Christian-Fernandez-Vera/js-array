/**
 * 1.Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
 * 2.Dato l'array di numeri [10, 21, 6, 73, 9, 14, 44], crea un array con soli numeri pari
 * 3.Dato un array di temperature settimanali [19, 21, 18, 23, 25, 22, 20], trova il valore massimo e trova il valore minino
 * 4.Dato l'array di voti [6, 8, 4, 9, 5, 7, 10], calcolare la media dei voti.
 * 5.Dato l'array ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'], crea un nuovo array con solo i nomi che hanno più di 4 lettere
 * 6.Chiedi all'utente 5 numeri e salvali in un array. Alla fine calcola e stampa la somma di tutti i numeri inseriti.
 * ⁹7.Genera 10 numeri random e salvali in un array. I numeri nell'array devono essere univoci (non ci devono essere ripetizioni dello stesso numero all'interno dell'array)
 * 
 */

//------------------------------------------------------------


// /**
//  * 
//  * @param {number} value
//  * @returns {boolean}
//  */
// const isOdd = (value) => Number.isInteger(value) && value % 2 !== 0;

// /**
//  * 
//  * @param {number} iterations
//  * @param {number[]}
//  */

// function collectOddNumbers(iterations = 6) {
//     const oddNumbers = [];

//     for (let i = 0; i < iterations; i++) {
//         const input = prompt(`[${i + 1}/${iterations}] Inserisci un numero:`);

//         if (input === null || input.trim() === '') {
//             continue;
//         }
//         const parsedNumber = Number(input.trim());

//         if (Number.isNaN(parsedNumber)) {
//             console.warn(`"${input}" non è un numero valido.`);
//             continue;
//         }

//         if (isOdd(parsedNumber)) {
//             oddNumbers.push(parsedNumber);
//         }
//     }
//     return oddNumbers;
// }

// const listaDispari = collectOddNumbers(6);
// console.log("Array finale numeri dispari:", listaDispari);


//------------------------------------------------------------


// /**
//  * @param {number[]} numbers
//  * @returns {number[]}
//  */

// function filterEvenNumbers(numbers) {

//     if(!Array.isArray(numbers)) return [];

//     const evenNumbers = [];

//     for( let i = 0; i < numbers.length; i++) {
//         const currentNumber = numbers[i];

//         if (typeof currentNumber === 'number' && Number.isInteger(currentNumber) && currentNumber % 2 === 0) {
//             evenNumbers.push(currentNumber);
//         }
//     }

//     return evenNumbers;

// }

// const dataset = [10, 21, 6, 73, 9, 14, 44];
// const resltIterate = filterEvenNumbers(dataset);
// console.log(resltIterate);


//------------------------------------------------------------


// /**
//  * @param {number[]} numbers
//  * @returns {{max: number, min: number}}
//  * 
//  */

// function findMaxAndMin(numbers) {

//         if (!Array.isArray(numbers) || numbers.length === 0){
//             return null;
//         }

//         let minTemp = numbers[0]; 
//         let maxTemp = numbers[0];

//         for ( let i = 1; i < numbers.length; i++) {
//             const inputTemp = numbers[i];

//             if( typeof inputTemp !== 'number' || Number.isNaN(inputTemp)) {
//                 continue;
//                 }
//             if (inputTemp < minTemp) minTemp = inputTemp;
//             if (inputTemp > maxTemp) maxTemp = inputTemp;
//             }

//         return {minTemp, maxTemp}
//     }

//     const tempSettimana = [19, 21, 18, 23, 25, 22, 20];
//     console.log(findMaxAndMin(tempSettimana));



//------------------------------------------------------------


// /**
//  * 
//  * @param {number[]} grades
//  * @returns {number | null} 
//  * 
//  */


// function mediaVoti(grades) {

//     if (!Array.isArray(grades) || grades.length === 0) {
//         return null;
//     }
//     let sommaTotale = 0;
//     for (const voto of grades) {
//         sommaTotale += voto;
//     }
//     return sommaTotale / grades.length;

// }

// const votiClasse = [6, 8, 4, 9, 5, 7, 10];
// console.log(mediaVoti(votiClasse));


//------------------------------------------------------------


// /**
//  * @param {string[]} names
//  * @returns {string[]} 
//  * 
//  */

// function filterLongNames(names) {

//     if (!Array.isArray(names) || names.length === 0) {
//         return [];
//     }

//     const result = [];

//     for (const name of names) {
//         if (typeof name === 'string' && name.trim().length > 4) {
//             result.push(name);
//         }
//     }

//     return result;
// }

// const rawNames = ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'];
// console.log(filterLongNames(rawNames));


//------------------------------------------------------------


// /**
//  * 
//  * @param {number} totalCount
//  * @returns {number}
//  */

// function addNumberUser(totalCount = 5) {
//     const number = [];

//     for (let i = 0; i < totalCount; i++) {
//         const input = prompt(`[${i + 1}/${totalCount}] Inserisci un numero:`)

//         if (input === null || input.trim() === "") {
//             throw new Error("Operazione annullata o input vuoto.");
//         }

//         const parsedNumber = Number(input);

//         if (Number.isNaN(parsedNumber)) {
//             throw new TypeError(`"${input}" non è un numero valido`);
//         }

//         number.push(parsedNumber);
//     }

//     let totalSum = 0;
//     for (let i = 0; i < number.length; i++) {
//         totalSum += number[i];
//     }

//     console.log("Numeri inseriti:", number);
//     console.log("Somma totale", totalSum);

//     return totalSum;
// }

// addNumberUser(5);

//------------------------------------------------------------


/**
 * @param {number} [totale =10]
 * @param {number} [min = 1]
 * @param {number} [max = 100]
 * @returns {number[]}
 */

function generareNumeriRamdom (totale = 10, min = 1, max = 100) { 

    if (typeof totale !== "number" || totale <= 0)
        return [];
    if (totale > (max - min +1)) {
        throw new RangeError("La quantità supera i limitidisponibili")
}
    const numeriUnici = [];

    while (numeriUnici.length < totale) {
        const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeriUnici.includes(numeroCasuale)) {
            numeriUnici.push(numero);
        }
    }

    return numeriUnici;
}
 
const risultato = generareNumeriRamdom (10, 1, 100);
console.log (risultato);









