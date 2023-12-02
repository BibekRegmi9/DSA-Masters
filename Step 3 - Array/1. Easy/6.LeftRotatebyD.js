function leftRotate(arr, n, d){
    d = d % arr.length;

    temp[d];

    for(let i = 0; i < d; i++){
        temp[i] = arr[i];
    }

    for(let i = d; i < n; i++){
        arr[i - d] = arr[i];
    }

    for(let i = n - d; i < n; i++){
        arr[i] = temp[i - (n-d)];
    }

}

var arr = [1,2,3,4,5,6,7];
var n = arr.length;
var d = 2;

var ans = leftRotate(arr, n, d);
console.log(ans);