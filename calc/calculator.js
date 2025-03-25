var equationHistory;
var currentEquation = "";

var currentInput = document.getElementById('currentInput');
var previousInput = document.getElementById('previousInput');
var displayInput = document.getElementById('result');


function isNumber(value) {
    return typeof value === 'number';
}
function hasError() {
    return 'ERR';
}
function appendInputVal(inputVal) {
    currentEquation += String(inputVal);
    document.getElementById("result").value = currentEquation;
}
function clearDisplay() {
    currentEquation = '';
    document.getElementById('result').value = '';
}
function runEquation() {
    var answer = eval(currentEquation);
    console.log(answer);
    currentEquation = String(answer);
    document.getElementById("result").value = currentEquation;
}

function getNumberFromInput() {
    var num;
    //get num from input
    num = currentInput && currentInput.value ? Number(currentInput.value) : hasError();
    //set input val to empty
    if (currentInput === null || currentInput === void 0 ? void 0 : currentInput.value)
        currentInput.value = '';
    return num;
}
function composeFormula(action) {
    // Get input value from Input and clear the input
    var inputVal = getNumberFromInput();
    if (isNumber(inputVal)) {
        currentEquation += inputVal;
        currentEquation += action;
    }
    else {
        hasError();
    }
}
function solveFormula() {
    // Get input Value from Input and clear the input
    var inputVal = getNumberFromInput();
    // add current val to history
    currentEquation += inputVal;
    equationHistory.push(currentEquation);
    var answer = eval(currentEquation);
    return answer;
}
