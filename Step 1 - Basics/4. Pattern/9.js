    // *********
    //  *******
    //   *****
    //    ***
    //     *

    function pattern(n){
        // outer loop
        for(let i = 1; i <= n; i++){
            //space
            for(let j = 1; j <= i; j++){
                process.stdout.write(" ");
            }
            // print star
            for(let k = 1; k <= n-i; k++){
                process.stdout.write("*");
            }
            for(let l = 1; l < n-i; l++){
                process.stdout.write("*");
            }
            console.log();
        }
    }

    pattern(5);