/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// CORREZIONE

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Scrive i numeri da 0 a 4

    2- Sono presenti errori di sintassi?
    No

    3- Sono presenti errori logici?
    Si c'era scritto '>' al posto di '<' così usciva subito dal ciclo
    

*******************************************************************************/





// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// CORREZIONE

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }else{
        return num;
    }
}
console.log(addIfEven(7));

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Se il numero è pari aggiunge 5 a quel numero altrimenti ritorna semplicemente il numero

    2- Sono presenti errori di sintassi?
    No

    3- Sono presenti errori logici?
    Sì non c'era scritto l'else
    

*******************************************************************************/





// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// CORREZIONE

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Stampa i numeri dall' 1 al 5

    2- Sono presenti errori di sintassi?
    Sì c'erano le virgole nel for al posto dei punti e virgola

    3- Sono presenti errori logici?
    No
    

*******************************************************************************/





// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

// CORREZIONE

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // [2,4,6,8]



/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Dato un array,riempe un altro array solo di numeri pari e poi lo stampa

    2- Sono presenti errori di sintassi?
    1 C'è un punto e virgola di troppo nel for
    2 C'è un solo uguale nel if,invece ce ne vanno 3
    3 Nell'if non va controllato numbers ma numbers[i]
    4 Nel push non va pushato i ma numbers[i]
    5 Return evenNumbers va messo fuori dal ciclo for
    6 I due array sono const non let
    7 Dopo l'if non ci va il punto e virgola
    8 Nell'if non bisgna mettere lenght -1 ma solo lenght perchè tanto essendo minore non arriva a 8 ma si ferma a 7 quindi all'ultimo indice dell'array

    3- Sono presenti errori logici?
    SI
    

*******************************************************************************/