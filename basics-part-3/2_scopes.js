/*  The scope is the current context of execution in which values 
    and expressions are "visible" or can be referenced.
    there are global scope : the default scope for all code running in script mode.
    Block scope: the scope created using curly braces
*/
//global scope
let a = 10
const b = 20
var c= 30 

//block scope
if(true){
    let a = 50;
    const b = 60;
    var c = 70;  //scope does not work for var variable
}

console.log(a);  //10
console.log(b);  //20
console.log(c);  //30

//note: scope is different for code environment with node , working with windows ,or borwsers 

//=========== nested scope =========
//child function can access the variables of parent function but parent function cannot access the child function vriables
function one(){
    const name="himanshu";
    function two(){
        const age=22;
        console.log(name);
    }
    //console.log(age); //it wiil print error of not defined as age is not defined within one() scope but is defined in two()
    two();
}

one();

//whenever a function is called then call stack is created

//============== function hoisting =====================

//we can call function before initialization
console.log(addOne(5)); //this can be done
function addOne(num){
    return num+1;
}

//addTwo(5);  //wwe cannot access addTwo function before initialization in case of storing function in variable
const addTwo=function(num){  //storing the function in a variable is called expression
    return num+2;
}
console.log(addTwo(5));