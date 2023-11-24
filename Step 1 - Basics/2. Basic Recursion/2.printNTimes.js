function print(num){
    if(num == 5){
        console.log(5);
        return;
    }

    console.log(num);
    print(num + 1);
}

print(1)


// To print my name N times using recursion
// function recursion(num){
//     let name = "Bibek";
//     if(num == 10){
//         console.log(name);
//         return;
//     }

//     console.log(name);
//     recursion(num+1);
// }

// recursion(1);