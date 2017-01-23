'use strict'

function mysum(...rest){
    var ret = 0;
    for (var x of rest){
        if (typeof x === 'number'){
            ret = ret + x;
        } else {
            throw 'Not a number';
        }


    }
    return ret;
}

console.log(mysum(1,10,3,4)); 