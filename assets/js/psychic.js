

//letters that could be picked
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//computer randomly chosen letter
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice);



// Global Variables 
var win = 0;
var lost = 0;
var wrongChoice = [];
var letterGuessed;
var numberOfGuesses = 9;
var guessesLeft = 9;

// //Dom changes 
var docnumberOfGuesses = document.getElementById("computerGuess");
var docguessesLeft = document.getElementById("guessLeft");
var docWin = document.getElementById("wins");
var docLost = document.getElementById("losses");
var docWrongChoice = document.getElementById("let");


// Next, we give JavaScript a function to execute when onkeyup event fires.
updateUserChoice();
function updateUserChoice() {
    document.onkeypress = function (event) { 
        var userChoice = String.fromCharCode(event.keyCode);
        if (userChoice === computerChoice) {
            win++;
            docWin.textContent = ("Wins: "+ win);
            alert("You are a psychic!");
            reset();
        }
        else  {
            guessesLeft--;
            docguessesLeft.textContent = ("Guesses Reminding: " + guessesLeft);
            wrongChoice.push(userChoice);
            docWrongChoice.textContent = ("Wrong Choices: " + wrongChoice);
        
        if (guessesLeft <= 0) {
            lost++;
            docLost.textContent = ("Lost: " + lost);

            alert("You are NOT a psychic!");

            reset();
        }
            console.log(wrongChoice);
}

function reset() {
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    //computer randomly chosen letter
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    
    letterGuessed;
    numberOfGuesses = 9;
    guessesLeft = 9;
    docguessesLeft.textContent = ("Guesses Reminding: " + guessesLeft);
    wrongChoice = [];
    docWrongChoice.textContent = ("Wrong Choices: " + wrongChoice);
    console.log(computerChoice)
    updateUserChoice();


}
}
       
}


// var UpdateWrongChoice = function(){

// // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
// document.getElementById('#let').innerHTML = "Your Guesses so far: " + wrongChoice.join(', ');
// };

//     function UpdateWrongChoice(){
//         if (userChoice != computerChoice){
//             docWrongChoice.textContent = wrongChoice; 

//         }

//     }

// // if you guess the letter correctly then the win will increase by 1

//     function win(){
//         if (userChoice === computerChoice){
//             win++;
//             docWin.textContent = win;
//             alert("You are a psychic!") 
//         };
// // if you guess the letter incorrectly then the guessesleft will -- by 1
//     function lose(){
//         if (userChoice != computerChoice){
//             alert("you are not psychic!")
//             lost--; 
//             docLost.textContent = lost;

//         };
//     }
// }



//console.log(userText);
// if (userclick === computerchoice) {
//     win++;

//     console.log "you are physic");
//     reset
// }

// else if ()


//     //make it so that a user cannot guess the same letter 2 times and for a user to only be able to guess letters


//     reset function() {

//     });