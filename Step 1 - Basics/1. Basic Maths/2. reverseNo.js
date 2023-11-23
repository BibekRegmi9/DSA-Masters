// Approach 1
function reverse(num){
    let x = num;
    result  = 0;

    while(x > 0){
        rightno = x%10;

        result = result * 10 + rightno;

        x = Math.floor(x/10);
    }

    return result;
}


console.log("Reverse no is " + reverse(12345));


// Leetcode with test cases
// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {

    

//     let isNegative = x < 0;
//     x = Math.abs(x); // Take the absolute value for processing
//     let result = 0;

//     while (x > 0) {
//         let rightDigit = x % 10;

//         result = result * 10 + rightDigit;

//         x = Math.floor(x / 10);
//     }

//     // If the input number was negative, make the result negative as well
//     if (isNegative) {
//         result = -result;
//     }
//     if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
//         return 0; // Return 0 for out-of-range inputs
//     }

//     return result;
// };



