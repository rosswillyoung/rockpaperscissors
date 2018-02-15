
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getPlayer(choice) {
    let player = document.getElementById("player");
    let computer = document.getElementById("computer");
    let computerChoice = computerPlay();
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let playerChoice = "";

    if (choice == rock) {
        player.style.backgroundColor = "gray";
        player.innerHTML = "ROCK";
        playerChoice = "rock";
    } else if (choice == paper) {
        player.style.backgroundColor = "white";
        player.innerHTML = "PAPER";
        playerChoice = "paper";
    } else if (choice == scissors) {
        player.style.backgroundColor = "red";
        player.innerHTML = "SCISSORS";
        playerChoice = "scissors";
    }
    if (computerChoice == "rock") {
        computer.style.backgroundColor = "gray";
        computer.innerHTML = "ROCK";
    } else if (computerChoice == "paper") {
        computer.style.backgroundColor = "white";
        computer.innerHTML = "PAPER";
    } else if (computerChoice == "scissors") {
        computer.style.backgroundColor = "red";
        computer.innerHTML = "SCISSORS";
    }

    document.getElementById("counter").innerHTML = getWinner(computerChoice, playerChoice);
} 


function getWinner(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "<h1>DRAW</h1>"
    } else if (computerChoice == "rock") {
        if (playerChoice == "paper"){
            return "<h1>YOU WIN</h1>";
        } else if (playerChoice == "scissors") {
            return "<h1>YOU LOSE. HAHA.</h1>" 
        }
    } else if (computerChoice == "paper") {
        if (playerChoice =="rock") {
            return "<h1>YOU LOSE. HAHA</h1>";
        } else if (playerChoice == "scissors") {
            return "<h1>YOU WIN</h1>";
        }
    } else if (computerChoice == "scissors") {
        if (playerChoice == "rock") {
            return "<h1>YOU WIN</h1>";
        } else if (playerChoice == "paper") {
            return "<h1>YOU LOSE. HAHA</h1>";
        }
    }
}

        
