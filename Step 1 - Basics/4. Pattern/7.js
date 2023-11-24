
    //  * * * * *
    //    * * * *
    //      * * *
    //        * *
    //          *

    function pattern(n){

        // outer loop
        for(let row = 1; row <= n; row++){
            // printing space
            for(let col = 1; col <= row; col++){
                process.stdout.write(" ");
            }
            // printing star
            for( let k = 1; k <= n-row; k++){
                process.stdout.write("*");
            }
            console.log();
        }
    }

    pattern(5);