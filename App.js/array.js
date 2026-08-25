/**
 * 1.Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
 * 2.Dato l'array di numeri [10, 21, 6, 73, 9, 14, 44], crea un array con soli numeri pari
 * 3.Dato un array di temperature settimanali [19, 21, 18, 23, 25, 22, 20], trova il valore massimo e trova il valore minino
 * 
 * 
 * 
 * 
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


/**
 * @param {number[]} numbers
 * @returns {{max: number, min: number}}
 * 
 */

function findMaxAndMin(numbers) {
    
        if (!Array.isArray(numbers) || numbers.length === 0){
            return null;
        }

        let minTemp = numbers[0]; 
        let maxTemp = numbers[0];
        
        for ( let i = 1; i < numbers.length; i++) {
            const inputTemp = numbers[i];

            if( typeof inputTemp !== 'number' || Number.isNaN(inputTemp)) {
                continue;
                }
            if (inputTemp < minTemp) minTemp = inputTemp;
            if (inputTemp > maxTemp) maxTemp = inputTemp;
            }

        return {minTemp, maxTemp}
    }
    
    const tempSettimana = [19, 21, 18, 23, 25, 22, 20];
    console.log(findMaxAndMin(tempSettimana));
    



