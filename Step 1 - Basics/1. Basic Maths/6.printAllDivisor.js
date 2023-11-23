function printAllDivisor(num){
    

    for(let i = 0; i <= num; i++){
        if(num % i == 0){
            console.log(i);
        }
    }

    console.log(" ");
}

printAllDivisor(36);