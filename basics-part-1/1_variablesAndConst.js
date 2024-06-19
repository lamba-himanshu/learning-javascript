
const rollNo = 101;  // the value assigned does not change
let accountName = "Himanshu";  //value changes
var accountEmail = "hl@gmail.com";  
/*
Not recommended to use var keyword to declare variable 
because of issue in block scope and functional scope
*/ 
city = "gurugram"; //not recommended as it is not a good to method to practice

let accountState; // when value is not assigned in variable then js take it as undefined variable

//rollNo = 102; //gives error 

console.log(rollNo);
console.log(accountName);
console.log(city);
console.log(accountEmail);

//instead of writing individual print statment we can write 

console.table([rollNo,accountName,accountEmail,city ,accountState]); //gives tabular result