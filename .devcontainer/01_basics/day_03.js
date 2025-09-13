// primitive

// 7types : string, number, boolearn, null,undefined,symbal, bigInt

//JavaScript is a dynamically typed language :This flexibility is a key characteristic of dynamically typed languages like JavaScript, Python, and Ruby. In contrast, statically typed languages (like Java or TypeScript) require you to declare the data type of a variable explicitly, and type checks are performed before the program runs.
const score= 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol( '123');
const anotherId =Symbol('123')
console.log(id=== anotherId);

const bigNumber = 1564125464816556412651651n

//non-primitive (reference):

//array,objects,functions

const heros =["shaktiman","nagaarjun","doga"]
let myObj = {
    name:"rohit",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);


//stack(primitive), heap(non-primitive)

let myYoutubename ="rohitkhandelwal.com"
let anothername = myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"rohit.com",
    upi:"9352885001ybl"
}

let userTwo = userOne
userTwo.email ="rohit@google.com"
userTwo.upi ="7727918430ybl"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);
console.log(userTwo.upi);