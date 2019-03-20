// GLOBAL VARIABLES (accessible by all function)

// Array of Word Options (all lowercase)
var wordList = ['batman', 'superman', 'hulk'],

// Solution will be held here
var chosenWord = "";

// This will break the solution into individual letters to be stored in an array.
var lettersInChosenWord = [];

// This will be the number of breaks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank we show based on the solution.
var blanksAndSuccesses = [];

// Holds all of the wrong guesses
var wrongGuesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// FUNCTIONS
// ------------------------------------------------------------------------------------------------

// It's how we'll start and restart the game . It's not being run here. it's just being made for future use.
function startGame(){
    // Starts over the guesses at specified number
    numGuesses = 9;

    // Solution is chosen randomly from wordList
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // We count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // We print the solution in the console (for testing)
    console.log(chosenWord);

    // CRITICIAL LINE - here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    // CRITICIAL LINE - here we reset the wrong guesses for the previous round
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with the appropriate number of blanks,
    // which is based on the number of letters in solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");
}