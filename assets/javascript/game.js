var userGuess;

var game = {

    wordBank: ["vanilla", "chocolate", "cookie dough", "mint chocolate chip", "rocky road"],
    guessesLeft: 12,
    wins: 0,
    losses: 0,
    randomWord: "",
    underscores: "",

    //create a function to determine what happens when the game is started
    startGame: function () {

        //math function to pick a random word out of wordBank[] and stores it into a variable called randomWord
        this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log(this.randomWord);

        //for loop to create underscores for each letter of the chosen randomWord
        var underscores;
        for (var i = 0; i < this.randomWord.length; i++) {
            underscores += "_ ";
        }
        return underscores
    },

    //checker function to check if user guess is equal to the indexOf randomWord
    checker: function () {
        var guessIndex = this.randomWord.indexOf(userGuess);
        if (!guessIndex) {
            this.guessesLeft--;
            console.log(false);
            // dont update `underscores`
        } 
        else {
            this.underscores[guessIndex] = userGuess;
            this.guessesLeft--;
            console.log(true)
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
