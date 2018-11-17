const READLINE = require("readline-sync");

let player = {
  courage: 0,
  intellect: 0,
  strength: 0,
};


console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes" || enterHouse == "Yes") {
  player.courage++;
  console.log(`${player.name} enters the haunted house`);
}
else {  player.intellect++;
        console.log(`${player.name} tries to turn around but is pushed into the house by a black clad figure!!!!`)
}
let inHouse = READLINE.question("You are now in the haunted house. It's dark and humid. You turn on your flashlight and see two doors. One on the left, and the other on the right. Which do you enter? (right or left)");
if(inHouse == "right" || inHouse == "left") {
  player.courage++;
  console.log(`${player.name} enters the door on the right. A psycho with a chainsaw begins chasing ${player.name} and ${player.name} runs into the tunnels to escape`);
}
else {  player.courage++;
        console.log(`${player.name} enters the room on the left and sees nothing but tunnels. ${player.name} enters the tunnels.`)
}
let tunnels = READLINE.question(`${player.name} is now in the tunnels. ${player.name} hears a scream further down the tunnels. Do you turn around and run or go to the source of the scream? (go or run)`);
if(tunnels == "run") {
  player.intellect++;
  console.log(`${player.name} runs back to the room, but someone is chasing them. He catches up and says his name is Victor, and that he'd just escaped certain death!`)
}
else { player.courage++;
        player.strength++;
         console.log(`You run and see a ghoul holding a knife to a someone's throat. You see a vase, pick it up, and throw it at the ghoul's head. It knocks out, and ${player.name} and the man named Victor run!`);
}
let tunnels2 = READLINE.question(`${player.name} and Victor are now roaming the tunnels, looking for an exit. All of a sudden, they hear a malicious scream, and a masked man is chasing them with a sword! Both of you begin to run, but Victor trips and falls. Do you stop and save him, or run and live? (run or stop)`);
if(tunnels2 == "run") {
  player.intellect++;
  console.log(`You hear Victor screaming as you run away, but as soon as it stops ${player.name} know Victor is dead. You make it out of the tunnels to the streets, a death on your conscience.`);
}
else { player.courage++;
        player.strength++;
        console.log(`${player.name} runs back and picks up Victor. They wait around the corner and tackle their attacker, taking the knife and killing him. ${player.name} and Victor both make it out of the tunnels, blood splattered all over their clothes.`)
}


console.log("*** THANKS FOR PLAYING ***");
console.log(`Courage Points: ${player.courage}`);
console.log(`Intellect Points: ${player.intellect}`);
console.log(`Strength Points: ${player.strength}`);

