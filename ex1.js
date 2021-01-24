var readlineSync = require('readline-sync');

//ask the user for the name and print
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
