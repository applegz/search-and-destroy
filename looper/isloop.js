'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // console.log(linkedlist);

  // this is to determine if we are in linkedlist OR node
  let current;
  if (linkedlist.head) {
    current = linkedlist.head;
  } else {
    current = linkedlist;
  }
  //--------------------
  console.log(`current.value`, current.value);

  let nextOfCurrent = current.next;
  console.log(`nextOfCurrent`, nextOfCurrent);
  let previous = current.next.previous;
  console.log(`previous.value`, previous.value);
  console.log(`nextOfCurrent.value`, nextOfCurrent.value);
  // console.log(previous.value === next.value);
  console.log(`previous`, previous);

  if (!next) {
    return false;
  }
  if (next.value !== previous.value) {
    return true;
  }
  console.log(`we are in the loop now.`);
  isLoop(next);
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
