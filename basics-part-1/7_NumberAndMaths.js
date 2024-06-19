//syntax

const num=222;
const num2 = new Number(333);
//console.log(num2);

//methods:
//1. toString: convert number to string
const balance=2000;
//console.log(balance.toString());
//console.log(balance.toString().length);   //can use methods of string

//2. toFixed: to take precision value of number
//console.log(balance.toFixed(2));  //2000.00

//3. toPrecision: values can be given b/w range 1-21 and return a string
const num3=23.34543;
//console.log(num3.toPrecision(3));  //23.3

const num4=123.2343;
//console.log(num4.toPrecision(3)); //123

//4. toLocaleString:  to convert to a standard for writing a number to make it more readable. By default it is US standard
const number=1000000;
// console.log(number.toLocaleString()); //1,000,000
// console.log(number.toLocaleString('en-IN')); //10,00,000

//MAX_VALUE AND MIN_VALUE;
const max=Number.MAX_VALUE;
const min=Number.MIN_VALUE;
// console.log(max);
// console.log(min);

/*=========================== MATH ========================*/
//Functions
//1. abs(): to make a number absolute
//console.log(Math.abs(-4)); //4

//2.round(): to roundoff a number
//console.log(Math.round(4.6)); //5

//3. ceil(): to round off a number to its greater value
//console.log(Math.ceil(4.2));  //5

//4. floor():to round off a number to its smaller value
//console.log(Math.floor(4.2)); //4

//Methods

// console.log(Math.sqrt(25)); //returns square root of a number
// console.log(Math.pow(2,3)); // power of a number
// console.log(Math.max(2,3,4,5,10)); //returns maximum number in an array
// console.log(Math.min(25,1,45,22)); //returns minimum number in an array
 
// random() method: return value b/w 0 & 1
console.log(Math.random()); 

//to get number between some limit multiply by 10 and add 1 to avoid getting 0
console.log((Math.random() * 10)+1); 

//e.g to get number b/w 10 and 20
const maxValue=20;
const minValue=10;
console.log(Math.floor(Math.random() * (maxValue - minValue + 1 )) + minValue); //min is added because to get number above 10 and floor to round off





