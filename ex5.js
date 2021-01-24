var readlineSync = require('readline-sync');

// Print odd numbers from 1 to 100

console.log(Array.from({ length: 50 }, (e, i) => (i * 2) + 1).join(' '))

// Now have some fun
var userNumber = readlineSync.question('May I have your lucky number? (1-9) ');
switch (Number(userNumber)) {
    case 1:
        console.log('Great choice! You won! Congratulations!');
        break;
    case 3:
        console.log('Great choice! You won! Congratulations!');
        break;
    case 5:
        console.log('You lost the game but don\'t get mad !! Choose a secret surprise and your day is going to get better!');
        break;
    case 7:
        console.log('Great choice! You won! Congratulations!');
        break;
    case 9:
        console.log('You lost the game but don\'t get mad !! Choose a secret surprise and your day is going to get better!');
        break;
    default: console.log('That\'s an error But you will get a chance to get a surprise :))))')
}

 // Everyone gets a chance to win

var questionOneAnswers = ['I am surprise number one',
                            'I\'m surprise number two', 
                            'A very, very special secret surprise' ,
                            'I\'m surprise number four'];

answerIndex1 = readlineSync.keyInSelect(questionOneAnswers, 'Take your secret gift from the list of surprises');


// The scam is revealed
if (answerIndex1 === 2) {
    console.log('You did not win! But you were really close. Next time maybe it will be yours :)');
} else {
    console.log('You did not win! Stay in Touch!');
}