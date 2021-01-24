var readlineSync = require('readline-sync');

var userText = readlineSync.question('please write a Text ');

userText = userText.replace (/a/g, 'A') ;
userText = userText.replace (/e/g, 'E') ;
userText = userText.replace (/i/g, 'I') ;
userText = userText.replace (/o/g, 'O') ;
userText = userText.replace (/u/g, 'U') ;
userText = userText.replace (/y/g, 'Y') ;


userText = userText.replace (/B/, 'prOfEssIOnAl B') ;


console.log(userText);

var questionOneAnswers = ['I am very happy',
                            'I am very happy', 
                            'I am very happy' ,
                            'I am very happy'];

answerIndex1 = readlineSync.keyInSelect(questionOneAnswers, 'did you happy from what you see?');


