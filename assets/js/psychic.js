// Letters to choose from

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// computer to choose from the letter avaiable at random

var computerGuess = alphabet[Math.floor(Math.random()* alphabet.length)];

//creating a place to hold scores
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters =[];
var letterToGuess = null;

//function so that the user can have 10 guesses

var updateguessesLeft = function(){
//grabing the html element Guesses Left and setting it equal to the var guessesLeft. Allowing the number of guesses to be displayed in HTML
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;

};

var updateLetterToGuess = function () {
    this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};


var updateGuessesSoFar = function () {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Function will be called when we reset everything
var reset = function () {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    updateLetterToGuess();
    updateguessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateguessesLeft();

//When key is released it becomes the users guess


document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateguessesLeft();
    updateGuessesSoFar();


    if (guessedLetters.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessedLetters[guessedLetters.length] = userGuess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesLeft--;
    }

   if (guessesLeft > 0) {
    if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Yes, you are psychic!");
            reset();
        }
    } else if (guessesLeft == 0) {
        // Then we will loss and we'll update the html to display the loss 
        losses++;
       document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic, maybe try again?");
         //Then we'll call the reset. 
        reset();
    }
};