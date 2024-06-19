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
//console.log(numberToString);
//console.log(typeof numberToString);


// ======================= operations ===============================

let value = 21;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(4/2);


let str1= "hello";
let str2 = " world";
//console.log(str1+str2);

// console.log("1"+2);  //12
// console.log(1+"2"); //12
// console.log(1+2+"3"); //33
// console.log("1"+2+2); //122  when string comes first the other number automatically converted to strings 
// console.log(2+2+"3"); //43   when number comes first then it performs operation and then append string value

// console.log(true); //true
// console.log(+true); // 1 because of conversion to number as true is incremented
//console.log(true+); //error
// console.log(+"");  //0

//prefix increment
let a=2;
let b=++a; //it increments value of and return value after incrementing
//console.log("a="+a,"b="+b); //3 3

//postfix increment
let c=3;
let d=c++; //value in d is 3 and then it increments c 
console.log("c="+c,"d="+d); //c=4 d=3
