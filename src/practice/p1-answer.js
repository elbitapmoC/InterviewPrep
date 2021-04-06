// 1. K Largest elements
// Given an array of N positive integers, print k largest elements from the array.

//Function to return k largest elements from an array.
function kLargest(arr, n, k) {
  let orderedArr = arr.sort(compare).reverse();
  console.log(orderedArr.slice(0, k));
}

function compare(a, b) {
  return a - b;
}

kLargest([80, 9, 700, 40, 1, 5, 200], 5, 2);