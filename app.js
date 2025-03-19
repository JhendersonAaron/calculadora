let currentInput = '';
let display = document.getElementById('display');

function appendNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  display.textContent = value !== undefined ? value : currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch {
    updateDisplay('Error');
    currentInput = '';
  }
}
