// first step is to create variables: countownTimer, timeRemaining, button, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, correctAnswer Total
// create memory of questions to be asked?
// create a start button in HTML and link it to a java function to start the beggining of the game 
// when the button is clicked, a timer stars, when the button is clicked, a set of questions is displayed
// if the correct answer is clicked, hide the previous text, and show the next round of questions and responses, track of the response through a web API 
// if the incorrect answer, subtract the timeRemaining by 10 seconds, then, hide the previous text, and show the next round of questions and responses.
// if there are no more questions OR if the timeRemanining is zero, hide the questions and thhe timer and prompt a message saying the game is over
//store the first score into a web API, then if the next score is greater than or equal too the previous score, prmompt a highscores page to pop up
// the three letter prompt should allow three letters, if the total string length is greater than four, than prompt a message saying please only type four letters
// save the score and thhe initials on the web API

var quizStart
var countdownTimer
var timeRemaining
var timer = document.querySelector(".timer");
var quizQuestion = $(".question")
var answerButtons = document.querySelectorAll(".answerButton")
var currentQuestion = 0;
var questions = [{
    question: "What color is the sky?",
    answers: ["blue", "red", "yellow", "green"],
    correct: "blue"
}, {
    question: "what year is it?",
    answers: ["2018", "2019", "2020", "2021"],
    correct: "2021"
}, {
    question: "Who won the Super Bowl in 2021?",
    answers: ["Falcons", "Patriots", "Bucaneers", "Cheifs"],
    correct: "Bucaneers"
}, {
    question: "Which of these go on your feet?",
    answers: ["jacket", "shoes", "hat", "gloves"],
    correct: "shoes"
}, {
    question: "how many wheels do bikes have?",
    answers: ["1", "2", "3", "4"],
    correct: "Bucaneers"
}
]
// var timeRemaining = 180;
function displayQuestions(index){
    quizQuestion.textContent = questions[index].question
};

answerButtons.onclick = function(){
    currentQuestion ++;
};



// // function started by a button click
function start() {

    displayQuestions(currentQuestion);

};
    
// // establish time remaining
//     var timeRemaining = 5;

//     // start countdown timer
//     countdownTimer = setInterval(function() {

//         timeRemaining--;
//         timer.textContent = timeRemaining;

        
//         // quiz questions and responses
//         quizQuestion.text("what color is the sky?");

//         incorrect1.text("red");
//         incorrect2.text("yellow");
//         incorrect3.text("green");
//         correct.text("blue");        
        
//         if(timeRemaining === 0) {
//         // Stops execution of action at set interval
//         //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
//         clearInterval(countdownTimer);
//         // Calls function to create and append image
//         timer.textContent = ""
//         prompt("Game Over! your score is ?/10, please eneter your initials")
//       }

//     // if (incorrect1.clicked == true){
//     //   quizQuestion.text("What year is it");
//     //   incorrect1.text("2018");
//     //   incorrect2.text("2019");
//     //   incorrect3.text("2010");
//     //   correct.text("2021");
//     //   console.log("hi")
//     //   }

//     incorrect1.on('click', function() {
//     // event.preventdefault();
//     quizQuestion.text("What year is it");
//     question === 2
//       incorrect1.text("2018");
//       incorrect2.text("2019");
//       incorrect3.text("2010");
//       correct.text("2021");
//       console.log(quesion);
//     //   }
//       });



//     }, 1000); 

//     return;
// }

// if (quesion ===2) {
// (incorrect1incorrect1.on('click', function() {

// quizQuestion.text("What is the biggest fish?");
// incorrect1.text("great white shark");
// incorrect2.text("hammerhead shark");
// incorrect3.text("tiger shark");
// correct.text("whale shark");
// console.log("hi");
// })

// )};
