//1. for of  loop
// for (const iterator of object) { //object is which ds we have to iterate ,strings ,arrays, maps etc
// }

const arr=[1,2,3,4,5];
for (const num of arr) {
    //console.log(num);
}

const greetings ="Hello World";
for (const greet of greetings) {
    //console.log(greet);
}

//to iterate maps
const map = new Map();
map.set("IN" ,"India");
map.set("FR","France");
map.set("UK","United Kingdom"); 
for (const [key,value] of map) {
    //console.log(key," : ",value);
}

//Note: objects can not be iterated using this method
//2. for in : prints the keys in object ,index in arrays
const myObject={
    js:"JavaScript",
    py:"Python",
    rb: "ruby",
    cpp:"c++"
}
for (const key in myObject) {
    //to print keys
    //console.log(key);
    //to print values
    //console.log(myObject[key]);
    //to print both 
    //console.log(`${key} is for ${myObject[key]}`); 
}

//for arrays
const cars = ["honda","suzuki","ford","tata"];
for (const key in cars) {
    //console.log(cars[key]);
}
//Note: for in loop is not used for iteration of maps

//3. for each loop
const languages=["JavaScript","Java","Python","C++","Go"];
languages.forEach(function (value){ //this function is call back function and it does not have name
    //console.log(value);
})

//using arrow functions
languages.forEach( (val)=>{
    //console.log(val);
})

//we can pass a function
function print(val){
    //console.log(val);
}
languages.forEach(print);

//print index and array also
languages.forEach( (val,index,arr)=>{
    //console.log(val,index,arr);
} )

//to print array of objects
const language=[
    {
        LanguageName:"JavaScript",
        FileName:"js"
    },
    {
        LanguageName:"Java",
        FileName:"java"
    },
    {
        LanguageName:"Python",
        FileName:"py"
    }
]
language.forEach( (value)=>{
    console.log(value.LanguageName);
})