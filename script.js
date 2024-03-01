 let questions=[ {
    question:"what is the capital city of Ethiopia",
    answers:[{ text:"BAHIR DAR" ,correct:false},
            {text:" ADDIS ABABA" ,correct:true},
            {text:"MEKELLE",correct:false},
            {text:'JIMMA', correct:false}
    ],},{
    question:"What important river flows through Ethiopia and is considered the longest river in the world?",
    answers:[{ text:"Yangtze River" ,correct:false},
            {text:" Congo River" ,correct:false},
            {text:"Nile River",correct:true},
            {text:'Amazon River', correct:false}
    ]},{
    question:"Which mountain is the highest peak in Ethiopia?",
    answers:[{ text:"Ras Dashen" ,correct:true},
            {text:"Mount Everest" ,correct:false},
            {text:"Mount Kilimanjaro",correct:false},
            {text:' Mount Kenya', correct:false}
    ]}]
  let  questionElement=document.getElementById("question")
   let answerButtons=document.getElementById("answer-buttons");
    let nextButton=document.getElementById("next-btn")
    let currentQuestionIndex = 0;
     let score=0;
    function startQuiz(){
        currentQuestionIndex = 0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex +1;
        questionElement.innerHTML=questionNo + "." + currentQuestion.question;
        currentQuestion.answers.forEach(answer=>{
                const button=document.createElement('button');
                button.innerHTML=answer.text;
                button.classList.add('btn');
                answerButtons.appendChild(button);
        if(answer.correct){
                button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        });
    }
    
function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct =="true"
if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
}
else{
        selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct =="true"){
button.classList.add("correct")
        }
button.disabled=true;
});
nextButton.style.display="block"
}
 function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
        nextButton.innerHTML="Play Again"
        nextButton.style.display="block"
}
function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
                showQuestion();
        }
        else{
                showScore();
        }
}
nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
                handleNextButton();
        }
        else{
                startQuiz();
        }
})

startQuiz();