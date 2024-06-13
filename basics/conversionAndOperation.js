// conversion of datatypes 

// let score = 33;
// console.log(typeof score);  //number
// console.log(score);         //33

// let score = "33";
// let valueInNumber = Number(score);
// console.log(typeof score);   //string
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);          //33 because string is converted into number


// let score = "33asd";
// let valueInNumber = Number(score);
// console.log(typeof score);   //string
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);   //NaN because 33asd is not a pure number and it is not convert into number

// let score = "himanshu";
// let valueInNumber = Number(score);
// console.log(typeof score);   //string
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);  //NaN  

// let score = null;
// let valueInNumber = Number(score);
// console.log(typeof score);   //object
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber); //0


// let score = true;
// let valueInNumber = Number(score);
// console.log(typeof score);   //string
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);  //1

//let isLoggedIn = 1;   //true
//let isLoggedIn = 0;     //false
//let isLoggedIn = "himasnhu"; //true
let isLoggedIn = "";   //false
let valueInBoolean = Boolean(isLoggedIn);
//console.log(valueInBoolean);

let x=33;
let numberToString = String(x);
console.log(numberToString);
console.log(typeof numberToString);