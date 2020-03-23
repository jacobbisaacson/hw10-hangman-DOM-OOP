console.log("hangman");
class Letter {
    constructor(character) {
        this.guessed = false
        this.character = character
    }
    markGuessed() {
        this.guessed = true
    }
}
class Word {
    constructor(str) {
        // this.str = str
        this.letters = []
        for (let i = 0; i < str.length; i++) {
            // let ltrFromStr = new Letter(str[i])
            this.letters.push(new Letter(str[i]))
        }
    }

    getWordString() {
        let string = ""
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === true) {
                string += this.letters[i].character
            } else {
                string += " __"
                // string += this.letters[i].character
            }
        }
        return string
        console.log(str + " this is get word string");
    }
    checkLetter(character) {
        for (let i = 0; i < this.letters.length; i++) {
            if (character === this.letters[i].character) {
                this.letters[i].markGuessed()
                game.correctGuess = true
            }
        }
        // console.log("this should check letter");
    }
}

const game = {
    lettersGuessed: [],
    guessesRemaining: 7,
    correctGuess: false,
    currentW: null,
    gameWon: null,

    start(wordbank) {
        const randomW = wordBank[Math.floor(Math.random() * wordBank.length)]
        this.currentW = new Word(randomW)
        console.log(randomW);
        game.printWord()
        game.checkUserInput()
        this.displayMessage('have fun!')

        // let randomW
        // for (let i = 0; i < wordBank.length; i++) {
        //     randomI = Math.floor(Math.random() * wordBank.length)
        //     randomW = wordBank[randomI]
        // }
        // this.currentW = new Word(randomW)
        // this.printWord()
        // // console.log(game.currentW);
        // // game.start() -- consoled a bunch of times gets me a random word for the word bank

    },

    printWord() {
        const words = document.querySelector("#word")
        words.innerHTML = `${this.currentW.getWordString()}`
        // game.checkUserInput()
        // console.log(this.currentW.getWordString());
    },

    checkUserInput(letter) {
        this.currentW.checkLetter(letter)

        if (this.correctGuess === true) {
            this.displayMessage('good guess!')
            this.printWord()
            this.correctGuess = false
        } else {
            this.guessesRemaining--
            this.displayMessage('nope! guess again!')
            this.lettersGuessed.push(letter)
        }

        this.printStatus()
        this.checkGameStatus()

    },

    displayMessage(str) {
        const displayMessage = document.querySelector('#display-message')
        displayMessage.innerHTML = `${str}`
    },

    printStatus() {
        const printStatus = document.querySelector('#print-status')
        printStatus.innerHTML = `${this.guessesRemaining}' chances left!`
        this.checkGameStatus()

    },
    // winGame() {
    //     if (this.guessesRemaining >= 0)
    //         this.gameWon = true
    // },
    checkGameStatus(character) {
        if (this.guessesRemaining <= 0) {
            console.log("you lose");
            this.displayMessage("sorry, you lose!")
            return
        } else if (this.guessesRemaining > 0 && this.correctGuess === true) {
            console.log("you win"); // cant get this!
            return
        }
        // } > 0 && this.currentW.letters === this.currentW.getWordString) {
        //         console.log("getting winner");
        //         this.displayMessage("yay!")
        //     }
        // }


        // Here think about how you could check for a win here. You have the string on the game. 
        // Think of a way to know if each letter is guessed. After each guess think of how you can 
        // check if all of the letters in the word have been guessed or not.




        // if(this.currentW.markGuessed === true) {
        //  this.displayMessage('you win!')
        // }


        // if(this.currentW.letters === this.currentW.getWordString()) {
        //  this.displayMessage("you win!")
        //  return
        // } else
        // if(this.guessesRemaining <= 0) {
        //  this.displayMessage("sorry, try again!")
        //  return
        // }
    }

}

game.start()
console.log(game.currentW);

document.addEventListener("keydown", (event) => {
    game.checkUserInput(event.key)

})




// taco = new Word("taco")
// burrito = new Word("burrito")
// torta = new Word("torta")
// taco.letters[0].guessed = true
// taco.letters[2].guessed = true
// taco.getWordString()
// burrito.getWordString()