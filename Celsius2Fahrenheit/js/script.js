// Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit, 
// tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione. Visualizza la temperatura convertita.

let celsius = prompt("Inserire la temperatura in gradi Celsius, sono accettati solo valori numerici");

if (isNaN(celsius)) {

    document.getElementById("temp").innerHTML = "Impossibile convertire, inserire solo valori numerici." ;

} else {

    document.getElementById("temp").innerHTML = celsius * 9 / 5 + 32 + " °F" ;

}