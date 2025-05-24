
const linearSearch = (arr, t) => {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == t) {
            result = i;
            break;
        }
    }
    return result;
}

console.log(linearSearch([-5, 2, 4, 6, 8], 8));
//O(n)