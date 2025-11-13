let SNumber = 33

let isNumberString = String(SNumber)
console.log(isNumberString);
console.log(typeof isNumberString);

//Here we have converted a Number value into String value.

let Anumber = 33

let issNumberString = Boolean(Anumber)
console.log(issNumberString);
console.log(typeof issNumberString);

//Here we converted a Number value into Boolean Value.


let score = "34"

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

//Here we converted a String value into Number Value.



let skid = "33abc"

let valueInNumbers = Number(skid);
console.log(valueInNumbers);
console.log(typeof valueInNumbers);


//Here we have converted a Random number with letters value into number Value which in reurn show "NaN" whcih mean "Not a Number".


let one = 1

let valueIs = Boolean(one)
console.log(valueIs);
console.log(typeof valueIs);

// Here we have converted 1 into boolean expression whcih is ofcourse true so it printe True.
// For True = 1, For False = 0 



console.table([valueIs,valueInNumber,valueInNumbers,isNumberString,issNumberString]);

console.table([typeof valueIs, typeof valueInNumber, typeof valueInNumbers, typeof isNumberString, typeof issNumberString]);
 