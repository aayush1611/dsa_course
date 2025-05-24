const nFactorial = (n) => {
    let result = 1;
    while (n>1){
        result *= n;
        --n;
    }
    return result;
};

const recursiveNFactorial = (n) => {
    if(n <= 1){
        return 1;
    }
    return n * recursiveNFactorial(n-1);
};

console.log(recursiveNFactorial(2));
console.log(recursiveNFactorial(3));
console.log(recursiveNFactorial(5));