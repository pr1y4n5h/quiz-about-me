var readLineSync = require('readline-sync')
score = 0;
function play(ques,ans){
  var q = readLineSync.question(ques);
  console.log(name+" you entered "+ q);
  if(q.toUpperCase()===ans.toUpperCase()){
    console.log("Good! Correct one!");
    score = score + 10;
  }
  else{
    console.log("Ooops! That was close!");
    score = score - 10;
  }
  console.log("Your current score is ",score)
}

console.log("****************************************************************************")
console.log("\t\t\t\t\tWelcome to Priyansh's world! :)\t\t\t\t\t")
console.log("This game is designed just to know, if my people know me or not!")
console.log("****************************************************************************")
var name = readLineSync.question("Please enter your name first -- ")
console.log("Hi "+name+"! \nWe will ask you some questions "+name+" and will provide you 3 options. \nPlease type the correct option...");
var ready = readLineSync.question("So, are you ready "+name+"? Please reply with y/n  ")

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

console.log("End of quiz! Time for the result now!");
console.log("Your final score is -->",score);
}
else{
  console.log("Okay, no issues! But trust me, you'll start knowing me one day "+name+" ;) Goodbye for now!")
}
