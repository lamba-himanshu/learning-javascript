//control flow decides which code to be executed based on some conditions
//if statement: if the condition is true then only the statements in the scope is executed

//if(condition){
    //statements
//}
//e.g
const temperature= 40;
if(temperature<40){
    console.log("Temperature is less than 40");  //not executed as 40<40 - false
}

//if-else statement: if the condition in if statement is true then code in if is executed otherwise code in else is executed
const score=100;
if(score==100){
    console.log("Score is 100");
} 
else{
    console.log("Score is not 100");
}

//when we wnat to check multiple condition the we use if -else if-else

if(score>200){
    console.log("Score is greater then 200");
}
else if(score>150){
    console.log("Score is greater then 150");
}
else if(score==100){
    console.log("Score is equal to 100");
}
else{
    console.log("score is less than 100");
}

//multiple conditions check in if statement
const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard){  //&& : both condition must be true
    console.log("you can purchase the item");
}

const boundary=6

if(boundary == 6 || boundary==4){ //if either of condition is true then code gets executed
    console.log("player hit a boundary");
}