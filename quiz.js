let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "George Orwell"],
        answer: "Harper Lee"
    }
];

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = questionData.question;

    optionsElement.innerHTML = "";
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        document.getElementById("score").textContent = `Quiz Over! Final Score: ${score}`;
        document.getElementById("next-button").disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    document.getElementById("next-button").disabled = true;
});
