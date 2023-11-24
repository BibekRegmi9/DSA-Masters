
    //          *
    //        * *
    //      * * *
    //    * * * *
    //  * * * * *

    function pattern(n){
        // outer loop
        for(let row = 1; row <= n; row++){
            // printing space
            for(let col = 1; col <= n-row; col++){
                process.stdout.write(" ");
            }
            // printing stars
            for(let k = 1; k <= row; k++){
                process.stdout.write("*");
            }
            console.log();
        }
    }

    pattern(5);