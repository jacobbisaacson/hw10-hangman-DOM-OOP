console.log("hangman");

class Letter {
	constructor(ltrInStr){
		this.character = ltrInStr
		this.guessed = false
	}
}

const ltrA = new Letter("a")
console.log(ltrA);

const word = "dog"
let ltrsArr = []

for(let i = 0; i < word.length; i++) {
	let ltrFromStr = new Letter(word[i])
	ltrsArr.push(ltrFromStr)
}

console.log(ltrsArr);



// const app = {

// 	array: [],

// 	gatherUserInput: function() {

// 	}


// }







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






















