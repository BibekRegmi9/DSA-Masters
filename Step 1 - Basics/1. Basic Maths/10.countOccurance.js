function countNum(num){
    let count = 0;
    while (num > 0){
        let rem = num % 10;
        if(rem == 3){
            count ++;
        }
        num = Math.floor(num/10);
    }
    return count;
}

let ans = countNum(1233);
console.log(ans);