const input = document.querySelector('.app__field-input')

const ac = document.getElementById('ac');
const negation = document.getElementById('negation');
const percent = document.getElementById('percent');
const division = document.getElementById('division');
const multi = document.getElementById('multi');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equals = document.getElementById('equals');

let firstNumber = 0
let secondNumber = 0
let action = ''

ac.onclick = function () {
  input.value = null
}

percent.onclick = function () {
  firstNumber = Number(input.value) / 100
  input.value = firstNumber
  checkInput(firstNumber);
}

negation.onclick = function () {
  firstNumber = Number(input.value) * (-1)
  input.value = firstNumber
}

division.onclick = function () {
  setInput('/')
  checkInput(firstNumber)
}

multi.onclick = function () {
  setInput('*')
  checkInput(firstNumber)
}

minus.onclick = function () {
  setInput('-')
  checkInput(firstNumber)
}

plus.onclick = function () {
  setInput('+')
  checkInput(firstNumber)
}

equals.onclick = function () {
  secondNumber = Number(input.value)
  checkInput(secondNumber)
  input.value = lastAction(action)
}

function setInput (setAction) {
  firstNumber = Number(input.value)
  action = setAction
  input.value = null
}

function checkInput (checkNum) {
  if (!Number.isFinite(checkNum)) 
    input.value = 'Error'
}

function lastAction (action) {
  switch(action) {
    case '/': return firstNumber / secondNumber
    case '*': return firstNumber * secondNumber
    case '-': return firstNumber - secondNumber
    case '+': return firstNumber + secondNumber
  }
}

