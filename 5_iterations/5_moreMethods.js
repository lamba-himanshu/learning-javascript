//map 
const myNumbers = [1,2,3,4,5,6,7,8];
//const myNums = myNumbers.map( (num)=> num+10);
//console.log(myNums);

//chaining
const myNum=myNumbers
            .map( (num)=> num * 10)
            .map ( (num)=> num + 1 )
            .filter( (num)=> num > 30 );
//console.log(myNum);


//reduce method: The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
//syntax: .reduce(callback func ,initail value)

//sum of all numbers in myNumbers
const total = myNumbers.reduce( function (accumulator,currentValue) {
    return accumulator+currentValue;
},0); // 0 is initialized to accumulator

//arrow function
const sum =myNumbers.reduce( (acc,currVal) => acc+currVal ,0 );
//console.log(total);
//console.log(sum);

const shoppingCard =[
    {
        itemName: "jeans",
        price: 1000
    },
    {
        itemName : "t-shirt",
        price : 500
    },
    {
        itemName: "Jacket",
        price : 4000
    }
]

const totalBill=shoppingCard.reduce( (acc,currval) => acc + currval.price , 0);
console.log(totalBill);