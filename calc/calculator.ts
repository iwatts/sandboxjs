let equationHistory: any[];
let currentEquation: string;
interface arithmaticOperator {
    ADD: '+',
    SUB: '-',
    MULT: '*',
    DIV: '/'
};
type solution = number|string;
const currentInput = document.getElementById('result') as HTMLInputElement | null;
const previousInput = document.getElementById('previousInput') as HTMLInputElement | null;

function isNumber(value) {
    return typeof value === 'number';
}

function hasError(){
    return 'ERR'
}

function getNumberFromInput(): solution{
    let num: solution;
    //get num from input
    num = currentInput && currentInput.value ? Number(currentInput.value) : hasError();  
    //set input val to empty
    if (currentInput?.value) currentInput.value = '';
    return num;
}

function composeFormula(action){
    // Get input value from Input and clear the input
    let inputVal: solution = getNumberFromInput();
    if(isNumber(inputVal)) {
        currentEquation += inputVal;
        currentEquation += action;
    } else {
        hasError();
    }
}

function solveFormula(): solution{
    // Get input Value from Input and clear the input
    let inputVal: solution = getNumberFromInput();

    // add current val to history
    currentEquation += inputVal;
    equationHistory.push(currentEquation);
    let answer = eval(currentEquation);

    return answer;

}
