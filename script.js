startEl = document.querySelector(".start")
questionEl = document.querySelector(".question")
Score = 0
win = false
initTime = 10
timeEl = document.querySelector(".time")
answrEl = document.querySelector(".answr")
var q = 0
var a =0
containerEl = document.querySelector(".container")
var answerBtnEl = document.querySelector('.answerbtn')

/*var newBtn = document.createElement('button')*/
 

var questionSet = [
    {
      question: 'Question one',
      answers:  [
       "choice a",
        "choice b",
        "choice c",
      ],
      correct: "C"
    },
    {
        question: 'Question two',
        answers:  [
          "choice d",
          "choice e",
         "choice f",
        ],
        correct: "b"
    },
     {
        question: 'Question three',
        answers:  [
         "choice g",
         "choice h",
         "choice i",
        ],
        correct: "a"
    },    

]
var questionLength = questionSet.length 

startEl.addEventListener("click", function(){
    startGame();  
})

// start game
function startGame(){
    console.log("started")
    setTimer()
    renderQuestion()
    renderAnswers()
    containerEl.removeChild(startEl)
    }

//set time
function setTimer(){
    timer = setInterval(function(){
        initTime--
        timeEl.textContent = initTime
        if(initTime >= 0 && win > 0){
            clearInterval(timer)
            console.log("you win")
    } 
        if(initTime === 0 || initTime < 0){
            clearInterval(timer)
            console.log("you lose")
        }
        
    }, 1000)
}    
//show Questions from Array
function renderQuestion(){

    if(q < questionLength){
        var questionText = questionSet[q].question
    questionEl.textContent = questionText
    q++
   // console.log('questionset ' +q)
    }
}

//Show Answers from array
function renderAnswers(){
    var newBtn = document.createElement('button')
    
    if(a < questionSet.length){
       var answerText = questionSet[a].answers
    answrEl.textContent = answerText
   // console.log('answerset ' + a)}

    for (var i = 0; i < questionLength; i++){
        var set = questionSet[a].answers[i]
    
        var newBtn = document.createElement('button')
        newBtn.textContent = set
         answrEl.appendChild(newBtn)}
     
    }}

    //add answerbtn class
    function addAttr (){
        var element = event.target
        var answerButton = answrEl.querySelector("button")
        
        if(element.matches("button")){
            answerButton.className = 'answerbtn'}}
   
      
    answrEl.addEventListener('click', function(){
        addAttr()
        //console.log('added')
        //answrEl.removeChild(answerBtnEl)
    })
    












/* for(var i = 0; i < questionSet.length; i++){
        var set = questionSet[i].answers[i]
        var newBtn = document.createElement('button')
        newBtn.setAttribute("data-index", i)
    newBtn.textContent = set
   answrEl.appendChild(newBtn)}*/
    

/*for (var i = 0; i < questionSet.length; i++){
    var set = questionSet[0].answers[i]

    var newBtn = document.createElement('button')
    newBtn.textContent = set
    newBtn.setAttribute("data-index", i)
answrEl.appendChild(newBtn)}*/

    //console.log(questionSet[0].answers[0])
