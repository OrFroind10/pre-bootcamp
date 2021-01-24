var readlineSync = require('readline-sync');
// user choose the number and get prime numbers between 1 to the number

var userNumber = readlineSync.question('please choose a number');

while(isNaN(userNumber) || userNumber < 1) 

{
    userNumber = readlineSync.question('please choose a POSITIVE NUMBER \ \5 ');
}



function isPrime(num) {
    if(num == 1 || num ==2)
        return false;
    
   for(var i=2; i <num; i++)
   {    
        if(num % i == 0){
            return false;
        }
   }

   return true;
}

for(var i=1; i <= userNumber; i++)
{
    if(isPrime(i))
    {
        console.log(i); 
    } 
}
