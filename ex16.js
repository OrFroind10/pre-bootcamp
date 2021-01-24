var readlineSync = require('readline-sync');


function reversesArray(array){
    for (let index = 0; index < array.length / 2; index++) {
        var element1 = array[index] ;
        var element2 = array[array.length - 1 - index];
        array[index]= element2;
        array[array.length - 1 - index] = element1
    }
    return array;
}
var array = [];
var userText = readlineSync.question('please add numbers or write exit to exit\n');

while(userText != "exit")
{
    array.push(userText);
    userText = readlineSync.question('please add number or exit\n');
}

console.log(reversesArray(array));