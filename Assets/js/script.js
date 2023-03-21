var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 100;
var questionCount = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'What code does  the styling?', 
        choice1: 'css', 
        choice2: 'C#', 
        choice3: 'javascript', 
        choice4: 'html',
        answer: 2,
    },
    {
        question: 'Commonly used data types do not include.', 
        choice1: 'boolean', 
        choice2: 'string', 
        choice3: 'integer', 
        choice4: 'hypertext',
        answer: 4,
    },
    {
        question: 'An if statement should be followed by which of the following?', 
        choice1: '()', 
        choice2: '[]', 
        choice3: '==', 
        choice4: '-',
        answer: 1,
    },
    {
        question: 'what is 2+2?', 
        choice1: '2', 
        choice2: '5', 
        choice3: '4', 
        choice4: '6',
        answer: 3,
    },
    {
        question: 'What is the capitol of Florida', 
        choice1: 'Talahassee', 
        choice2: 'Miami', 
        choice3: 'Tampa', 
        choice4: 'Jacksonville',
        answer: 1,
    },
]

const TIME_DEDUCTION = 15;
const MAX_Questions = 4;

startGame = () => {
    questionCount = 0;
    score = 100;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    
}