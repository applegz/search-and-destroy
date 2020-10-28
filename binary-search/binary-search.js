"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1) {
    return array[0] === target;
  }
  let midpoint = Math.floor(array.length / 2);
  if (array[midpoint] === target) {
    return true;
  }
  if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    return binarySearch(array.slice(midpoint), target);
  }

  //BASE CASE - when there's one element lef, check if it's the target
  //assume that the input array is sorted
  //get the midpoint of the array
  //compare midpoint to the target
  //if the target is smaller than the midpoint, call binary search on left half
  //otherwise call binary search on the right half
  //if the
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
