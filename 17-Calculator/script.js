const calculateDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

// Calculate first and second values depending on operator
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '=': (firstNumber, secondNumber) => secondNumber,
}

let firstValue = 0
let operatorValue = ''
let awaitingNextValue = false

const sendNumberValue = (number) => {
  // Replace current display value if first value is entered
  if (awaitingNextValue) {
    calculateDisplay.textContent = number
    awaitingNextValue = false
  } else {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculateDisplay.textContent
    calculateDisplay.textContent =
      displayValue === '0' ? number : displayValue + number
  }
}

const addDecimal = () => {
  // If operator pressed don't add decimal
  if (awaitingNextValue) {
    return
  }
  // If no decimal, add one
  if (!calculateDisplay.textContent.includes('.')) {
    calculateDisplay.textContent = `${calculateDisplay.textContent}.`
  }
}

const useOperator = (operator) => {
  const currentValue = Number(calculateDisplay.textContent)
  // Prevent multiple operators
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator
    return
  }
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue)
    calculateDisplay.textContent = calculation
    firstValue = calculation
  }
  // Ready for the next value, store operator
  awaitingNextValue = true
  operatorValue = operator
}

// Reset all values, display
const restAll = () => {
  calculateDisplay.textContent = '0'
  firstValue = 0
  operatorValue = ''
  awaitingNextValue = false
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value))
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal())
  }
})

// Event Listener
clearBtn.addEventListener('click', restAll)
