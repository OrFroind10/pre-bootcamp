var readlineSync = require('readline-sync');

function combainArrays(array1, array2)
{
    for (let index = 0; index < array2.length; index++) {
        array1.push(array2[index]);
    } 

    return array1;
}

var array1 = ["Hello"];
var array2 = ["AppleSeeds","Bootcamp"];
var combineArrays = combainArrays(array1, array2);
console.log(combineArrays);