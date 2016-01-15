var questions = ["Did I grow up in Seattle?", "Do I have arachnaphobia?", "Do I have two cats?", "How young am I?"];
var answers = ["yes", "yes", "no", "37"];
var counter = 0;

var userName = prompt("Hello, what's your name?")
alert("Hello, " + userName + "." + " It's very nice to meet you.");

alert("Welcome to my guessing game! Please answer the four following questions to see how well you know me!");

function game (question, answer) {
 var ques = prompt(question)
  console.log(answer + ": answer");
  console.log(answer == ques);
 if(answer == ques) {
   counter +=1
   console.log(counter);
   alert("Congrats! You guessed right.\n You've guessed " + counter + " out of 4 correct");
 } else {
   alert("You got it wrong!");
 }
};

for(var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i])
};


//
// var counter = 0;
//
// var question1 = prompt("Did I grow up in Seattle?")
//   console.log("This is my first question variable" + " " + question1);
//
//
// if (question1 ==="yes" || question1 ==="y" || question1 ==="YES" || question1 ==="Y") {
//   console.log(question1 + " " + "is correct!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//   counter ++;
//   alert(question1 + " " + "is correct!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//
//
// } else if (question1 === "no" || question1 === "n" || question1 === "NO" || question1 === "N") {
//   console.log("Sorry" + "," + " " + question1 + " " + "is incorrect.");
//   alert("Sorry" + "," + " " + question1 + " " + "is incorrect.");
// };
//
// var question2 = prompt("Do I have arachnaphobia?")
//   console.log("This is my second question variable" + " " + question2);
//
// if (question2 === "yes" || question2 === "y" || question2 === "YES" || question2 === "Y") {
//   console.log(question2 + " " + "is correct!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//   counter ++;
//   alert(question2 + " " + "is correct!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//
//
// } else if (question2 === "no" || question2 === "n" || question2 ==="NO" || question2 ==="N") {
//   console.log("Sorry" + "," + " " + question2 + " " + "is incorrect.");
//   alert("Sorry" + "," + " " + question2 + " " + "is incorrect.");
// };
//
// var question3 = prompt("Do I have two cats?")
//   console.log("This is my third question variable" + " " + question3);
//
// if (question3 === "yes" || question3 === "y" || question3 === "YES" || question3 === "Y") {
//   console.log("Sorry" + "," + " " + question3 + " " + "is incorrect.");
//   alert("Sorry" + "," + " " + question3 + " " + "is incorrect.");
//
// } else if (question3 === "no" || question3 === "n" || question3 === "NO" || question3 === "N") {
//   console.log(question3 + " " + "is correct! I have two dogs." + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//   counter ++;
//   alert(question3 + " " + "is correct! I have two dogs." + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//
// };
//
// var question4 = prompt("How young am I?")
//   console.log("This is my fourth question variable" + " " + question4);
//
// if (question4 === "37") {
//   console.log("You got it!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//   counter ++;
//   alert("You got it!" + " " + "You've guessed" + " " + counter + " " + "out of 4 questions correctly!");
//
// };
//
// if (question4 < "37") {
//   console.log("Sorry" + "," + " " + "you are too low.");
//   alert("Sorry" + "," + " " + "you are too low.");
// } else if (question4 > "37") {
//   console.log("Sorry" + "," + " " + "you are too high.");
//   alert("Sorry" + "," + " " + "you are too high.");
// };
//
// if (counter === 4) {
//   console.log("Congrats" + "," + " " + userName + "!!!" + " " + "Are you sure you didn't cheat?!");
//   alert("Congrats" + "," + " " + userName + "!!!" + " " + "Are you sure you didn't cheat?!");
//
// } else if (counter >= 3) {
//   alert("Good job" + "," + " " + userName + "." + " " + "You know me pretty well!");
//   console.log("Good job" + "," + " " + userName + "." + " " + "You know me pretty well!");
// } else if (counter < 3) {
//   alert("Don't worry" + "," + " " + userName + "." + " " + "It's only a matter of time!");
//   console.log("Don't worry" + "," + " " + userName + "." + " " + "It's only a matter of time!");
// };
