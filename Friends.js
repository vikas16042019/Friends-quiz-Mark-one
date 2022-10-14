var readlineSync = require('readline-sync');
var Name = readlineSync.question("May I know your name ??");
console.log("Welcome "+ Name+" to the quiz on FRIENDS");
console.log("Let's get started");
var score= 0;
var question = 
[
  {
    question: "How many lead characters are there in FRIENDS (Enter option number only)\n \n a. Five\n b. Three\n c. Six\n",
    answer: "a"
  },
  {
    question: "How many times was ross divorced (Enter option number only) ? \n \n a. Five\n b. Three\n c. Six\n",
    answer: "b"},            

  {question: "Who was chander's wife (Enter option number only) \n \n a. Emily\n b. Monica\n c. Phoebe\n",
   answer: "b"},

  {question:  "Who was chandler's best man ? (Enter option number only)\n \n a. Joey \n b. Ross \n c. Gunther \n",
  answer: "a"},

  {
    question: "How many seasons are three in FRIENDS ?? (Enter option number only) \n \n a. 10 \n b. 5 \n c. 7 \n d. 9 \n",
    answer: "a"}
  
]

function play(question,answer)
  {
    console.log("\n");
    var userAnswer= readlineSync.question(question);
    if(userAnswer=== answer)
    {
      score++
      console.log("You are correct(+1)");
    }
    else
    {
      score--;
      console.log("You are incorrect(-1)");
    }
  }

for(var i=0;i<question.length;i++)
  {
    var currentQuestion = question[i];
    play(currentQuestion.question,currentQuestion.answer);
    
  }

console.log("GAME OVER !!")
console.log("Your score is: "+ score);
