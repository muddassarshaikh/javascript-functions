/**
 * Write a function deepEqual that takes two values and returns true only if they
 * are the same value or are objects with the same properties, where the values
 * of the properties are equal when compared with a recursive call to deepEqual.
 * To find out whether values should be compared directly (use the === operator for that)
 * or have their properties compared, you can use the typeof operator.
 * If it produces "object" for both values, you should do a deep comparison.
 * But you have to take one silly exception into account: because of a historical accident,
 * typeof null also produces "object".
 * The Object.keys function will be useful when you need to go over the properties of objects to compare them.
 */

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object')
    return false;

  let obj1Key = Object.keys(obj1);
  let obj2Key = Object.keys(obj2);

  if (obj1Key.length != obj2Key.length) {
    return false;
  }

  for (let key of obj1Key) {
    if (!obj2Key.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
console.log(deepEqual('', ''));
