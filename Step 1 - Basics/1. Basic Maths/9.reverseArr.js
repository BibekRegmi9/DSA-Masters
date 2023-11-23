function swap(arr, num1, num2){
    let temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

function reverse(arr){
    let start = 0;
    let end = arr.length-1;

    while(start < end){
        swap(arr, start, end);
        start++;
        end--;
    }

    
}

var arr = [1, 3 ,5 ,7];
reverse(arr);
console.log(arr);

