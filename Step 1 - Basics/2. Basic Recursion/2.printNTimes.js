function print(n, currentValue){
    
    if(currentValue > 10){
        
        return;
    }

    console.log(currentValue);
    print( n , currentValue + 1)
}

print(10, 1);

