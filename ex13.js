var readlineSync = require('readline-sync');

var userText = readlineSync.question('please write a words ');

const longestWord = (str) => {
    const strArray = str.split(' ');
    var maxLen = 0;
    var maxStr;

    for(var i=0; i<strArray.length; i++)
    {
        if(/^[a-zA-Z]+$/.test(strArray[i]) && 
            strArray[i].length > maxLen )
        {
            maxLen = strArray[i].length;
            maxStr = strArray[i];
        }
        
    }
    return maxStr;
}

console.log(longestWord(userText));