/**
 * Write a function arrayToList that builds up a list structure like the one shown
 * when given [1, 2, 3] as argument.
 * Also write a listToArray function that produces an array from a list.
 * Then add a helper function prepend , which takes an element and a list and creates a
 * new list that adds the element to the front of the input list, and nth , which takes a list
 * and a number and returns the element at the given position in the list
 * (with zero referring to the first element) or undefined when there is no such element.
 * If you haven’t already, also write a recursive version of nth.
 */

const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

console.log(arrayToList([10, 20]));

// Solution 1
const listToArrayUsingWhile = (list) => {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
};

// Solution 2
const listToArrayUsingFor = (list) => {
  let arr = [];
  for (node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

console.log(listToArrayUsingWhile(arrayToList([10, 20, 30, 40])));
console.log(listToArrayUsingFor(arrayToList([10, 20, 30, 40])));

const prepend = (element, list) => {
  return { value: element, rest: list };
};

console.log(prepend(10, prepend(20, null)));

// Solution 1
const nth = function (list, step) {
  for (let node = list, counter = 0; node; node = node.rest, counter++) {
    if (counter === step) {
      return node.value;
    }
  }
};

const nthUsingRecursion = (list, step) => {
  if (!list) {
    return undefined;
  } else if (step === 0) {
    return list.value;
  } else {
    return nthUsingRecursion(list.rest, step - 1);
  }
};

console.log(nth(arrayToList([10, 20, 30]), 4));
console.log(nthUsingRecursion(arrayToList([10, 20, 30]), 2));
