/**   Creating data set*/
let readlineSync = require("readline-sync");
let kuler = require("kuler");

let score=0;

let userName=readlineSync.question("Whats's your Name? ")
console.log(kuler(`\nHello ${userName} welcome to Quizify`,"#b02371"))
const database={

  
  data:[
    {
      question:`let a={},b={}
console.log(a==b)
console.log(a===b)`,

      options:{
        a:"false false",
        b:"false true",
        c:"true false",
        d:"true true"
      },
      correctAnswer:"a"
      
    },
    {
      question:"Object.assign(target,source) cretaes which type of copy?",
      options:{
        a:"Deep Copy",
        b:"Shallow Copy",
        c:"Nested Copy",
        d:"creates a new ref"
        
      },
      correctAnswer:"b"
    },
    {
      question:"Is method chaining possible with forEach?",
      options:{
        a:"Yes",
        b:"No"
      },
      correctAnswer:"b"
    }
  ]
}

function playGame(userAnswer, correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler("Correct Answer","#27f253"))
    score++;
  }
  else{
    console.log(kuler("Incorrect Answer",
      "#c20c0c"))
    console.log(kuler(`Correct Answer is  ${correctAnswer}`,"#0c15c2"))
  }
}

/** Creating Leader Board */
const leaderBoard={
  data:[
    {
      name:"Ashish",
      score:1
    },
    {
      name:"Riya",
      score:3
    },
    {
      name:"Jay",
      score:2
    }
    
  ]
}

/** Main Logic */
function showQuestionAndOptions(){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userAnswer = readlineSync.question("Enter your answer - {a/b/c/d} - ").toLowerCase();

     playGame(userAnswer, database.data[i].correctAnswer)
  }
 
}

function highScorer(leaderBoard){
  leaderBoard.data.push({name:userName, score:score})
  let sortedScoreList=leaderBoard.data.sort((a,b)=> b.score-a.score)

  console.log(kuler("\nCheck your position in leader Board🎉🎉🎉\n","#e6e64c"))
 for(let leader of sortedScoreList){
   console.log(kuler(`${leader.name} - Score: ${leader.score}`,"#e65e4c"))
 }
}
showQuestionAndOptions();
console.log(kuler(`\nYou scored ${score}`,"#be4fd1"));
highScorer(leaderBoard);
