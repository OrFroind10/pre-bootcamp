var readlineSync = require('readline-sync');


// please choose a number larger than 10

var userNumber = readlineSync.question('please choose a number larger than 10 \ \  ');


while(isNaN(userNumber) || userNumber <= 10)
{
    userNumber = readlineSync.question('please choose a NUMBER LARGER than 10 \ \5  ');
}

console.log ('THANK YOU VERY VERY MUCH');


