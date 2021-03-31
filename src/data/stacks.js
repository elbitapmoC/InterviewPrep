// Functions
// Push - Place elements at the top of the stack.
// Pop - Removing top elementof a stack
// Peek - Displaying top element of a stack
// Length - Determine how many elements in a stack.

let letters = [];

let word = 'corn';
let word_reversed = '';

//iterates through the string
function stackLetters() {
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
}

function popLetters() {
  for (let i = 0; i < word.length; i++) {
    // pops letters off letters array, letter is then added to word_reversed string
    word_reversed += letters.pop();
  }
}

function checkForPalindrome() {
  stackLetters();
  popLetters();
  if (word === word_reversed) {
    console.log(word + ' is a palindrome!');
  } else console.log("Nope");
}

checkForPalindrome();
