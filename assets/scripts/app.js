const defautlvalue = 0;
let currentvalue = defautlvalue;
//adding logging to our app 
let logEntries = [];


function getUserNum() {
  return parseInt(userInput.value);
}

function theFinalOutput(operator, resultBeforeCalc, calcNumber) {
 const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
 outputResult(currentvalue, calcDescription)
}

function LogData(TypeOperation, TheFirstValue, enteredNumber, currentResult) {
  const entryLog = {
    operation: TypeOperation,
    previousresult: TheFirstValue,
    number: enteredNumber,
    result: currentResult,     
};
logEntries.push(entryLog);
console.log(logEntries);

}


function add() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue + numberProvided;
  theFinalOutput('+', initialvalue, numberProvided)
  LogData('Addition', initialvalue, numberProvided, currentvalue)
  
}
function substract() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  theFinalOutput('-', initialvalue, numberProvided)
  LogData('Substraction', initialvalue, numberProvided, currentvalue)

}
function multiply() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue * numberProvided;
  theFinalOutput('*', initialvalue, numberProvided)
  LogData('Multiplication', initialvalue, numberProvided, currentvalue)

}
function divide() {
  const numberProvided = getUserNum();
  const initialvalue = currentvalue;
  currentvalue = currentvalue / numberProvided;
  theFinalOutput('/', initialvalue, numberProvided)
  LogData('Division', initialvalue, numberProvided, currentvalue)

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
 // commenting smtn
 