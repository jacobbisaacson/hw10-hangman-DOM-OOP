console.log("hangman");

class Letter {
	constructor(character) {
		this.guessed = false
		this.character = character

	}
}

class Word {
	constructor(str) {
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
		console.log(str);

	}

}


taco = new Word("taco")
burrito = new Word("burrito")
torta = new Word("torta")

taco.letters[0].guessed = true
taco.letters[2].guessed = true
taco.getWordString()
burrito.getWordString()
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






















