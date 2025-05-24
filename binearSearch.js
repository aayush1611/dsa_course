var search = function(arr, t) {
    let leftIndex = 0;
    let rightIndex = arr.length;
    while(leftIndex <= rightIndex){
        const middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
        if(arr[middleIndex] == t){
            return middleIndex;
        }
        if(arr[middleIndex] < t){
            leftIndex = middleIndex + 1;
        }
        else{
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
};