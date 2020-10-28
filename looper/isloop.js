"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  console.log(linkedlist);

  // this is to determine if we are in linkedlist OR node
  let current;
  if (linkedlist.head) {
    current = linkedlist.head;
  } else {
    current = linkedlist;
  }
  //--------------------
  let next = current.next;
  if (!next) {
    return false;
  }
  if (!current.next.previous || current.next.previous.value !== current.value) {
    return true;
  }
  return isLoop(next);
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
