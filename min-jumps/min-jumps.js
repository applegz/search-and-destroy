'use strict';

// Complete this algo
// let counter = 1;
const minJumps = (arr) => {
  //* solution
  let jumps = arr.map((el) => Infinity);
  jumps[0] = 0;

  for (let i = 1; i < jumps.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j + arr[j] >= i) {
        //? is this counting the element plus previous step?
        jumps[i] = Math.min(jumps[i], jumps[j] + 1); //? steps that takes less?
      }
    }
  }
  return jumps[arr.length - 1];
  // original version: not working
  // base case: when the length = 0, stop here and return the counter
  // edge case: check whether there is only 1 element in arr
  // if (arr.length < 2 ) {
  //   return counter;
  // }
  // counter++;

  // get value of 1st index
  // let first = arr[0];

  // create a variable that slice the range that represent by the # of 1st index
  // let jumpLength = 1;
  // create a loop to check the largest number in the slice
  // for (let i = 1; i < first; i++) {
  //   if (arr[i] > jumpLength) {
  //     jumpLength = arr[i];
  //   }
  // }

  // return minJumps(arr.slice(jumpLength));
};

module.exports = minJumps;
