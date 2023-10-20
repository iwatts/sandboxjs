// BALANCED
const inputString = '[[[]]{}]';
// IMBALANCED
const inputString2 = '[[[]]{}][';

function checkIfAllClosed(input){
	let arrayInput = input.split('');
	let openCounter = 0;
	let closeCounter = 0;
	
	for(let i = 0; i <= arrayInput.length - 1; i++){

		if (arrayInput[i] === '[' || arrayInput[i] === '{') {
			openCounter ++;
		} else if (arrayInput[i] === ']' || arrayInput[i] === '}') {
			closeCounter++;
		}
	}

	console.log('COUNTERS: ', openCounter, " ", closeCounter);
	return openCounter===closeCounter ? true : false;

}

console.log(checkIfAllClosed(inputString));
console.log(checkIfAllClosed(inputString2));