// Value to determine when to close while loop
let keepPlaying = true;
// Values the computer can 'choose' from
let computerOptions = ["R", "P", "S"];
// Returns a value from computerOptions randomly
function computerChoice() {
    return computerOptions[Math.floor(Math.random() * 3)];
}

// Asks if the user would like to play the game.
if (window.confirm("Would you like to play Rock, Paper Scissors?")){

    // While loop used to keep the game running if the user wants
    while (keepPlaying) {

        // User's entered choice
        let choice = window.prompt("Enter R, P, or S");
        // Computer's choice
        let opponentChoice = computerChoice();

        // User validation
        let isBad = true;
        while (isBad) {
            if (choice === 'R' || choice === 'P' || choice === 'S'){
                isBad = false;
            } else {
                choice = window.prompt("Your input differed from R, P, or S. Please only enter only a single letter of either R, P, or S.");
            }
        }

        // Confirm Results
        if ((choice === 'R' && opponentChoice === 'S') || (choice === 'P' && opponentChoice === 'R') || (choice === 'S' && opponentChoice === 'P')){
            window.alert(`Your opponent chose ${opponentChoice}, you win!`);
        } else if (choice === opponentChoice) {
            window.alert(`Your opponent chose ${opponentChoice}, you tied!`);
        } else {
            window.alert(`Your opponent chose ${opponentChoice}, you lost!`);
        }

        // Confirms if user would like to keep playing
        if (!window.confirm("Would you like to keep playing?")){
            keepPlaying = false;
            window.alert("Thanks for playing!")
        } 
    }

}