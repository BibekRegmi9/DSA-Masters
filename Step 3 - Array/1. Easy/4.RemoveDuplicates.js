// Method 1
function removeDuplicates(arr){
    const uniqueArr = [];

    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

// const arr = [2, 3, 3, 4, 6 ,6, 0, 0, 9, 1, 1];
// const ans = removeDuplicates(arr);
// console.log(ans);



//Method 2

function removeDuplicates2(arr){
    return Array.from(new Set(arr));
}

let arr = [2, 3, 3, 4, 6 ,6, 0, 0, 9, 1, 1];
console.log(removeDuplicates2(arr));