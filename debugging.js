// Remove block comments when ready to debug a program.

 //Program #1: "Careless"

let x = 3;
if(x => 3) {
  x++;
} else {
  x =+ 2;
}
console.log(x);

//Program #2: "Bad logic and math"

let money = 28;
if(money >= 50 && money >= 20) {
  money /= 2;
} else {
  money /= 1;
}


//Program #3: "And what else?"
const READLINE = require("readline-sync");

let num1 = READLINE.question("Enter num1: ");
let num2 = READLINE.question("Enter num2: ");
let num3 = READLINE.question("Enter num3: ");
let highnum = 0
if(num1 >= num2 && num1 >= num3){
	highnum = num1;
}   
if(num2 >= num3 && num2 >= num1) {
	highnum = num2;  
}
if(num3 >= num2 && num3 >= num1){
	highnum = num3
}
console.log(`The highest number was ${highnum}`);