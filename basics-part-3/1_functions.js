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
console.log(isLoggedIn("himanshu")); //this argument will override the value in parameter








