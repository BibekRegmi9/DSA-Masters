function findSecondLargest(arr){
    if(arr.length < 2){
        return -1;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}


const arr = [1, 2, 4, 7, 7, 5, 9];
const ans = findSecondLargest(arr);
console.log(ans);