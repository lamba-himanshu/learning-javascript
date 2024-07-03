//this keyword is used to refer the current context
//it is used in object methods, where this refers to the object that the method is attached to,
// thus allowing the same method to be reused on different objects.

// const user={
//     name:"himanshu",
//     age:22,
//     welcomeMessage:function(){
//         console.log(`${this.name}, welcome to github`);  //here this points to name in user 
//         console.log(this); //it will print the current object
//     } 
// };

// user.welcomeMessage();
// user.name="sumit"; //conext is changed to sumit
// user.welcomeMessage();

//console.log(this); //print an empty object

//if we use this in a function defined outside object
//When invoked as a standalone function (not attached to an object: func()),
// this typically refers to the global object (in non-strict mode) or undefined (in strict mode)
function welcome(){
    const userName="himanshu";
    //console.log(this);// prints some key and values
    console.log(this.userName); //gives undefined
}
//welcome();
//similar for defining in expression function
//note : we can print values of objects using this keyword but in function we can not acces values

//arrow function

const profile = () =>{
    const userName = "himanshu";
    //console.log(this); //gives empty object
    console.log(this.userName); //undefined
}

//profile();

//implicit return : if we have single statement to return then we remove braces and return keyword 
// i.e if we had curly braces then function should have return statement
//const addTwo = (a,b) => a+b;

//if statement is in paranthesis the no need of return
const addThree = (a,b) => (a+b);

//to return object
const addTwo = (a,b) => ({userName:"himanshu"});
console.log(addTwo(2,3));  //{ userName: 'himanshu' }

