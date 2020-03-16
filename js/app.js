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
				if(this.letters[i].guessed === true ) {
					this.letters[i].markGuessed()
				}
			
			}
		console.log(char + "this is check letter");
		}

	}


	const game = {
		lettersGuessed: [],
		guessesRemaining: 8,
		correctGuess: false,
		currentW: "",

		start(wordbank) {
			for(let i = 0; i < wordBank.length; i++) {
				randomI = Math.floor(Math.random() * wordBank.length)
				randomW = wordBank[randomI]
			}
			this.currentW = new Word(randomW)
			// this.printWord()
			console.log(game.currentW);
			// game.start() -- consoled a bunch of times gets me a random word for the word bank

		}
	}

taco = new Word("taco")
burrito = new Word("burrito")
torta = new Word("torta")

taco.letters[0].guessed = true
taco.letters[2].guessed = true
taco.getWordString()
burrito.getWordString()






// class  Word {
// 	constructor(str){
// 		//make letterObj for each letter in str and put inside lettersArr
// 		this.string = str
// 		this.character = []
// 		this.guessedLetter =  false// false means wrong guess
// 		this.letters = []
// 		this.correctGuessedLetters = []
// 		for(let i = 0; i < str.length; i++){
// 			this.letters.push(str[i])
// 		}
// 	}
// }
// const game = {
// 	wordCount: 0, //when game ends increase ++
// 	remainingGuesses : 8,
// 	//add word property here
// 	word : {},
// 	hiddenWord : "",
// 	hiddenWordMethod : () => {
// 		let secretWord = ''
// 		for(let i = 0; i < game.word.letters.length; i++){
// 			const curCharInWord = game.word.letters[i]
// 			console.log("indexOf",game.word.correctGuessedLetters.indexOf(curCharInWord))
// 			if(game.word.correctGuessedLetters.indexOf(curCharInWord) !== -1){
// 				secretWord += curCharInWord
// 			}
// 			else secretWord += '-'
// 		}
// 		game.hiddenWord = secretWord
// 		console.log("hiddenword", game.hiddenWord)
// 		game.printHiddenWord()
// 	},
// 	printHiddenWord : () => {
// 		const hiddenWordTagLocation = document.querySelector("#hidden-word")
// 		hiddenWordTagLocation.innerHTML = game.hiddenWord 
// 	}, 
// 	gameResult : () => {
// 		if(game.remainingGuesses > 0){
// 			if(game.hiddenWord === game.word.string){
// 				alert(`You Win`)
// 				//start the next game/word, clear old stuff, rest things
// 			}
// 		} else alert (`Out of guesses, You lose.`)
// 	}, 
// 	checkLetter : function(str){
// 		//if guess is correct change word.guessedLetter to true
// 		if (game.word.letters.indexOf(str) >= 0){
// 			game.word.guessedLetter = true
// 			game.word.correctGuessedLetters.push(str)
// 			//reveal true letters in hidden word
// 			game.word.character
// 		}else game.remainingGuesses -= 1
// 		game.numOfGuessesLeft()
// 		//not finished
// 		game.gameResult()
// 	},
// 	numOfGuessesLeft : () => {
// 		const numOfLettersInWordLoc = document.querySelector("#remaining-guesses")
// 		// console.log('0', numOfLettersInWordLoc)
// 		numOfLettersInWordLoc.innerHTML = `${game.remainingGuesses} guesses left`
// 	},
// 	// guessLetter : () => {
// 	// }, 
// 	start : () => {
// 		game.numOfGuessesLeft() 
// 		let str = wordBank[game.wordCount]
// 		console.log("current str word", str)
// 		game.word = new Word(str)
// 		// game.word is working ^^ 
// 		game.hiddenWordMethod()
// 	},
// }
// game.start()
// //SUBMIT BUTTON LISTENER
// const submitBoxLocation = document.querySelector("#guess-a-letter")
// submitBoxLocation.addEventListener("submit",(event)=>{
// 	const inputLocation = document.querySelector("#item-text-input");
// 	event.preventDefault();
// 	//check if inputted letter is in word / used already
// 	// game.checkLetter(inputLocation.value); //this works
// 	game.word.char = inputLocation.value; //working
// 	game.checkLetter(game.word.char)
// 	inputLocation.value = ''; //working
// 	game.hiddenWordMethod()
// 	console.log("submit happened")
// })




// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Hangman Game</title>
// 	<link rel="stylesheet" type="text/css" href="css/style.css">
// </head>
// <body>
// 	<h1>Hangman Game</h1>
// 	<h3 id="hidden-word"></h3>
// 	<h4 id="remaining-guesses"></h2>
// 	<div id="letters-group" class="letters">
// 	</div>
// 	<form id="guess-a-letter">
// 	    <input id="item-text-input" type="text" name="demoInput" placeholder="Guess A Letter" />
// 	    <button id="add-item">Submit Letter Choice</button>    
// 	</form>
// 	<div id="guessed-letters" class="guessed-letters">
// 	</div>
// <script type="text/javascript"src="js/wordbank.js"></script>
// <script type="text/javascript" src="js/app.js"></script>
// </body>
// </html>






















// * Add a method `checkLetter()` to your `Word` class.  It should:
//   * take a `character` as an argument, and
//   * go through the array of letter objects and change the `guessed` 
//   boolean to true if the guessed letter matches that letter in the array 
//   (if the letters are instances of the `Letter` class, maybe `letter` 
//   	should have a method `markGuessed` that does this), and
//   * return `true` if the letter was found in the array, or return `false` otherwise. 
//   * A few commits would have been appropriate as you did the above steps.




// --------------------------------------------------------

// 1. EVENT LISTENER -- 
// statement that tells browser to be on the lookout for some event


// 2. EVENT HANDLER
// code (a function) that will run when the event in question happens


// -----

// we add event listeners which means that we're telling the browser:

// "When the user does [some event], here's the code 
// (a funcion--THE EVENT HANDLER)" I want you to run

// after this
// THE BROWSER WILL CALL THAT FUNCTION FOR YOU WHEN THAT EVENT OCCURS

//// SYNTAX


//  ------   someElement.addEventListener(event name, someCallback i.e. the event handler) ------- 






















