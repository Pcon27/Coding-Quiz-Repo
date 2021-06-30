

var quizStart
var countdownTimer
var timeRemaining
var timer = document.querySelector(".timer");

// var timeRemaining = 180;

// establish time remaining
    var timeRemaining = 5;
    function start() {
    // start countdown timer
    countdownTimer = setInterval(function() {

        timeRemaining--;
        timer.textContent = timeRemaining;
        
        if(timeRemaining === 0) {
        // Stops execution of action at set interval
        //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
        clearInterval(countdownTimer);

        timer.textContent = ""
        prompt("Game Over! your score is ?/10, please eneter your initials")
      }
}, 1000);}
