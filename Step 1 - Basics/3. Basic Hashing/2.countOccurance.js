// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	       5   2
//         15  1


function countOccurance(arr, size){
    let occuranceMap = new Map();
    
    for(let i = 0; i < size; i++){
        if(occuranceMap.has(arr[i])){
            // If number is present in occuranceMap,
            // incrementing it's count by 1
            occuranceMap.set(arr[i], occuranceMap.get(arr[i]) + 1);
        } else {
            // If integer is not present in occuranceMap,
            // putting this integer to occuranceMap with 1 as it's value
            occuranceMap.set(arr[i], 1);
        }
    }

    // Printing the occurance map
    for(let [key, value] of occuranceMap.entries()){
        console.log(key + " " + value);
    }
}

//Driver code
let arr=[10,5,10,15,10,5];
let size = arr.length;
countOccurance(arr,size);