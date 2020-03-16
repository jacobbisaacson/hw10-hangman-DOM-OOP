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
            this.letters.push(new Letter)
        }
    }

    getWordString() {

        let string = ""
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === true) {
                string += this.letters[i].character
            } else {
                string += " __"
                // str += this.letters[i].character
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
        console.log("this should check letter");
    }
}

const game = {
    lettersGuessed: [],
    guessesRemaining: 8,
    correctGuess: false,
    currentW: null,

    start(wordbank) {
    	const randomW = wordBank[Math.floor(Math.random() * wordBank.length)]
    	this.currentW = new Word(randomW)
    	console.log(randomW);
    	game.printWord()
    	game.checkUserInput()

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

        if(this.correctGuess === true) {
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
    },

    checkGameStatus(character) {
    	if(this.currentW.letters === this.currentW.getWordString()) {
    		this.displayMessage("you win!")
    		return
    	} else
    	if(this.guessesRemaining = 0) {
    		this.displayMessage("sorry, try again!")
    		return
    	}
    }

}

document.addEventListener("keydown", (event) => {
    game.checkUserInput(event.target)

})

game.start()




// taco = new Word("taco")
// burrito = new Word("burrito")
// torta = new Word("torta")
// taco.letters[0].guessed = true
// taco.letters[2].guessed = true
// taco.getWordString()
// burrito.getWordString()