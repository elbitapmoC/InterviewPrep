// Functions
// Push - Place elements at the top of the stack.
// Pop - Removing top elementof a stack
// Peek - Displaying top element of a stack
// Length - Determine how many elements in a stack.

let stackOfLetters = [];
let rword = '';

function reverseLetters(word) {
  for (let i = 0; i < word.length; i++) {
    stackOfLetters.push(word[i]); // Push each letter onto the stack.
  }

  for (let i = 0; i < word.length; i++) {
    rword += stackOfLetters.pop(); // Pops off the last letter of the array, it goes into the rword string..
  }
}

// split - Turns our string into an array of characters.
// reverse - Reverses the order of the elements within an array.
// join - Concatenates all the elements in an array.
function simpleReverseLetters(word) {
  return word.split('').reverse().join('');
}

function checkForPalindrome(word) {
  simpleReverseLetters(word);
  if (rword === word) console.log('PAL!');
  else console.log('Bummer...');
}

checkForPalindrome("LoL");