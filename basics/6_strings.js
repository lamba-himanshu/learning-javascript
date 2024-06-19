/*  
Strings are sequence of characters.
syntax:
 const name="himasnhu";
            or
 const str = new String ("hello!!"); 
*/

//note: to print anything use back ticks: used for string interpolation -create placeholder to directly inject variables
// e.g
const str1="himanshu";
const str2="   lamba   ";
const score=50
//console.log(`"${str1} scored ${score} runs"`);

//access any value at given key
//console.log(str1[1]);
// Methods : prototype include all methods of strings
/* 
    syntax for using proto
    console.log(str1.__proto__.charAt());

    1. length: gives the length of string
    console.log(str1.length);
    
    2.charAt():return character at given position
    console.log(str1.charAt(0));

    3. concatenate(): combines two strings and return a new string
    console.log(str1.concat(str2));
    
    4. indexof(): return index of given character
    console.log(str1.indexof("h"));

    5. subString(): returns a new string (contains a string including starting index char/in betweeen but excluding last index specified)
    console.log(str1.substring(0,4));

    6. trim(): removes the spaces from the starting and ending of string. 
    console.log(str2.trim());

    7. slice(): also return a section of string but we can give negative values also
    console.log(str1.slice(-8,-1));  //himansh
    console.log(str1.slice(-3));    //shu
    console.log(str1.slice(-3,-1)); //sh
    
    8. replace(): used to replace a value with another value
    console.log(str1.replace('s','a'));

    9. replaceall(): replace all values for given value
    console.log(str1.replaceAll('h','a'));

    10. includes(): return a boolea value for finding a value in the given string
    console.log(str1.includes('a'));

    11. split(): Returns an array of strings populated by 
                 splitting the calling string at occurrences of the substring sep.
        const str3="himanshu-lamba-223";
        console.log(str3.split('-'));   return [ 'himanshu', 'lamba', '223' ]

*/

//note string primitive and string objects give different result by using eval()
const num="2+2";
const num2=new String("num");
//console.log(eval(num)); //returns 4
//console.log(eval(num2)); //return "2+2"
  
