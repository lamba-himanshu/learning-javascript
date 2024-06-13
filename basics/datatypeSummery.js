//datatypes are of two types based on how data is stored in memory and how it is accessed from memory

//1. Primitive datatype : based on call by value(we get copy of value from the memory and changes are made to this copied value only)
//types: number, string, boolean, Bigint, null, undefined, symbol
let num=5;
let str="himanshu"
let isLoggedIn=true;
let bigNum=21324543654768579685708967n;
let temperature=null;
let state=undefined;
let symbolValue=Symbol("123");
// console.log(typeof symbolValue);  
// console.log(typeof bigNum);

//2. Non-Primitive datatype(or referenced datatype): based on call by reference (we get the data directly from the allocated memory)
//types: array,object,function

let names=["himanshu","sumit","amit"];
let obj={
    name:"himanshu",
    age:21,
}
let myFunction=function(){
    console.log("hello!");
}
// console.log(typeof names);
// console.log(typeof obj);
// console.log(typeof myFunction);