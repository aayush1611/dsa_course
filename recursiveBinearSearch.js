// not working. check once again
// call one function and recurse another function with left and right index

const recursiveSearchFunc = (arr , t) => {
    let leftIndex = 0;
    let rightIndex = arr.length;
    let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
    if((arr.length == 1) && (arr[middleIndex] != t)){
        return -1;
    }
    if(arr[middleIndex] == t){
        return middleIndex;
    }
    if(arr[middleIndex] < t){
        leftIndex = middleIndex + 1;
        return recursiveSearchFunc(arr.slice(leftIndex,arr.length));
    }
    else{
        rightIndex = middleIndex - 1;
        return recursiveSearchFunc(arr.slice(leftIndex,rightIndex));
    }
}