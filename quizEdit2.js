var quizStart
var countdownTimer
var timeRemaining
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
    correct: "Bucaneers"
}
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


function start() {
    displayQuestions(currentQuestion);
    displayAnswers(currentQuestion);
    console.log(questions[currentQuestion].answers[0]);
};

