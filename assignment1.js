var readlineSync = require('readline-sync');

var sumPoints = 0;
console.log('-----start test----')

// question 1
var questionOneAnswers = ['What is a gown?',
                            'Only one for Purim', 
                            'I have only white gowns in my closet' ,
                            'What is a closet'];

answerIndex1 = readlineSync.keyInSelect(questionOneAnswers, 'How many white gowns do you have in your closet?');

pointsAnswerOne = [2,3,4,1];

sumPoints = sumPoints + pointsAnswerOne[answerIndex1];

// question 2
var questionTwoAnswers = ['No, prefer not to share knowledge',
                      'Yes, I help anyone who needs help with anything',
                        'Yes, I\'m happy to help',
                        'No, there are practitioners for that'];

answerIndex2 = readlineSync.keyInSelect(questionTwoAnswers, 'Would you help a friend fix a code? ');

pointsAnswerTwo = [2,4,3,1];
sumPoints = sumPoints + pointsAnswerTwo[answerIndex2];

// question 3
var questionTreeAnswers = ['Generosity',
                      'Coolness',
                        'Loyalty',
                        'Cuteness'];

answerIndex3 = readlineSync.keyInSelect(questionTreeAnswers, 'Which word best describes you? ');

pointsAnswerTree = [4,1,3,2];
sumPoints = sumPoints + pointsAnswerTree[answerIndex3];


// question 4

var questionFourAnswers = ['Winter',
                      'Summer',
                        'Fall',
                        'Spring'];

answerIndex4 = readlineSync.keyInSelect(questionFourAnswers, 'What is your favorite season? ');

pointsAnswerFour = [1,4,2,3];
sumPoints = sumPoints + pointsAnswerFour[answerIndex4];

// question 5

var questionFiveAnswers = ['Bored',
                      'Happy',
                        'Upset',
                        'Normal'];

answerIndex5 = readlineSync.keyInSelect(questionFiveAnswers, 'How are you feeling right now? ');

pointsAnswerfive = [2,4,1,3];
sumPoints = sumPoints + pointsAnswerfive[answerIndex5];

// question 6

var questionSixAnswers = ['Just show me, damnit',
                      'Nope, I\'m a perfect angel',
                        'I don\'t think I need to be worried',
                        'No, I already know I\'m a demon'];

answerIndex6 = readlineSync.keyInSelect(questionSixAnswers, 'Lastly, are you scared of your results? ');

pointsAnswerSix = [2,4,3,1];
sumPoints = sumPoints + pointsAnswerSix[answerIndex6];


if (sumPoints > 18) {
    console.log('A guardian angel at the gates of heaven ! :) You will fulfill every host\'s dream - to welcome guests entering paradise');
} else {
    console.log('Angel of Death !  :\'(   You are dark and no doubt you will not be late to back up any soul');
}














