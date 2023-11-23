// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

// 1st Approach 
function countDigit(arr){
    let x = arr;
    let count = 0;

    while(x !== 0){
        x = Math.floor(x/10);
        count++;
    }

    return count;
    
}

ans = countDigit(12345);
console.log(ans);

// ---------------------------------------------------


// 2nd Approach
// function countDigit(n){
//     let x = n.toString();
//     return x.length;
// }

// console.log("Number of digit is " + countDigit(12345));