function sum(num){
    // base condition
    if(num < 1){
        return 0;
    }
    
    return num + sum(num-1);

}


var result = sum(3);
console.log(result);