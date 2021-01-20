var readLineSync = require('readline-sync')
const chalk = require('chalk');
score = 0;

console.log("****************************************************************************")
console.log(chalk.greenBright.bold("\t\t\t\t\tWelcome to Priyansh's world! :)\t\t\t\t\t"));
console.log(chalk.redBright.bold("This game is designed just to know, if my people know me or not!"));
console.log("****************************************************************************")
var name = readLineSync.question("Please enter your name first -- ")
console.log(chalk.cyanBright.bold("Hi "+name.toUpperCase()+"! \nWe will ask you some questions "+name+" and will provide you 3 options. \nPlease type the correct option..."));
var ready = readLineSync.question("So, are you ready "+name+"? Please reply with y/n  ")

function play(ques,ans){
  var q = readLineSync.question(ques);
  console.log(name.toUpperCase()+", you entered "+ q);
  if(q.toUpperCase()===ans.toUpperCase()){
    console.log(chalk.green.bold("Good! Correct one!"));
    score = score + 10;
  }
  else{
    console.log(chalk.red.bold("Ooops! That was close!"));
    score = score - 10;
  }
  console.log("Your current score is ",score)
}

if(ready==="y"){
 console.log("Let's start the game then "+name+"! Try to guess a correct option\n");
 console.log("****************************************************************************")
 play("Ques 1 -> What is Priyansh's pet name? Your options are \n1> Mohit \n2> Rohit \n3> Shobhit \nAnswer - ","Rohit");
 console.log("****************************************************************************")
 play("Ques 2 -> What is the favourite cartoon character of Priyansh? Your options are \n1> Ryotsu \n2> Shinchan \n3> Pikachu \nAnswer - ","Shinchan");
 console.log("****************************************************************************")
 play("Ques 3 -> What is the favorite genre of Priyansh in music? Your options are \n1> Rap \n2> Pop \n3> Indie? \nAnswer - ","Rap");
console.log("****************************************************************************")
play("Ques 4 -> What is the PC brand that Priyansh uses? Your options are \n1> Asus \n2> HP \n3> Lenovo \nAnswer - ","Asus");
console.log("****************************************************************************")
 play("Ques 5 -> What is the IPL team that Priyansh follows? Your options are \n1> KKR \n2> MI \n2> CSK \nAnswer - ","CSK");
console.log("****************************************************************************")

console.log(chalk.yellow.bold("End of quiz! Time for the result now!"));
console.log("Your final score is -->",score);
}
else{
  console.log("Okay, no issues! You'll know me one day "+name+" ;) Goodbye for now!")
}
