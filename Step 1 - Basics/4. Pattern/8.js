
    //      *
    //     * *
    //    * * *
    //   * * * *
    //  * * * * *


    function pattern(n){

        //outer loop
        for(let row = 1; row <= n; row++){
            // print space
            for(let col = 1; col <= n-row; col++){
                process.stdout.write(" ");
            }
            // print *
            for(let k = 1; k <= row; k++){
                process.stdout.write("*");
            }
            for(let l = 1; l < row; l++){
                process.stdout.write("*");
            }
            console.log();
        }
    }

    pattern(5);