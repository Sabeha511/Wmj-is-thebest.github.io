// Array of questions and answers
const questions = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "The more you take, the more you leave behind. What are they?", answer: "footsteps" },
    { question: "What has a face but can’t smile?", answer: "clock" },
    { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    { question: "What is always in front of you but can’t be seen?", answer: "future" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "What is as light as a feather, yet the strongest man can’t hold it for much longer?", answer: "breath" },
    { question: "What can be cracked, made, told, and played?", answer: "joke" },
    { question: "What has one eye but can’t see?", answer: "needle" },
    { question: "What gets wetter the more it dries?", answer: "towel" },
    { question: "What has a head, a tail, but no body?", answer: "coin" },
    { question: "What begins with T, ends with T, and has T in it?", answer: "teapot" },
    { question: "What is full of holes but still holds a lot of weight?", answer: "net" },
    { question: "What word is spelled incorrectly in every dictionary?", answer: "incorrectly" },
    { question: "What runs but never walks, has a bed but never sleeps?", answer: "river" }
];

let currentQuestionIndex = 0;

// Initialize the first question
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('puzzle-text')) loadQuestion();
});

// Load questions
function loadQuestion() {
    const puzzleText = document.getElementById('puzzle-text');
    const result = document.getElementById('result');
    const answerInput = document.getElementById('answer');

    result.textContent = '';
    answerInput.value = '';

    if (currentQuestionIndex < questions.length) {
        puzzleText.textContent = questions[currentQuestionIndex].question;
    } else {
        puzzleText.textContent = "Congratulations! You've completed all the puzzles!";
        document.querySelector('button').style.display = 'none';
        document.getElementById('answer').style.display = 'none';
    }
}

// Check answers
function checkAnswer() {
    const answerInput = document.getElementById('answer').value.toLowerCase();
    const result = document.getElementById('result');
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    const celebration = document.getElementById('celebration');

    if (answerInput === correctAnswer) {
        celebration.style.display = 'block';
        setTimeout(() => {
            celebration.style.display = 'none';
            currentQuestionIndex++;
            loadQuestion();
        }, 2000);
    } else {
        result.textContent = "Try again!";
        result.style.color = 'red';
    }
}

// Show a message on image click
function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}
