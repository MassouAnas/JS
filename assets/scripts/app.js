const defautlvalue = 0;
let currentvalue = defautlvalue;

function getUserNum() {
  return parseInt(userInput.value);
}

function theFinalOutput(operator, resultBeforeCalc, calcNumber) {
 const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
 outputResult(currentvalue, calcDescription)
}

function add() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue + numberProvided;
  theFinalOutput('+', initialvalue, numberProvided)
  
}
function substract() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  theFinalOutput('-', initialvalue, numberProvided)
}
function multiply() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue * numberProvided;
  theFinalOutput('*', initialvalue, numberProvided)
}
function divide() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue / numberProvided;
  theFinalOutput('/', initialvalue, numberProvided)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
 // commenting smtn
 