/**
 * Title - Get real type
 * 
 * Description - You should get the real type of a value, 
 *               basicly javascript typeof doesn't return the real object type of values, 
 *               u need to fix that.
 * 
 * Example - 1 ➞ "number"
 *           "a" ➞ "string"
 *           true ➞ "boolean"
 *           [] ➞ "array"
 *           null ➞ "null"
 */

function realType(value){
    return value != null ? value.constructor.name.toLowerCase() : value !== null ? 'undefined' : 'null';
}

const value = null;

console.log(realType(value));