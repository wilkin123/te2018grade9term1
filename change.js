// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
let inputCents = READLINE.question(" Hello, I am a change machine. Please Type you number of cents: ");
// fill in object below with all relevant properties (see instructions)
let remainder1 = (inputCents%25);
let remainder2 = (remainder1%10);
let remainder3 = (remainder2%5);
let changeMachine = {
	inputCents: undefined,
	quarters: Math.floor(inputCents/25),
	dimes: Math.floor(remainder1/10),
	nickels: Math.floor(remainder2/5), 
	pennies: Math.floor(remainder3/1),
	greeting: "Hello, I am a change machine",
	farewell: "Farewell, human",
};
// write code below that simulates the change machine in action
let x = changeMachine.quarters;
console.log(`quarters=${x}`);
let y = changeMachine.dimes;
console.log(`dimes=${y}`);
let z = changeMachine.nickels;
console.log(`nickels=${z}`);
let a = changeMachine.pennies;
console.log(`pennies=${a}`);
let farewell = "Farewell, human"
console.log(farewell);


