function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, arr[j], arr[j+1]);
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

const arr = [3, 1, 0, 7, 5, 8];
const ans = bubbleSort(arr);
console.log(ans);