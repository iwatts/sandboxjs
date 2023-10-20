function fibonacci(n: number): number {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 2) + fibonacci(n - 1);

}

function displayFinalNumber(n: number): void {
	for (let i = 0; i < n; i++) {
		if (i === (n-1)) {
			console.log(fibonacci(i));
		}
	};
}

displayFinalNumber(8);