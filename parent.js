const READLINE = require("readline-sync")

console.log(`WELCOME TO PARENT BOT`);
let hw = READLINE.question(`Have you done your homework? yes or no?:`);

if(hw === `yes`){
	console.log(`Great, now study`);
}
if(hw === `no`){
	console.log(`Go do your homework`);
}

let shower = READLINE.question(`Have you showered? yes or no?:`);

if(shower === `yes`){
	console.log(`Now go brush your teeth`);
}
if(shower === `no`){
	console.log(`Hurry up and shower`);
}





