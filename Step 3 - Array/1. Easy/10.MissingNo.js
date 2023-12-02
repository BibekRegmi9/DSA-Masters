// Method 1
function findMissing(arr){
    if(arr.length < 1){
        return -1;
    }

    for(let i = 1; i <= arr.length; i++){

        let flag = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[j] == i){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            return i;
        }
        
    }
}

let arr = [1,2,4,5];
console.log(findMissingWithHashMap(arr));


// Method 2
function findMissingWithHashMap(arr){
    //hash array
    let hash = new Array(arr.length + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        hash[arr[i]] = 1;
    }

    for(let i = 1; i <= arr.length; i++){
        if(hash[i] == 0){
            return i;
        }
    }
}