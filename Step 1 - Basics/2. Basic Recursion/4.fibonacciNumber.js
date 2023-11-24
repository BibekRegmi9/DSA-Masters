function fibo(no){

    // base condition
    if(no < 2) {
        return no;
    }

    return fibo(no-1) + fibo(no-2);
}

var ans = fibo(4);
console.log(ans);