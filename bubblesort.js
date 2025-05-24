const arr = [6,8,4,2,52,1,1,-2,6,-9];
let swapped = false;
do{
    swapped = false;
    for(let j=0;j<arr.length -1;j++){
        if(arr[j] > arr[j+1]){
            const temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;
        }
    }
} while(swapped)
console.log(arr);