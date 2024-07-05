//truthy values: we assume that value is true 

//const userName="himanshu"
const userName=[]

if(userName){  //we assume that userName is true that means it has some value
    console.log(`Username is ${userName}`);
}else{
    console.log("Don't have username");
}
//if string is empty then it is considerd as false value
//if empty array is passed then it is considered as true
//so there are some rules for which values to considerd as truthy and falsy values

//falsy vlaues: false, 0 , -0 , "" , BigInt 0n , null , undefined , NaN

//truthy values: true, "0" , 'false' , " " , [] , {} , function(){} 

//to check an array is empty or not
if (userName.length === 0) {
    console.log("Array is empty");
}

//to check object is empty or not
const obj={}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

//note: nullish coalescing operator(??) - null or undefined 
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10;
console.log(val1); //prints 5

val1 = null ?? 10;
console.log(val1); //prints 10

val1 = undefined ?? 20;
console.log(val1); //20

val1 = null ?? 10 ?? 20;
console.log(val1); //10

//ternary operator
//syntax:-> condition ? true : false;

const cost=100
cost==100 ? console.log("cost is",cost) : console.log("cost is not ",cost);
