// Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer. Determina il vincitore o se c'è un pareggio

const player = prompt("choose between rock, paper or scissors");
let computer = Math.floor(Math.random() * 3 + 1);
console.log(computer );

if (computer == 1) {

    computer = "rock";

} else if (computer == 2) {

    computer = "paper";

} else {

    computer = "scissors";

}
console.log(computer );

document.getElementById("you").innerHTML = "You picked : " + player ;
document.getElementById("computer").innerHTML = "Computer picked : " + computer ;

if (player == "rock") {

    if (computer == "rock") {

        document.getElementById("result").innerHTML = "It's a tie!" ;

    } else if (computer == "paper") {

        document.getElementById("result").innerHTML = "You Lose :(" ;

    } else if (computer == "scissors") {

        document.getElementById("result").innerHTML = "You Win! :D" ;
    }

} else if (player == "paper") {

    if (computer == "rock") {

        document.getElementById("result").innerHTML = "You Win! :D" ;

    } else if (computer == "paper") {

        document.getElementById("result").innerHTML = "It's a tie!" ;

    } else if (computer == "scissors") {

        document.getElementById("result").innerHTML = "You Lose :(" ;
    }

} else if (player == "scissors") {

    if (computer == "rock") {

        document.getElementById("result").innerHTML = "You Lose :(" ;

    } else if (computer == "paper") {

        document.getElementById("result").innerHTML = "You Win! :D" ;

    } else if (computer == "scissors") {

        document.getElementById("result").innerHTML = "It's a tie!" ;
    }

} else {

    document.getElementById("result").innerHTML = "Invalid choice, please try again" ;

}