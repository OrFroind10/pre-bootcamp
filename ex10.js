var readlineSync = require('readline-sync');

// replace every space with a *

var userWords = readlineSync.question('please choose a words ');

userWords = userWords.replace (/ /g, '*') ;

console.log(userWords);

