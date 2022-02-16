var inputs1 = document.querySelectorAll('.input1')
var isTriangleBtn = document.getElementById('is-triangle')
var result = document.getElementById('result')

var quizResult = document.getElementById('quiz-result')
var quizSubmit = document.getElementById('quiz-submit')
var quizAnswers = ['90°', 'right angled']
var quizForm = document.getElementById('quiz')

isTriangleBtn.addEventListener('click', () => {
  var sum = 0;
  for(var i=0;i<inputs1.length;i++){
    sum += Number(inputs1[i].value)
  }
  result.innerText = "Is Triangle?: " + (sum === 180 ? 'Yes' : 'No') })

quizSubmit.addEventListener('click', ()=> {
  const data = new FormData(quizForm)
  var score = 0
  var i = 0
  for(let value of data.values()) {
    if(value === quizAnswers[i]){
      score += 1
    }i++
  }
  quizResult.innerText = "Score: " + score
})
var inputs2 = document.querySelectorAll('.inputs2')
var getHypotenuse = document.getElementById('get-hypotenuse')
var hypotenuse = document.getElementById('hypotenuse')
getHypotenuse.addEventListener('click', ()=> {
  var a = Number(inputs2[0].value)
  var b = Number(inputs2[1].value)
  hypotenuse.innerText = "Hypotenuse: " + Math.round(Math.sqrt(a*a + b*b))
})

var inputs3 = document.querySelectorAll('.inputs3')
var getArea = document.getElementById('get-area')
var area = document.getElementById('area')
getArea.addEventListener('click', ()=> {
  var [a,b,c] = [Number(inputs3[0].value),Number(inputs3[1].value),Number(inputs3[2].value)]
  var s = Math.round((a + b + c) / 2)
  var res = Math.sqrt(s * (s-a)*(s-b)*(s-c))
  area.innerText = "Area: " + Math.round(res)
})