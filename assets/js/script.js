// Value to determine when to close while loop
let keepPlaying = true;
// Values the computer can 'choose' from
let computerOptions = ["R", "P", "S"];
// Returns a value from computerOptions randomly
function computerChoice() {
    return computerOptions[Math.floor(Math.random() * 3)];
}
// Variables to keep track of results
let wins = 0;
let losses = 0;
let ties = 0;


// Asks if the user would like to play the game.
if (window.confirm("Would you like to play Rock, Paper Scissors?")){

    // While loop used to keep the game running if the user wants
    while (keepPlaying) {

        // User's entered choice
        let choice = window.prompt("Enter R, P, or S").toUpperCase;
        // Computer's choice
        let opponentChoice = computerChoice();

        // User validation
        let isBad = true;
        while (isBad) {
            if (choice === 'R' || choice === 'P' || choice === 'S'){
                isBad = false;
            } else {
                choice = window.prompt("Your input differed from R, P, or S. Please only enter only a single letter of either R, P, or S.").toUpperCase;
            }
        }

        // Confirm and display results
        if ((choice === 'R' && opponentChoice === 'S') || (choice === 'P' && opponentChoice === 'R') || (choice === 'S' && opponentChoice === 'P')){
            window.alert(`You chose ${choice} and your opponent chose ${opponentChoice}, you win!`);
            wins++;
        } else if (choice === opponentChoice) {
            window.alert(`You chose ${choice} and your opponent chose ${opponentChoice}, you tied!`);
            ties++;
        } else {
            window.alert(`You chose ${choice} and your opponent chose ${opponentChoice}, you lost!`);
            losses++;
        }
        window.alert(`Your current record is --- Wins: ${wins}, Ties: ${ties}, and Losses: ${losses}.`);


        // Confirms if user would like to keep playing
        if (!window.confirm("Would you like to keep playing?")){
            keepPlaying = false;
            window.alert("Thanks for playing!")
        } 
    }

}