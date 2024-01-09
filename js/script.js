console.log('JS OK');

//* ERSERCIZIO 1 - PALINDROMA

//^ FUNZIONE VERIFICA PALINDROMO 
function isPalindromo(word) {
    // Rimuovo spazi e caratteri maiuscoli
    word = word.toLowerCase().trim();
    // Inverto i caratteri della parola
    const wordInverted = word.split('').reverse().join('');
    // Verifico se è un palindrmomo
    if (word === wordInverted) {
        return true;
    } else {
        return false;
    }
}

// Recupero il form dalla pagina
const formPali = document.getElementById('formPali');

// Al submit del form richiamo la funzione verifica palindromo e stampo il risultato in pagina
formPali.addEventListener('submit', function (e) {
    e.preventDefault();
    const parola = document.getElementById('parola').value;
    const risultato = document.getElementById('risultato');

    if (isPalindromo(parola)) {
        risultato.innerText = 'La parola inserita è un palindromo.';
    } else {
        risultato.innerText = 'La parola inserita non è un palindromo.';
    }
});


//* ERSERCIZIO 2 - PARI E DISPARI 

//^ FUNZIONE GENERA NUMERO RANDOM DA 1 A 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//^ FUNZIONE VERIFICA PARI O DISPARI
function isPari(numero) {
    return numero % 2 === 0;
}

// Recupero elementi dalla pagina
const formDispari = document.getElementById('formDispari');
const result = document.getElementById('result');
const userResult = document.getElementById('userResult');

// Al submit del form 
formDispari.addEventListener('submit', function (e) {
    e.preventDefault();

    // Recupero le scelte dell'utente 
    const userChoice = document.querySelector('input[name="scelta"]:checked').value;
    const userNumber = parseInt(document.getElementById('userNumber').value);

    // Genero un numero casuale per il computer richimando la funzione
    const randomNumber = getRandomNumber();
    // Sommo il numero scelto dall'utente con il numero casuale
    const sum = userNumber + randomNumber;

    // Richiamo la funzione per verificare se la somma è pari o dispari
    if (isPari(sum)) {                       //SE è pari
        result.innerHTML = 'La somma dei numeri è <strong>pari</strong>.<br>';
        if (userChoice === 'pari') {         // e l'utente ha scelto pari
            result.innerHTML += ' <strong>Complimenti, hai vinto!</strong>';
        } else {                             // e l'utente ha scelto dispari
            result.innerHTML += ' <strong>Spiacente, hai perso.</strong>';
        }
    } else {                                 //OPPURE è dispari
        result.innerHTML = 'La somma dei numeri è <strong>dispari</strong>.<br>';
        if (userChoice === 'dispari') {      // e l'utente ha scelto dispari
            result.innerHTML += ' <strong>Complimenti, hai vinto!</strong>';
        } else {                             // e l'utente ha scelto pari
            result.innerHTML += ' <strong>Spiacente, hai perso.</strong>';
        }
    }

    // Stampo i risultati in pagina
    userResult.innerHTML = `Hai scelto <strong>${userChoice}</strong> e hai giocato il numero <strong>${userNumber}</strong>. Il computer ha giocato il numero <strong>${randomNumber}</strong>.`;
});