//IIFE: Immediately Invoked Function Expression
//used for two reasons
//when we want immediately excute after writing a function
//sometimes we dont want global variables to interfare with variables defined in the function
//i.e we want to define a separate scope that does not want pollution from global scope decalartions

//syntex: ()() :1st paranthesis is for function definition and second for execution
//named IIFE
(function connectivity(){
    console.log("DB connected");
})() ; //to end the execution of this function then we use ';'

//simple IIFE
( (name) => {
    console.log(`hello ${name}`);
})("himanshu");

