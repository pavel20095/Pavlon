const Victorina=[{
    question:"Кто был первым космонавтом?",
    answer:['Сергей Пушкин','Юрий Гагарин','Анатолий Папанов'],
    correct:2
},{
    question:"Дата аварии на ЧАЭС?",
    answer:['27.04.1986','19.11.2000','30.12.2022','29.01.1945'],
    correct:1
}]

let testQwest=document.getElementById('testQwest')
let listAnswer=document.getElementById('listAnswer')
const btn=document.getElementById('result')
let score=0
let questionIndex=0
clearPage();
showQuestion();

btn.onclick=checkAnswer;

function clearPage(){
    testQwest.innerHTML='';
    listAnswer.innerHTML='';
}

function showQuestion(){


const question=`<h2>${Victorina[questionIndex]['question']}</h2>`
testQwest.innerHTML=question
for(let i=0 ;i<Victorina[questionIndex]['answer'].length;i++){
    const Answer=` <label class="Answer">
    <input type="radio" value="${i}">
${Victorina[questionIndex]['answer'][i]}</label>`
listAnswer.innerHTML+=Answer
}
console.log(question)


}
function checkAnswer(){
const checkedRadio=
listAnswer.querySelector('input[type=radio]:checked')
if(!checkedRadio){
    btn.blur()}
const userAnswer= +checkedRadio.value+1
console.log(userAnswer)

if(Victorina[questionIndex]['correct']===userAnswer){
    score++
    console.log(score)
}
if(questionIndex!=Victorina.length-1){
    console.log('не последний вопрос')
    questionIndex++
    clearPage();
    showQuestion();
    return;
}
else{
    console.log('++++')
    clearPage();
    testRez.value='Начать сначала'
    showResult();
}}


function showResult(){
    let message;
let result=(score/Victorina.length)*100
    console.log(result)
    if(score==Victorina.length){
        message='Мегасупердупермегасупехарош'
    }
    else message='Ну лан'
    
testQwest.innerHTML=`<h2>${message}<h2>`
listAnswer.innerHTML=`<h2>Вы ответили на ${score} из ${Victorina.length}<h2>
                  <h3> Ваш результат ${result.toFixed(0)}%<h3>`
console.log(result)
}

    
