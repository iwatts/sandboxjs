function calcFactorial(input: number): number {
    if (input === 0) return 1;

    return input * calcFactorial(input - 1);

}

console.log(calcFactorial(4));