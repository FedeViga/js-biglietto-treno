// Scrivi un programma che prende tre numeri in input usando prompt. 
// Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.

const number1 = prompt("inserisci primo numero");
const number2 = prompt("inserisci secondo numero");
const number3 = prompt("inserisci terzo numero");
const mean = (Number(number1) + Number(number2) + Number(number3)) / 3;

// trasformo la media in modo che mostri sempre almeno due decimali
const result = mean.toFixed(Math.max(2, (mean.toString().split('.')[1] || []).length));


if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {

    document.getElementById("mean").innerHTML = "impossibile calcolare media, sono accettatti solo valori numerici" ;

} else {
    
    document.getElementById("mean").innerHTML = result ;
    
}