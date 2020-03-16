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
			this.str = str
			this.letters = []
			for(let i = 0; i < str.length; i++) {
				let ltrFromStr = new Letter(str[i])
				this.letters.push(ltrFromStr)
			}
		}

		getWordString() {

			let str = ""
			for(let i = 0; i < this.letters.length; i++) {
				if(this.letters[i].guessed === false){
					str += " _"
				} else {
					str += " "
					str += this.letters[i].character
				}
			}
			console.log(str + "this is get word string");
			return str
		}
		checkLetter(char) {
			for(let i = 0; i < this.letters.length; i++) {
				if(char === this.letters[i].char) {
					this.letters[i].markGuessed()
					game.correctGuess = true
				}
			
			}
		console.log(char + "this is check letter");
		}
	}
	const game = {
		lettersGuessed: [],
		guessesRemaining: 8,
		correctGuess: false,
		currentW: null,

		start(wordbank) {
			let randomW
			for(let i = 0; i < wordBank.length; i++) {
				randomI = Math.floor(Math.random() * wordBank.length)
				randomW = wordBank[randomI]
			}
			this.currentW = new Word(randomW)
			this.printWord()
			// console.log(game.currentW);
			// game.start() -- consoled a bunch of times gets me a random word for the word bank

		},

		printWord() {
			const words = document.querySelector(".word")
			words.innerHTML = `<ul>${this.currentW.getWordString()}</ul>`
			game.checkKeyPress()
			// console.log(this.currentW.getWordString());
		},

		checkKeyPress(key) {
			const yes = this.currentW.checkLetter(key)
			if(this.correctGuess === false) {
				this.correctGuess = true
			} else {
				this.guessesRemaining--
				this.lettersGuessed.push(key)
			}
		}

	}

		document.addEventListener("keydown", (event) => {
		game.printWord(event.key)
	})

		game.start()




// taco = new Word("taco")
// burrito = new Word("burrito")
// torta = new Word("torta")
// taco.letters[0].guessed = true
// taco.letters[2].guessed = true
// taco.getWordString()
// burrito.getWordString()
























