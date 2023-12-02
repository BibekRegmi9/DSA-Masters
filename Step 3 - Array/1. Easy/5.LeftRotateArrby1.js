function leftRotate(arr){
    let temp = arr[0];

    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] + " ");
    }
}

let arr = [1, 2, 3, 4, 5];
leftRotate(arr);