var userGuess;
//create object called game
var game = {

    //create an array with words to guess
    wordBank: ["vanilla", "chocolate", "cookie dough", "mint chocolate chip", "rocky road"],

    //declare a variable for the amount of guesses a user has
    guessesLeft: 12,

    //set wins to 0
    wins: 0,

    //set losses to 0
    losses: 0,

    //create an empty string to store the random word the computer will generate out of wordBank[]
    randomWord: "",

    //create a function to determine what happens when the game is started
    startGame: function() {

        //math function to pick a random word out of wordBank[] and stores it into a variable called randomWord
        this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

        //for loop to create underscores for each letter of the chosen randomWord
        for (var i = 0; i < this.randomWord.length; i++) {
            randomWord[i] = "_";
        }        
    }

    gameLogic: function() {

        for (var j = 0; j < this.randomWord.length; j++) {
            
        }
        
    }
    
}













// //create array with words to guess
// var flavorWords = ["vanilla", "chocolate", "cookie dough", "mint chocolate chip", "rocky road"];

// //go through flavorsWords and pick a random word to start
// var randomWord = flavorWords[Math.floor(Math.random() * flavorWords.length)];
// console.log(randomWord);

// hiddenWord = document.getElementById("hidden-word");
// winsCounter = document.getElementById("wins-counter");

// var wins = 0;

// //create an empty array and a for loop to match the random word chosen with underscores _
// var answerArray = [];
// for (var i = 0; i < randomWord.length; i++) {
//     answerArray[i] = "_";
//     hiddenWord.textContent = answerArray;
// }



