//loops are simple way to do something repeatedly.
//A for loop repeats until a specified condition evaluates to false
//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//print numbers 1 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);   
}

//nesting of loops
//print table from 1 to 10
for (let i = 1; i <= 10; i++) {
    //console.log("Table of ",i);
    for (let j = 1; j <=10; j++) {
        //console.log(i + " * " + j + " = " + (i*j) );
    }
}

const cars = ["honda","suzuki","ford","tata"];

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    //console.log(element);
}

//break keyword : Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of index is ${index}`);
}

//continue : it terminates the current iteration and continues the execution for next iteration
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of index is ${index}`);
} 