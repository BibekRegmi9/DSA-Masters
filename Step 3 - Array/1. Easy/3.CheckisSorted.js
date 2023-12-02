function isSorted(arr){
    if(arr.length < 1){
        return -1;
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false;
        }   
        return true;
    }
}


const arr = [9, 2, 4, 7, 1];
const ans = isSorted(arr);
console.log(ans);