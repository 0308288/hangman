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

    // Clears the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerhtml = wrongGuesses.join("");
}

// It's where we will do all of the comparisons for matches
function checkLetters(letter) {

    // This boolean will be toggled based on whether or not a user letter is found
    var letterInWord = false;

    // Checks if a letter exists inside of an array at all
    for (var i=0; i < numBlanks; i++) {
        // If the letter exists then toggle this boolean to true. This will be used in the next step
        letterInWord = true;
    }
}

// If the letter exists somewhere in the word, then it figures ut exactly where (which index?)
if (letterInWord) {
    // Loop through the word 
    for (var j=0; j < numBlanks; j++) {

        //Populate the blanksAndSuccesses with every instance of the letter
        if (chosenWord[j] === letter) {

            // Here we set
        }
    
        // Logging for testing
        console.log(blanksAndSuccesses);
    }

    

    // IF the letter doesnt exist at all...
    else {

        // ..then we add the letter to the list of wrong letters and we subtract one of the guesses
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First log an initial status update in the console telling us how many wins, losses, and guesses left
    console.log(`WinCount: ${winCounter} | LossCount: ${losscounter} | NumGuesses: ${numGuesses}`)

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // This will print the array of guesses anf blanks onto the page
    document.getElementById("word-blanks").innerHTML = wrongGuesses.join(" ");

    //This will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //IF we have gotten all the letters to mathc the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        
    }
}