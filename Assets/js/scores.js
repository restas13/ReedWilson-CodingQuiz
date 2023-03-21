var userForm = document.querySelector('#scoreForm');
var username = document.querySelector('.userName');
var userScore = document.querySelector('#scoreCont');
var endScore = document.querySelector('#currScore');
var submitB = document.querySelector('.submitButton');
var inputName = document.querySelector('#nameText');
var score = localStorage.getItem('score');
var scores = [];
var names = [];

endScore.textContent = "Your score is: " + score;

function renderScores() {
    userScore.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var scored = scores[i];
        var usrName = names[i];

        var li = document.createElement("li");
        li.textContent = usrName + '    ' + scored;
        li.setAttribute('data-index', i);
        li.classList.add('nameText');

        userScore.appendChild(li);
    }
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem('scores'));
    var storedNames = JSON.parse(localStorage.getItem('names'));

    if (storedScores !== null) {
        scores = storedScores;
        names = storedNames;
    }

    renderScores();
}

function storeScores() {
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('names', JSON.stringify(names));
}

submitB.addEventListener('click', function(event) {
    event.preventDefault();
    var nameText = username.value.trim();
   

    if (nameText == '') {
        return;
    }

    scores.push(score);
    names.push(nameText);
    username.value = '';

    storeScores();
    renderScores();

    //document.location.href = 'scores.html';
})

init();
/*
function submission(event) {
    event.preventDefault();

    var user = username.value;

    if (user != '') {
        confirm(user);
    }else {
        inputName.textContent = 'please enter your name and click submit';
        return;
    }
}

function confirm(person) {
    scores.push(person);

    localStorage.setItem(person, score);
    localStorage.setItem('name', person);

    document.location.href = 'scores.html';


}

submitB.addEventListener('click', submission);
*/