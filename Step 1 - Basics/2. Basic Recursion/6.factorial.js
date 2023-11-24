function factorial(num){
    //base condition
    if(num < 1){
        return 1;
    }

    return num * factorial(num-1);
}

var result = factorial(4);
console.log(result);