const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Delhi", correct: false }
        ]
    },
    {
        question: "Which company owns the luxury car brand Lamborghini?",
        answers: [
            { text: "Ferrari", correct: false },
            { text: "Volkswagen Group", correct: true },
            { text: "Mercedes-Benz", correct: false },
            { text: "Ford", correct: false }
        ]
    },
    {
        question: "What does ABS stand for in a car's braking system?",
        answers: [
            { text: "Automatic Braking System", correct: false },
            { text: "Anti-Bounce System", correct: false },
            { text: "Anti-lock Braking System", correct: true },
            { text: "Auto Balance Suspension", correct: false }
        ]
    },
    {
        question: "Which was the first mass-produced car in the world?",
        answers: [
            { text: "Ford Model T", correct: true },
            { text: "Chevrolet Impala", correct: false },
            { text: "Volkswagen Beetle", correct: false },
            { text: "Mercedes-Benz 300SL", correct: false }
        ]
    }
]

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('ans-btn');
const nextButton = document.getElementById('nxt-btn');

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex=0;
    score=0;
    nextButton.innerHTML = 'Next'
    showQuesion()
}

function showQuesion(){
    reset()
    let questiontext = questions[questionIndex]
    let questionNumber = questionIndex+1;
    questionElement.innerHTML = `${questionNumber}. ${questiontext.question}`
    questiontext.answers.forEach(answer => {
        let button = document.createElement('button')
        button.classList.add('btn')
        button.innerHTML = answer.text
        answerElement.appendChild(button)
        button.dataset.correct = answer.correct
        button.addEventListener('click', selectAnswer)
    })
}

function reset(){
    while(answerElement.firstElementChild){
        answerElement.removeChild(answerElement.firstElementChild)
    }
}

function selectAnswer(e){
    let selectedBtn = e.target
    let isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = 'true';
    })
    nextButton.style.display = 'block';
}

function handleNextBtn(){
    questionIndex++;
    if(questionIndex < questions.length){
        showQuesion()
    }else{
        showScore()
    }
}

function showScore(){
    reset();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !!!`; 
    nextButton.innerHTML = `Play Again`
    nextButton.style.display ='block';
}

nextButton.addEventListener('click', ()=>{
    if(questionIndex < questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})

startQuiz()