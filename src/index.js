function printManyTimes(str) {
  "use strict";

  const SENTENCE = [
    str,
    {},
    'candle'
  ];
  Object.freeze(SENTENCE)


  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");