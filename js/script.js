/* esercizio di oggi: calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
      Questo richiederà un minimo di ricerca.

Bonus:
    - effettuare dei controlli per capire se l'utente ha inserito correttamente il numero di km e l'età 
      (ovvero se sono effettivamente dei numeri e non testo a caso) */



// inizializzo variabili
const distance = prompt("Inserisci la distanza che devi percorrere (in Km)");
const age = prompt("inserisci la tua età");
let price = distance * 0.21;

// visualizzo variabili a console
console.log("distanza: ", distance);
console.log("età: ", age);
console.log("prezzo senza sconti: ", price);

// controllo se applicare sconti
if (age < 18) {

    price = price * .8;

} else if (age >= 65) {

    price = price * .6;

}

console.log("prezzo finale: ", price);

// controllo se l'utente ha inserito dei valori accettabili per la distanza e l'età
if ( isNaN(distance) || isNaN(age) || Number.isInteger(age) || distance < 5 || distance > 1000 || age < 1 || age > 122) {

    document.getElementById("price").innerHTML = "Impossibile calcolare prezzo, inserire valori accettabili" ;
    
} else {

    // taglio prezzo finale alla seconda cifra decimale, ma ho deciso che se il prezzo è un intero lo visualizzo senza decimali
    if (Number.isInteger(price) == true) {

        document.getElementById("price").innerHTML = price + " €";

    } else {

        const cutPrice = price.toFixed(2)
        document.getElementById("price").innerHTML = cutPrice + " €";
        console.log("prezzo finale con due decimali: ", cutPrice);

    }
}


