var question = document.querySelector('#question');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');

var currentQuestion = 0;
var acceptingAnswers = true;
var score = 100;
var finalScore = 0;
var questionCount = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'What code does  the styling?', 
        choice1: 'css', 
        choice2: 'C#', 
        choice3: 'javascript', 
        choice4: 'html',
        answer: 'css',
    },
    {
        question: 'Commonly used data types do not include.', 
        choice1: 'boolean', 
        choice2: 'string', 
        choice3: 'integer', 
        choice4: 'hypertext',
        answer: 'hypertext',
    },
    {
        question: 'An if statement should be followed by which of the following?', 
        choice1: '()', 
        choice2: '[]', 
        choice3: '==', 
        choice4: '-',
        answer: '()',
    },
    {
        question: 'what is 2+2?', 
        choice1: '2', 
        choice2: '5', 
        choice3: '4', 
        choice4: '6',
        answer: '4',
    },
    {
        question: 'What is the capitol of Florida', 
        choice1: 'Talahassee', 
        choice2: 'Miami', 
        choice3: 'Tampa', 
        choice4: 'Jacksonville',
        answer: 'Talahassee',
    },
]

setInterval(myTimer, 1000);

function myTimer() {
    if (score == 0){
        ending();
    }

    score--;
    scoreText.textContent = score;
}


function ending() {

}
