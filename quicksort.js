const arr = [6,8,4,2,52,1,1,-2,6,-9];

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const leftarray = [];
    const rightarray = [];
    for(i=0;i<arr.length-1;i++){ // arr.length -1 becoz last element is already pivot and added, so we only need to look for left and right part
        if(arr[i] < pivot){
            leftarray.push(arr[i]);
        }
        else{ // if i add > pivot condition, it will give me sorted array with unique value
            rightarray.push(arr[i]);
        }
    }
    return ([...quickSort(leftarray),pivot,...quickSort(rightarray)]);
}
console.log(quickSort(arr));