//Function are set of statements that performs a task or calculates a value
//syntax

function functionName(){}
//e.g
function printName(){
    console.log("himanshu lamba");
}

//printName();

//function to add two numbers
function addtwoNumbers(num1,num2){
    console.log(num1 + num2);
}
//addtwoNumbers(2,4);
//addtwoNumbers("4",2);  //how do function will know what type of number we are giving as arguments, for that we use if-else statement

function addtwoNumber(num1,num2){
    //let result=num1 + num2;
    //return result;
    return `Sum of two numbers is ${num1+num2}`;
}

//const result=addtwoNumber(4,5);
//console.log(result);
//what will happen if does not pass any value
//console.log(addtwoNumber()); //Sum of two numbers is NaN will be printed and undefined for strings

function isLoggedIn(userName="lamba"){ //if we pass values to parameters then if statement is never true
    if(!userName){  //userName===undefined
        console.log("Please Enter a username..");
        return;
    }
    return `${userName} has loggedIn`;
}
//console.log(isLoggedIn("himanshu")); //this argument will override the value in parameter

//if we don't know how many arguments are there then it is difficut to define the parameters of the function
//for e.g while making shopping card the user keeps adding products and we have to add the price of each item
//so we use rest operator(...) it takes as many arguments as you want

function calculateCardPrice(val1,val2,...num){   //val1 and val2 takes the first two arguments 100,200 ,rest in array
    //console.log(num);  //prints an array of argument passed 
    return num;
}

console.log(calculateCardPrice(100,200,300,400));   //prints an array of argument passed

//===============passing objects===============
const user={
    userName:"himanshu",
    age: 21
};

function handleObject(anyObject){ //we passed anyObject as parameter in function because it doesnot know which object is passed
    console.log(`UserName is ${anyObject.userName} and age is ${anyObject.age}`);
}

//handleObject(user);
//we can define the object in the argument itself

handleObject({
    userName:"himanshu",
    age: 21
});

const arr=[100,200,300,400,500];
//passing array
function returnArrayValue(getArray){
    return getArray[2];
}

console.log(returnArrayValue(arr));
