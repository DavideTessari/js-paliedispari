// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
    // Confronta carattere per carattere
    for (let i = 0; i < parola.length / 2; i++) {
        const word = parola[i];
        if (word !== parola[parola.length - 1 - i]) {
            // Se i caratteri non corrispondono, la parola non è palindroma
            return false;
        }
    }
    // Se tutti i caratteri corrispondono, la parola è palindroma
    return true;
}

// Chiedi all'utente di inserire una parola
const parola = prompt("Inserisci una parola:");

// Verifica se la parola inserita è palindroma e fai comparire gli alert
if (isPalindroma(parola)) {
    alert(`La parola "${parola}" è palindroma!`);
} else {
    alert(`La parola "${parola}" non è palindroma.`);
}

