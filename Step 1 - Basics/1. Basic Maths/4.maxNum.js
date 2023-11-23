function max(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

// Example usage:
let array = [3, 7, 2, 8, 5];
console.log(max(array));
