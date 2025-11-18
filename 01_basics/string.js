const name = "Komalkant"
const repoCount = 50

//Old Method of Adding a String :-
console.log(name + repoCount + "Value")

//New Method Of Adding a String with good format:-
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Komalkant-Mohapatro')
console.log(gameName [0]);
console.log(gameName. __proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const firstOccurance=gameName.indexOf("a")
const secondOccurance=gameName.indexOf("a",firstOccurance+1)

console.log(firstOccurance);
console.log(secondOccurance);


const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "     Komalkant     "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "hhtps://komalkant%20mohapatro"


console.log(url.replace('%20', '-') );
console.log(url.includes('komalkant'));


console.log(gameName.split('-'));
