function findLargest(arr){
    if(arr.length < 1){
        return -1;
    }

    let maxNo = arr[0];

    for(let i = 1; i <= arr.length; i++){
        if(arr[i] > maxNo){
            maxNo = arr[i];
        }
    }
    return maxNo;
}

const arr = [2, 5, 1, 3, 0, 8, 10,  7, 9];

let max = findLargest(arr);

console.log(max);