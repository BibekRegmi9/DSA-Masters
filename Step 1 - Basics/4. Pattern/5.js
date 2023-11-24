// *
// * * 
// * * *
// * * * * 
// * * * * *
// * * * * 
// * * *
// * * 
// *

function pattern(n){
    for(let row = 1; row <= 2*n-1; row++){
        let totalColsInRow = row > n ? 2 * n - row: row;
        for(let col = 1; col <= totalColsInRow; col++){
            process.stdout.write("* ")
        }
        console.log();
    }
}

pattern(5);