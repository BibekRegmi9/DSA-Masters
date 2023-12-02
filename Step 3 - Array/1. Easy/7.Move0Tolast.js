function moveZeroToLastPos(arr){
    if(arr.length < 1){
        return -1;
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length - i; j++){
            if(arr[j] == 0){
                swap(arr, arr[i] , 0)
            }
        }
    }

    return arr;
}

function swap(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

let arr = [2, 4, 0, 6, 0, 9]
let ans = moveZeroToLastPos(arr);
console.log(ans);