/**
 * Title - Get Real Type
 * 
 * Description - Create a function that takes a value as an argument and return the type of this value. 
 *               You should get the real type of a value (javascript typeof doesn't return the real object type of values 
 *               and you need to fix that).
 * 
 * Example - realType(1) ➞ "number"
 *           realType("a") ➞ "string"
 *           realType(true) ➞ "boolean"
 *           realType([]) ➞ "array"
 *           realType(null) ➞ "null"
 */


function realType(value){
	return value != null ? value.constructor.name.toLowerCase() : value !== null ? 'undefined' : 'null';
}

console.log(realType(1));