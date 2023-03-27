/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// CORREZIONE

// ESERCIZIO 1
function checkAge() {
    const myAge = 15;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else if(myAge >18){
        message = 'Hai più di 18 anni!';
    } else{
        message = 'Hai 18 anni';
    }
    console.log(message);
}
checkAge();

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Questa funzione esegue una verifica dell'età per controllare se l'utente è maggiorenne

    2- Sono presenti errori di sintassi?
    Sì il messaggio essendo variabile deve essere dichiarato 'let' e non 'const'

    3- Sono presenti errori logici?
    Sì non viene stampato a schermo il messaggio,inoltre non viene considerato se l'utente ha 18 anni
    

*******************************************************************************/





// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// CORREZIONE

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Questa codice indica il numero di colori nella palette

    2- Sono presenti errori di sintassi?
    Lenght era scritto nel modo sbagliato

    3- Sono presenti errori logici?
    No
    

*******************************************************************************/





// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// CORREZIONE

// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Aggiunge al numero dell'utente il numero 12

    2- Sono presenti errori di sintassi?
    Sì,non c'era scritto parseInt a userNumber,così facendo prendeva il risultato come concatenazione di stringhe e non come somma di 2 numeri

    3- Sono presenti errori logici?
    No
    

*******************************************************************************/






// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// CORREZIONE

// // ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Controlla se l'indirizzo email dell'utente è nella lista dell'email

    2- Sono presenti errori di sintassi?
    Sì la variabile 'grantAccess' era inizializzata come stringa e non come variabile booleana,questo causava un malfunzionamento nel programma

    3- Sono presenti errori logici?
    No
    

*******************************************************************************/
