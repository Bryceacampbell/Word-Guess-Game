
var game = {

    wordBank: ["vanilla", "chocolate", "cookie dough", "rocky road", "mint chocolate chip"],
    guessesLeft: null,
    wrongGuesses: [],
    wins: null,
    losses: null,
    randomWord: "",
    underscores: "",
    session: 0,

    startGame: function () {
        this.guessesLeft = 12;
        document.getElementById("guesses-left").innerHTML = this.guessesLeft;
        this.wrongGuesses = [];
        this.underscores = "";
        this.randomWord = this.wordBank[this.session];
        console.log(this.randomWord);
        this.generateUnderscores();
        document.getElementById("hidden-word").innerHTML = this.underscores;
    },

    isUserGuessDuplicate: function (userGuess) {
        return this.wrongGuesses.includes(userGuess) || this.underscores.includes(userGuess);
    },

    generateUnderscores: function () {
        for (var i = 0; i < this.randomWord.length; i++) {
            this.underscores += "_";
        }
    },

    updateUnderscores: function (userGuess) {
        var underscoresArray = this.underscores.split("");
        for (let index = 0; index < this.randomWord.length; index++) {
            if (userGuess === this.randomWord[index]) {
                underscoresArray[index] = userGuess;
            }
        }
        this.underscores = underscoresArray.join("");
        document.getElementById("hidden-word").innerHTML = this.underscores;
        if (!this.underscores.includes("_")) {
            this.session++;
            wins();
        }
    },

    checker: function (userGuess) {
        if (this.isUserGuessDuplicate(userGuess)) return;
        var guessIndex = this.randomWord.includes(userGuess);
        if (!guessIndex) {
            this.guessesLeft--;
            this.wrongGuesses.push(userGuess);
            document.getElementById("wrong-guesses").innerHTML = this.wrongGuesses.join("");
            document.getElementById("guesses-left").innerHTML = this.guessesLeft;
        }
        else {
            this.updateUnderscores(userGuess);
            this.guessesLeft--;
            document.getElementById("guesses-left").innerHTML = this.guessesLeft;
        }
        if (this.guessesLeft === 0) {
            losses();
        }
    },
}

document.onkeyup = function (event) {
    userGuess = event.key;
    game.checker(userGuess);

}

wins = function () {
    alert("you win!!!");
    game.wins++;
    document.getElementById("wins-counter").innerHTML = game.wins;
    game.startGame();
};

losses = function () {
    alert("you lose!");
    game.losses++;
    console.log(game.losses);
    document.getElementById("losses-counter").innerHTML = game.losses;
    game.startGame();
};

