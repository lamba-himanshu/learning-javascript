/* ==================================== Date =============================== */
//date object represents a single moment in time in platform independent format. it gives a number in milliseconds from  1 jan ,1970
//syntax

let todayDate=new Date();
//console.log(todayDate); //reurn date in unreadable format

//methods
// console.log(todayDate.toString()); //return string reprensentation of date
// console.log(todayDate.toDateString()); //return string of only date
// console.log(todayDate.toISOString()); //returns date in iso format
// console.log(todayDate.toLocaleDateString()); //  return 6/19/2024

//define date another syntax
let currDate= new Date(2024,0,14);
//console.log(currDate.toDateString());

// let tomDate = new Date(2024,6,20,5,30);
let tomDate = new Date("06-19-2024");
let tommDate = new Date("2024-1-14");
//console.log(tomDate.toDateString());
//console.log(tommDate.toLocaleString()); //1/14/2024, 12:00:00 am 

//locale is a object so we can pass parameter

//console.log(tommDate.toLocaleString('default'),{
//     //calendar:todayDate,
//     weekDay:"long"
// })

console.log(tomDate.getDay());
console.log(tomDate.getMonth()+1);

/* =========================== Time ================================ */
//timeStamp is used to comapre exact time while comapring score in quizes

let currTimeStamp = Date.now();
console.log(currTimeStamp); //return number value in milli seconds from 1970 till now
//console.log(tommDate.getTime()); //return a value in milli seconds
// to get time in seconds
console.log(Math.floor(currTimeStamp/1000));

