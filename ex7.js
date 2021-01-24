var readlineSync = require('readline-sync');

// Factorial Challenge

var userNumber = readlineSync.question('please choose a positive number ');

while(isNaN(userNumber) || userNumber < 0) 

{
    userNumber = readlineSync.question('please choose a POSITIVE NUMBER\ \5 ');
}

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = userNumber;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);
