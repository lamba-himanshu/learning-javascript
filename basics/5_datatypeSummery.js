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

// =====================memory allocation ======================

// 1. stack memory: used when primitive datatype are defined. 
//                  when we declare a variable we get the copy of it.

//2. Heap memory: when non primitive datatypes are defined.
//                when non primitive datatypes like array, objects are defined then heap is created 
        //and we get the reference(original value) means changes are directly made to original value.

let name1="himanshu";
let name2=name1;
//console.log(name2);  //himanshu

name2="sumit";  //we get the copy of name1, changes are not reflected in name1 
//console.log(name1); //himanshu
//console.log(name2); //sumit

let user1={              //allocated in heap memory
    email:"abc@gmail.com",
    age:18,
}

let user2=user1; //user2 is referenced to user1 
//console.log(user1);
//console.log(user2); //same o/p

user2.email="qwerty@gmail.com";
console.log(user1); //changes are reflected in user1 that means orginal value also changes in heap memory
console.log(user2);



