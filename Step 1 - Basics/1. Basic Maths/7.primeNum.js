

function primeNumber(num){
    
    if(num <= 1){
        console.log("1 is neither prime nor composite number");
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
        
    }
    return true;
}

console.log(primeNumber(10));