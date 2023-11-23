function reverseNumber(no){
    let result = 0;
    while(no > 0){
        let rightNo = no % 10;
        result = result * 10 + rightNo;
        no = Math.floor(no/10);
    }
    return result;
}

function isPalindrome(num){
    let x = num;
    let y = reverseNumber(num);

    if(x == y){
        return true;
    }
    return false;
}

console.log(isPalindrome(12321));


