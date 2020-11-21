var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log("How well do you know me ");
var userName = readlineSync.question("What's your name? ");
console.log("Let's see " + userName.toUpperCase())
console.log("************************************************");
console.log();


var score = 0;

var highScores = [
  {
    user : "Saksham",
    score: 5
  },
];

var qna = [
  {
    question: "Who is my favourite Superhero? ",
    answer: "Batman",
  },

  {
    question: "Which is my favourite novel? ",
    answer: "Five point Someone",
  },

  {
    question: "What is my favourite timepaas? ",
    answer: "songs",
  },

  {
    question: "My First School ",
    answer: "GBSS",
  },

  {
    question: "My favourite Motivaional Speaker (or Inspiration)? ",
    answer: "Sandeep maheshwari",
  },

];

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if( userAnswer.toUpperCase() === answer.toUpperCase() ){
    console.log("Correct answer");
    score++;
    console.log("Current score: " + score);
  }
  else{
    console.log("Wrong answer");
    console.log("Correct answer is : " + answer);
    console.log("Current score: " + score);
  }
}

for(var i=0; i<qna.length; i++){
  quiz(qna[i].question, qna[i].answer);
}
console.log();
console.log("Your score: " + score);

console.log();
console.log("List of High scorers: ")
for(var i=0; i<highScores.length; i++){
  console.log(highScores[i].user + " " + highScores[i].score);
}

console.log();
console.log("If you have beaten high scorers then do send me your screenshot.")
