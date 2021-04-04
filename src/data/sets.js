// What is a Set?
// A Set lets us store a collection of data, objects to primitive types


let myArr = [1, 23, 45, 31, 4, 0];
// Initialize a set
const mySet = new Set(myArr); // Set(5) { 1, 23, 45, 31, 4 }
console.log(mySet);
// Adding items to a set
mySet.add('100'); // Set(5) { 1, 23, 45, 31, 4, "100" }
mySet.add({
  a: 1,
  b: 2
});

let uniqueArr = [...myArr]

// We can only store unique elements.
mySet.add(1); // This won't be added to the end of the set, like an array, the values must be UNIQUE(as mentioned above).

// Delete an item from a Set by key
mySet.delete(45);

// Completely clear the set..
// mySet.clear()

// Check if an item is in the set
mySet.has(1) // False, b/c we cleared the set above.
// True, when clear is commented out.
// OR
// We can print out each element in our set.
mySet.forEach(val => console.log(val))

// Entries returns an iterator
const i = mySet.entries();
console.log(i.next());
// Returns an object: { value, done = false }
// done is false until iterator ends.

// Get the # of items in a set
// This is a property, notice that we didn't add ().
mySet.size

// Iterate the items in a set (values & keys are equal)
// Use values
for (const k of mySet.values()) {
  console.log(k);
}

// Use keys
for (const k of mySet.keys()) {
  console.log(k);
}

// We can also convert a set to a regular array.
const setToArr = [...mySet.keys()];
const setToArr = [...mySet.values()];