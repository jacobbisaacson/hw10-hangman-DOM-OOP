![GA Logo]()

# Hangman OOP Game

## Setup.

Fork and clone your fork. Make sure you're doing all the work in your fork. If you did it wrong, delete it and do it right.

## Assignment:

Build an OOP Hangman game from scratch.

## Requirements:

* Letters must be guessed with keypresses
* You must be able to win or lose one round (either guess word correctly or die trying).
* You must have a `game` object, a `Word` class, and event listeners.
* There must be no other code in the global scope, everything goes in either the `game` object, the Word class (or the `Letter` class if you decide to create one), or event listeners/handlers.



## STRONG SUGGESTIONS:

* Functionality to determine if a guess is good might go in Word or game ***or might be split between `game` object and `Word` class (i.e. `getGuess()` in game and `checkLetter()` in `Word` (which might also update the data structure, and also call the function that causes the word to reprint itself))
    * hint: in addition to changing the Word properties, checkLetter could return true or false... how might this be useful?

* Avoid referencing the `game` object inside the `Word` class if possible; if something has to do with the game more so than the word, it can go in the game object. you want your Word class to be just Word-specific stuff. in general a class should be a totally standalone thing -- that you could even drop in and use in another application.

* Event listers/handlers will call game object methods containing game play logic

* Do NOT put game logic in listeners/handlers. Just have them call game methods. 

* You may or may not want a `Letter` class.

## Advice/Help

Here is a loose framework you can start with. Included are comments with notes about ways you might set it up. It is not exhaustive, and you could certainly use a different approach, but it can help you get started.

```javascript
/* CLASSES HERE */

class Word {
  // avoid referencing the game object inside the Word class if possible
  constructor() {
    // word bank here?
    // choose random word from word bank
    // use it to set up a data structure to track correctly guessed letters
      // maybe an array of objects? // if you use a Letter class, those objects could be instances of that class
      
  }
  printWord() {
    // update/display the word with letters for correctly guessed letters and underscores for unguessed letters
    // maybe have spaces between the letters/underscores for readability?
  }
  checkLetter() { 
    // see if it's in word, 
    // change data structure appropriately
    // call printWord() on this instance
  }
}

/* GAME OBJECT HERE */

const game = {
  currentWord: "",
  guessedLetters: [],
  guessesRemaining: 8,
  startGame() {
    // resets guessedLetters
    // resets guessesRemaining
    // call getWord?
  },
  getWord() {
    // instantiate your word class and store it in this object?
    // prompt (using DOM) user to start guessing, or call another method that does this
  },
  showScoreboard() {
    // update/display guessed letters
    // update/display guesses remaining
  },
  processUserGuess() { // perhaps?  

  }
  // what else?
  // some kind of functionality to have game end in loss if they run out of guesses?
  // and to have game end in a win if they guess all the letters correctly?
}


/* LISTENERS HERE */

```


## Hungry for More

* Keep track of Rounds won and lost. 

* Slice up an image of a little man and have his parts appear like a traditional hangman game!

* Research Canvas [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) and make the little man be done using Canvas graphics
