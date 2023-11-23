function checkPalindrome(num){
    
    let x = num.toString();

    x = x.split("").reverse().join("");

    if(x == num){
        return true;
    }
    return false;
    
}


console.log(checkPalindrome(121));


