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
const form = document.getElementById('formPalindromo');

// Al submit del form richiamo la funzione verifica palindromo e stampo il risultato in pagina
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const parola = document.getElementById('parola').value;
    const risultato = document.getElementById('risultato');

    if (isPalindromo(parola)) {
        risultato.textContent = 'La parola inserita è un palindromo.';
    } else {
        risultato.textContent = 'La parola inserita non è un palindromo.';
    }
});