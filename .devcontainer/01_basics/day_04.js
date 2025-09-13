//string
const name ="rohit"
const repoCount = 50

// console.log(name+repoCount+"value");
 //ISKO USE NHI KERNA HOTA HAI
console.log(`hello my name is ${name} and my repo is ${repoCount}`);
//ISKO USE KERNA HAI
 
const gameName = new String('rohit khandelwal')

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
console.log(gameName.substring());
console.log(gameName.slice());
console.log(gameName.search('a'));



// const codeName = new String('naman-khandelwal')

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring = gameName.slice(0,5)
console.log(anotherstring);

const newStringOne = "  rohit  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://rohit.com/rohit%20khandelwal"

console.log(url.replace('%20','_'))

console.log(url.includes('yash'));

console.log(gameName.split('-'));

