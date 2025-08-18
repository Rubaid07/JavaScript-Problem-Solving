// Find the Factorial of a Number

const factorialNum = (num) => {
    if (num < 0) {
        return "Enter positive number"
    } else if (num === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}
console.log(factorialNum(5));