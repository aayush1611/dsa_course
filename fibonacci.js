const findNumbersFromLength = (n) => {
    if(n<2){
        console.log("minimum 2 number is needed");
        return;
    }
    const result = [0,1];
    for (let i = 2; i < n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    console.log(result);
}
let count = 0
let result = [0,1];
const recursionFindNumbers = (n,repeat=false) =>{
    if(!repeat){
        count = 0;
        result = [0, 1];
    }
    if(n<=2){
        return result;
    }
    result.push(result[count] + result[count + 1]);
    ++count;
    return recursionFindNumbers(n-1,true);
}

const result1 = recursionFindNumbers(10);
console.log(result1);
// console.log(recursionFindNumbers(1));