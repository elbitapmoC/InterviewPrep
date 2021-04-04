// Data Structures(DS)
// A way of organizing, managing & storing data.
// Key for clean, modifiable and efficient code.

// -----------------------------*
// Arrays
// -----------------------------*

// value.x; // dot notation

// value[x]; // bracket notation
// value[x]; // The expression between the [] is evaluated and uses the result converted to a string as the property name.
// x is interpreted differently in the notations mentioned above.

// Get length of an arry
// arr.length;

// capitalize all letters
let script = "exo 28:42"
// console.log(script.toUpperCase());
// .toLowerCase to lower all the letters.

let myArr = [1, 2, 3];
myArr.push(4) // Adds on to the end of an array.
myArr.push(5)

// console.log(myArr); // Removes from the end of the array

// console.log(myArr.pop()); // Shows what's being removed from the end of the array

// -----------------------------*
// Objects
// -----------------------------*
let day1 = {
  squirrel: false,
  events: ['work', 'pet dog', 'pizza', 'ride scooter']
}

// console.log(day1.wolf); // undefined, doesn't exist.
day1.wolf = false
// console.log(day1.wolf); // false

// Properties whose names aren’t valid binding names or valid numbers have to be quoted.
day1.descrption = {
  work: 'Went to work',
  'pet dog': 'Hands scratch tummy of dogg-o'
}

// console.log(day1);
delete day1.descrption['pet dog']; // deletes "pet dog" property
// console.log("pet dog" in day1.descrption); // checks for "pet dog" inside the description object

// We can find out which properties an object has by using Object.keys - Returns the property names as strings
// console.log(Object.keys(day1));

// We can copy all properties from 1 object to another by using Object.assign.
let elements = {
  fire: true,
  water: true,
  ice: true,
  earth: true
}

// Make a copy of elements object and assign / add it on to the day1 object.
Object.assign(day1, { elements }); // {} optional
console.log(day1);

let obj1 = { val: 10 };
let obj2 = obj1;
let obj3 = { val: 10 };

console.log(obj1 == obj2); // true
console.log(obj1 == obj3); // false, obj1 and obj3 are pointing to different objects

let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel }) // This is shorthand for events: events
}
