function print(n, currentValue){

    if(currentValue > 10 ){
        return;
    }

    print(n, currentValue + 1);
    console.log(currentValue);
}

print(10, 1);