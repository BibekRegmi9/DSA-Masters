function isArmstrong(num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        num = Math.floor(num / 10); // Use Math.floor() for integer division
        sum = sum + rem * rem * rem;
    }

    if (sum == original) {
        return true;
    }
    return false;
}

console.log(isArmstrong(153));
