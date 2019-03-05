//gloabal variables
var userGuess;

String.prototype.replaceAt = function () {
    for (var j = 0; j < this.randomWord.length; j++) {
        this.underscores = game.replaceAt(this.underscores, j, userGuess);
        document.getElementById("hidden-word").innerHTML = this.underscores;
    }
}

var game = {

    wordBank: ["vanilla", "chocolate", "cookie dough", "mint chocolate chip", "rocky road"],
    guessesLeft: 12,
    wins: 0,
    losses: 0,
    randomWord: "",
    underscores: "",

    replaceAt: function (string, index, replace) { return string.substring(0, index) + replace + string.substring(index + 1); },

    //create a function to determine what happens when the game is started
    startGame: function () {

        //math function to pick a random word out of wordBank[] and stores it into a variable called randomWord
        this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log(this.randomWord);

        //for loop to create underscores for each letter of the chosen randomWord
    
    },

    //checker function to check if user guess is equal to the indexOf randomWord
    checker: function () {
        var guessIndex = this.randomWord.indexOf(userGuess);
        if (!guessIndex) {
            this.guessesLeft--;
            
            // dont update `underscores`
        }
        else {
            this.underscores[guessIndex] = userGuess;
            this.guessesLeft--;
            console.log(guessIndex);
        }

    }
}

//onkeyup event listener to determine what key is being pressed
document.onkeyup = function (event) {

    userGuess = event.key;

    //initiate checker function
    game.checker();

    console.log(userGuess);
}

