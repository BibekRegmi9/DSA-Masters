
// * * * *
// * * * *
// * * * *
// * * * *

function pattern(n){
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= n; col++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

pattern(5);