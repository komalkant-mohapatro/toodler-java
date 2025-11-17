// TWo Types of Data Types which is:

// 1: Primitive DataType     2: Non-Primitive DataType(ReferenceType)

//In Premitive DataType : There Are 7 Premitive DataTypes :

// String,Boolean,Null,Undefined,Symbol,BigInt,Number

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);
const bigNumber = 34565435766543567


//2.Non-Premitive DataType(ReferenceType):

// Array, Objects, Functions



const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
name: "hitesh",
age: 22,
}


const myFunction = function () {
console.log("Hello world");
}
console.log(typeof scoreValue);





//Undefined = "undefined"
//Null  ="object"
// Boolean  ="boolean"
// Number  ="number"
// String  ="string"
// Object (native and does not  = "object"
// implement [[Call]])  
// Object (native or host and does = "function"
// implement [[Call]]
// Object (host and does not Implementation-defined except may not be = "undefined",
// implement [[Call]])= "boolean", "number", or "string".








//..................................MEMORY..........................

// Stack (Primitive), Heap (Non-Primitive)


//STACK

let myYoutubename = "hiteshchoudharydotco"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


//HEAP

let userOne = {
email: "user@google.com",
upi:   "gmail@upi"
}



let userTwo = userOne


userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);