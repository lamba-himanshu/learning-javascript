//creating object using constructor

const user2 = new Object();  //singleton object
//console.log(user2);  //return empty  object

user2.id="123";
user2.name="max";
user2.isLoggedIn=false;
// console.log(user2);
// console.log(user2.name);

//nesting objects
const user3={
    id:"124",
    name:{
        fullName:{
            "firstName" : "Sumit",
            lastName : "Kumar"
        }
    }
}
//access the first name
console.log(user3.name.fullName.firstName);

//combine two or more objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//or
const obj3=Object.assign({},obj1,obj2);
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//or
const obj4={...obj1,...obj2};
console.log(obj4);

//we can have arrays having different objects
const arr=[
    {
        id:"123"
    },
    {
        id:"124"
    },
    {
        id:"125"
    }
];
console.log(arr[0].id);

//we can get all the keys and values of the object
console.log(Object.keys(user2));
console.log(Object.values(user2));

//we can check whether a property exists in object or not
console.log(user2.hasOwnProperty("isLoggedIn")); //return true 

//=================== Object Destructuring ======================

//when we want print some values of the object multiple times the we use object.key to print the values 
//so instead of writing this we destructure the object. For e.g

const car={
    carName: "nano",
    companyName: "TATA",
    cost : "200000"
};

console.log(car.companyName); // instead of writing this we destructure the car object
//destructuring
//const {companyName}=car;
//or 
const {companyName:company,carName:name}=car;
//console.log(companyName);
console.log(company);

//=========== API ==========
//API: it is used to fetch and send data b/w the interface.   
//we write the values that we get from the backend. earlier we get get values in xml structure 
// but now we get these values in JSON format(javascript object notation)
//json format : we have keys and values of string type

// {
//     "name":"himanshu",
//     "age":"22"
// }

//or

// [
//     {},
//     {},
//     {}
// ]
