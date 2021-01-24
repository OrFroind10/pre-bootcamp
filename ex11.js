var readlineSync = require('readline-sync');

// Palindrome

var userText = readlineSync.question('please choose a words or numbers ');

function palindrome(str) {

    var firstIndex = 0;
    var lastIndex = str.length - 1;

    for(var i=0; i < str.length; i++)
    {  
        
        if (str[firstIndex] != str[lastIndex])
        {
            return false;
        }

         firstIndex++;
         lastIndex--;
    }

    return true;
  }

if (palindrome(userText) == true)
{
console.log("is pallindrome  ☺	");
}
else
{
    console.log("is not pallindrome");
}
