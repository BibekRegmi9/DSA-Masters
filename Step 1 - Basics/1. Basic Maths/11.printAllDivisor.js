function printAllDivisors(num){
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            console.log(i + "");
        }
    }
    console.log("\n");
}

var result = printAllDivisors(36)
console.log(result);