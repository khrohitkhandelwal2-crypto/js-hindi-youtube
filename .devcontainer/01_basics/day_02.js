// "use strict";  //treat all js code as newer version

//  //alert ( 3 + 3)  //we are using nodejs, not browser
 
//  //code readability shoud be high

//  */
//  /*
// data types =>
//     number => 2to power 53
//     bigint 
//     string =>""
//     boolean => true/false
//     null => standalone value (khali hai)
//     undefined => value assine nhi hui hai
//     symbol =>unique


 
//     //object
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object

let score = null

// console.log ( typeof score)
// console.log ( typeof (score))
let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);
// console.log( valueInNumber);

//"33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"rohit" => true
*/
    
let someNumber = 33 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// // console.log (2 >1)
// // console.log (2 < 1)
// // console.log (2 >= 1)
// // console.log (2 <= 1)
// // console.log (2 == 1)
// // console.log (2 != 1)


// console.log (null > 0);
// console.log (null == 0);
// console.log (null >= 0);
//                                       //inko hamesha avoide karna
// console.log (undefined == 0);
// console.log (undefined > 0);
// console.log (undefined < 0);

// // ===

// console.log("2" === 2);



//***************************************************operation******************************************* */

let value = 3
let negValue = -value
// console.log(negValue);

/*
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);
*/

let str1 = "hi! "
let str2 = " rohit"

let str3 = str1 + str2
console.log(str3);


let num1,num2,num3
num1 = num2 = num3= 2+2

let gameCounter = 100
--gameCounter;             //prefixed or postfixed
 console.log(gameCounter);
 