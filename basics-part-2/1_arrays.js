//array: stores collection of elements in a single variable name
//array copy operation create shallow copies.
//A shallow copy of an object is a copy whose properties share the same references
// as those of the source object from which the copy was made(changes made in copy are reflected in the source object).
//whereas deep copy does share same references as those of source object

//syntax
const arr1=[1,2,3,4,5];
const arr2=new Array(10,20,30,40,50);
//console.log(arr2);

//to add element 
const arr3=new Array();
arr3.push(1);  
arr3.push(10);  //push element to last 
arr3.push(11);
//console.log(arr3);

//to remove element
arr3.pop();  //removes the last element
//console.log(arr3);

//shift: remove the element at starting index(or first element)
//unshift: used to add element at the start of array(all values afe shifted towards right of array)
arr3.unshift(50);
arr3.unshift(100);
//console.log(arr3);  // [100,50,1,10]

arr3.shift();  
//console.log(arr3);  // [50,1,10]

//methods
// console.log(arr3.includes(0)); //return boolean value
// console.log(arr3.indexOf(50)); //return index of element and -1 if not found

const newArr=arr3.join(); //The string conversions of all array elements are joined into one string.
// console.log(newArr); // 50,1,10
// console.log(typeof newArr); //string

//slice() method: this method return a portion of the array specifying start and end without modifying the original array
const myArr=[10,20,30,40,50,60];
//console.log("myArr ",myArr);
const portion1=myArr.slice(0,3);
//console.log("slice portion ", portion1);  //slice portion  [ 10, 20, 30 ]

//splice(): this method return a portion of the array specifying start and end 
            //but it modifies the original array
// console.log("original myArr ",myArr);  //original myArr  [ 10, 20, 30, 40, 50, 60 ]
// const portion2=myArr.splice(0,3);
// console.log("splice portion ", portion2);  // splice portion  [ 10, 20, 30 ]
// console.log("modified myArr ",myArr);  // modified myArr  [ 40, 50, 60 ]

//reverse(): return elements in reversed order
//console.log(myArr.reverse());  //[ 60, 50, 40 ]

//we can pass an array into another array, it takes this array as an element
//but it makes difficult to access element
const arr4=[21,23,45,56];
const arr5=[1,2,3,45,5];
//arr4.push(arr5);
//console.log(arr4);    //[ 21, 23, 45, 56, [ 1, 2, 3, 45, 5 ] ]
//to access the element
//console.log(arr4[4][1]); //2

//concat(): return a new array of combined two arrays
const myArray=arr4.concat(arr5);
//console.log(myArray);

//spread operator is used to join multiple arrays
const joinArray=[...arr3, ...arr4, ...arr5];
//console.log(joinArray);


const arr=[1,2,3,[4,5],6,[6,7,[8,9]]];
console.log(arr);
const realArray=arr.flat(2); //2 represents depth
console.log(realArray);

//isArrays: return boolean value for checking if it a array or not
console.log(Array.isArray("himanshu"));  //false

//from(): converts strings,object etc to array
console.log(Array.from("himanshu"));  //  ['h', 'i', 'm','a', 'n', 's','h', 'u']

//of(): it also converts multiple values to array
let val=100;
let name="himanshu";
let score=150;
console.log(Array.of(val,name,score)); //[ 100, 'himanshu', 150 ]