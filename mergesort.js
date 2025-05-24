const arr = [6,8,4,2,52,1,1,-2,6,-9];

const result = [];
function splitArray(arr){
    if(arr.length < 2){
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftarray = arr.slice(0,middleIndex);
    const rightarray = arr.slice(middleIndex,arr.length);
    console.log("before sorting first array",leftarray,rightarray);
    return sortMergeArr(splitArray(leftarray), splitArray(rightarray));
    console.log(mergedArray);
}
// log(N) - becoz of recursion

function sortMergeArr(leftarr,rightarr){
    const sortedArr = [];
    console.log("sorting function args",leftarr,rightarr);
    while (leftarr?.length && rightarr?.length){
        if(leftarr[0] <= rightarr[0]){
            sortedArr.push(leftarr.shift());
        }
        else{
            sortedArr.push(rightarr.shift());
        }
    }
    console.log("sorted array values",sortedArr);
    return [...sortedArr,...leftarr,...rightarr];
}
// O(N) - becoz of loop

console.log(splitArray(arr));

// overall O(Nlog N) - becoz of recursion and merging