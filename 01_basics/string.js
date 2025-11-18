const name = "Komalkant"
const repoCount = 50

//Old Method of Adding a String :-
console.log(name + repoCount + "Value")

//New Method Of Adding a String with good format:-
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Komalkant')
console.log(gameName [0]);
console.log(gameName. __proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);