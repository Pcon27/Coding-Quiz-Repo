var yourScore = document.getElementById("score");
var currentScore 
var highScore = document.getElementById("highscore")
var currentHigh = document.getElementById("currenthigh")
var quizStart;
var countdownTimer;
var timeRemaining = 60;
var correct = 0;
var timer = document.querySelector(".timer");
var quizQuestion = document.querySelector(".question");
var answerButtons = document.querySelectorAll(".answerButton");
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
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
    correct: "2"
}, {
    question: "",
    answers: ["", "", "", ""],
    correct: ""
},
];

// functions 


// function that displays question when called upon
function displayQuestions(index){
    quizQuestion.textContent = questions[index].question;
};

function displayAnswers(index){
    answerButton1.textContent = questions[index].answers[0];
    answerButton2.textContent = questions[index].answers[1];
    answerButton3.textContent = questions[index].answers[2];
    answerButton4.textContent = questions[index].answers[3];
};

answerButton1.onclick = function() {
    if (currentQuestion===0){
        correct ++;    
        console.log(correct);
    }
    else if (currentQuestion > 0) {
        timeRemaining = timeRemaining -10;
    };
    currentQuestion = currentQuestion + 1;
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
    // timeRemaining = timeRemaining -10;
    

};

answerButton2.onclick = function() {
    if (currentQuestion===3 || currentQuestion===4 ){
        correct ++;    
        console.log(correct);
    }
    else{
        timeRemaining = timeRemaining -10;
    };
    currentQuestion = currentQuestion + 1;
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
};

answerButton3.onclick = function() {
    if (currentQuestion===2){
        correct ++;    
        console.log(correct);
    }
    else {
        timeRemaining = timeRemaining -10;
    };
    currentQuestion = currentQuestion + 1;
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
};

answerButton4.onclick = function() {
    if (currentQuestion===1){
        correct ++;    
        console.log(correct);
    }
    else{
        timeRemaining = timeRemaining -10;
    };
    currentQuestion = currentQuestion + 1;
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
    console.log(currentQuestion);
};

function endQuiz() {
    if(timeRemaining === 0 || currentQuestion ===5){
        clearInterval(countdownTimer);
        timer.textContent = ""
        prompt("Game Over! your score is ?/10, please eneter your initials")
          }
};

function start() {
    document.getElementById("start").style.visibility="hidden";
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
    console.log(questions[currentQuestion].answers[0]);
    // start timer
    countdownTimer = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining; 
    if(timeRemaining <= 0 || currentQuestion === 5 ) {

        clearInterval(countdownTimer);

        timer.textContent = ""
        currentScore = prompt("Game Over! your score is: " + correct + "/5, please eneter your initials");
        answerButton1.style.visibility="hidden";
        answerButton2.style.visibility="hidden";
        answerButton3.style.visibility="hidden";
        answerButton4.style.visibility="hidden";
        yourScore.textContent= ("Your score: " + currentScore + " " + correct  + "/5");
        document.getElementById("start").style.visibility="visable";
        highScore.textContent = ("High Score :" + localStorage.getItem("high score"))
        localStorage.setItem("high score", currentScore + " " + correct  + "/5");
    };
}, 
1000);};