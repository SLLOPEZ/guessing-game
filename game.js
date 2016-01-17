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
