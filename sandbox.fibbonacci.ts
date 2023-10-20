type fibbonaciNumberValidation = {
	isFibbonaci: boolean;
	pos: number | null;
}

function checkIfFib(testNumber: number): fibbonaciNumberValidation {
	let fibArray: Array<number> = [0, 1, 1];
	let lastTwo = (): Array<number> => fibArray.slice(Math.max(fibArray.length - 2, 1));
	let finalNum = (): number => fibArray[fibArray.length - 1];
	let valueRes: fibbonaciNumberValidation = {
		isFibbonaci: false,
		pos: null
	}

	while (testNumber >= finalNum()) {
		if (testNumber === finalNum()) {
			valueRes.isFibbonaci = true;
			valueRes.pos = fibArray.length

			return valueRes;
		}

		fibArray.push(lastTwo()[0] + lastTwo()[1]);
	}

	return valueRes
}

console.log(checkIfFib(1024));
console.log(checkIfFib(13));