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
// var timeRemaining = 180;

// function started by a button click
function start() {

// establish time remaining
    var timeRemaining = 5;

    // start countdown timer
    countdownTimer = setInterval(function() {
    
        timeRemaining--;
        timer.textContent = timeRemaining;

    

    if(timeRemaining === 0) {
        // Stops execution of action at set interval
        //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
        clearInterval(countdownTimer);
        // Calls function to create and append image
        timer.textContent = ""
      }

    }, 1000);
}







