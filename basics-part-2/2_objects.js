//Object is a datatype which is used to store keyed collections or complex entities.
//object is  created using  object() constructor or object literals.
//when we create a object using constructor then a singleton object is created. 
//but when we create a object using object literal, singleton is not created.

//syntax1
const obj={}; //not a singleton object
const obj2=new Object();  //singleton object


//we want to use symbol in user as a key so we use [] for symbol key other wise it will treat it as string
const mySym=Symbol("key1");

const user={    //name,city,email,age all these keys are of string type
    name: "himanshu",
    "full name": "himanshu lamba",
    "city": "gurugram",   //can declare keys in ""
    email: "himanshu@google.com",
    isLoggedIn: false,
    age: 22,
    [mySym]:"mykey"
};

//to acces object properties
console.log(user.name);
console.log(user["city"]);    //we can acces in this form also. Another e.g: console.log(user["age"]);
console.log(user["age"]);
// sometimes we need to access the keys using [""] 
//because suppose there is a key "full name" then we can not access this using dot so we use [""].
//console.log(user.full name);//gives error
console.log(user["full name"]);
console.log(user[mySym]); // to access symbol key

//to change/modify in user object 
user.city = "Rewari";
console.log(user.city);

// to stop/limit changes in the object
//Object.freeze(user);
user.age=23; 
//console.log(user.age);  //does not change

//to add function to object
user.print = function(){
    console.log("hello i am user");
};

console.log(user.print);  //[Function (anonymous)]
console.log(user.print()); // hello i am user gets printed

user.print2 = function(){
    console.log(`hello i am  ${this.name}`);  //this is used to reference same object
};

console.log(user.print2());

