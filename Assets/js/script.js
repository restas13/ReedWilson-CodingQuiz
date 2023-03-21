var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice'))
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

nextQuestion();

function nextQuestion() {
    if (currentQuestion >= questions.length) {
        console.log('hello');
        ending();
        return;
    }

    question.textContent = questions[currentQuestion].question;

    choice1.textContent = questions[currentQuestion].choice1;
    choice2.textContent = questions[currentQuestion].choice2;
    choice3.textContent = questions[currentQuestion].choice3;
    choice4.textContent = questions[currentQuestion].choice4;

    
}

setInterval(myTimer, 1000);

function myTimer() {
    if (score == 0){
        ending();
    }

    score--;
    scoreText.textContent = score;
}


function ending() {
    console.log('end');
    localStorage.setItem('score', score);
    document.location.href = 'end.html';
}

choices.forEach(choice =>{
    choice.addEventListener('click', chosen);
});

function chosen(event){
    event.preventDefault();

    if (event.target.innerText == questions[currentQuestion].answer) {
        currentQuestion ++;
        nextQuestion();
    }else{
        currentQuestion++;
        nextQuestion();
        score -= 15;
    }
}