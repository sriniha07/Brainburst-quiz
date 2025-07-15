const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hypertext Markdown Language", correct: false },
      { text: "Hyperloop Machine Language", correct: false },
      { text: "Helicopters Terminals Motorboats Lambos", correct: false }
    ]
  },
  {
    question: "What year was JavaScript created?",
    answers: [
      { text: "1995", correct: true },
      { text: "2005", correct: false },
      { text: "1985", correct: false },
      { text: "2000", correct: false }
    ]
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "Laravel", correct: false },
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Flask", correct: false }
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Output Mode", correct: false },
      { text: "Digital Order Management", correct: false },
      { text: "Desktop Oriented Memory", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to link JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<link>", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: false },
      { text: "Netscape", correct: true },
      { text: "Oracle", correct: false }
    ]
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { text: "var x = 5", correct: true },
      { text: "int x = 5", correct: false },
      { text: "let x == 5", correct: false },
      { text: "x := 5", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
      { text: "Undefined", correct: false }
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = 'Next';
  scoreContainer.classList.add('hide');
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  answerButtonsElement.innerHTML = '';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('wrong');
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.classList.remove('hide');
}

function showScore() {
  questionElement.innerText = 'Quiz Completed!';
  scoreContainer.classList.remove('hide');
  scoreElement.innerText = `${score} / ${questions.length}`;
  answerButtonsElement.innerHTML = '';
  nextButton.classList.add('hide');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartButton.addEventListener

    
