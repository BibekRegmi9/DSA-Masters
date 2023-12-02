function bubbleSort(arr){

    if(arr.length < 1){
        return -1;
    }

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

const arr = [0, 9, 2, 5, 7 ,3];
let ans = bubbleSort(arr);
console.log(ans);