var readlineSync = require('readline-sync');

// combain two numbers to 10
function SumTen(p1, p2) {
    if (Number(p1) + Number(p2) == 10) {
        console.log('makes 10');
    } else {
        console.log('nope');
    }
}

// get input from user
var oneInput = readlineSync.question('please enter a number');
var twoInput = readlineSync.question('please enter a number');
SumTen(oneInput, twoInput);

