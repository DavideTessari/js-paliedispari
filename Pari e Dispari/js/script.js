// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la sum dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("Scegli 'pari' o 'dispari':");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Funzione per generare un numero casuale compreso tra min(1) e max(5)
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Genera un numero casuale per il computer compreso tra 1 e 5
const numeroComputer = randomIntFromInterval(1, 5);

// Funzione per determinare se un numero è pari o dispari
function isEven(num) {
    return num % 2 === 0;
}

// Funzione per determinare il vincitore del gioco
function determinaVincitore(sceltaUtente, numeroUtente, numeroComputer) {
    // Calcola la somma dei numeri dell'utente e del computer
    const sum = numeroUtente + numeroComputer;
    // Determina se la somma è pari o dispari
    const risultato = isEven(sum) ? 'pari' : 'dispari';
    
    // Controlla chi ha vinto in base alla scelta dell'utente e al risultato della somma
    if ((sceltaUtente === 'pari' && isEven(sum)) || 
        (sceltaUtente === 'dispari' && !isEven(sum))) {
        return `Hai vinto! La somma risula essere ${sum} è ${risultato}👌.`;
    } else {
        return `Hai perso! La somma risulta essere ${sum} è ${risultato}😥.`;
    }
}

// Funzione principale del gioco
function pariDispari(sceltaUtente, numeroUtente) {
    // Calcola il risultato del gioco e lo mostra in un alert
    const result = `Il computer ha scelto il numero: ${numeroComputer}  
${determinaVincitore(sceltaUtente, numeroUtente, numeroComputer)}`;
    alert(result);
}

// Chiamata alla funzione principale del gioco
pariDispari(sceltaUtente, numeroUtente);

