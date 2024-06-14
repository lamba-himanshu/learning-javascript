// console.log(2>2);
// console.log(2<2);
// console.log(2>=2);
// console.log(2<=2);
// console.log(2==2);

//console.log("2">=2);//js automatically converts string into number 
//console.log(2<="2"); 
//console.log("2" == "3");//js automatically converts string into number before comparison

//for comparison of null js converts null to number ,treating null as 0
// console.log(null>0); //false
// console.log(null<0); //false
// console.log(null<=0); //true
// console.log(null>=0); //true

//for checking eqality it works differently
// console.log(null==0); //false

// === is used for strict check (checking both value as well as datatype)

console.log("3" == 3); //returns true as it checks only the value 
console.log("3" === 3);  //return false as it checks value as well as datatype so is datatype is not same,
                        // one is string  and otherone is number 