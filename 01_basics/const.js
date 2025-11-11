const RollNo  = 202456369
var   Name    = "Komalkant"
let   Course  = "Btech"
accountCity   = "BAM"

console.log(RollNo);

// RollNo = 202456370
let accountState;

Name = "OM"
Course = "CSE"
accountCity = "Laxman Nagar"

console.table([RollNo,Name,Course,accountCity,accountState]);

// Mainly got to learn that we need to use only two keywords in java which is "const" and "let" which is use to declare the variable.
// Don't use var keyword to declare variable.
// You can't change the value to const variable latter, if it's once done then if you change it will show error.
// You can declare variable without any keyword (like accountCity in the above code),but it is suggested to not use this method.
// You can execute all the variable at once by using "console.table([var,var,var])" rather then repating "console.log()" in every variable.
// If you left an varibale value Null or without assigning any value to it, js will automatically take it as "undefined" after running it.