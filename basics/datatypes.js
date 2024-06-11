/* DATATYpes 
1. null => standalone value or reprents an empty set
2. undefined => the value is not assigned yet
3. number => positive and negative folating pint number ranges between -(2^53 -1) to 2^53 -1
4. boolean => either true or false
5. BigInt => store very large integers
6. strings => represents a sequence of characters encoded in single or double quotes and are immutable 
7. symbol => to find uniqueness between different components or each symbol has unique and immutable primitive value
8. object
*/


let temperature = null; //null datatype
let age = 18;  //number datatype
let  name = "himanshu"; //string datatype 
let isLogged = false; //boolean datatype
let city; //undefined datatype

console.log(typeof temperature); //object
console.log(typeof age); //number
console.log(typeof city); //undefined
console.log(typeof name); //string