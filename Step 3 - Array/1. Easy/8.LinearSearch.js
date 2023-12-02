function linearSearch(arr, target){
    if(arr.length < 1){
        return -1;
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
}

let arr = [2, 5, 7, 9, 10]
let target = 9
let ans = linearSearch(arr, target);
console.log(ans);