var readlineSync = require('readline-sync');

/*1
i saved an array full of asterisk which saves the revealed letters which the user revealed
for each new char I gets I check:
a.	The input is valid >> I used a regex to match only letters.
b.	If the input is not valid :
    Ask for a new input
c.  If the input is valid :
    Lower case the given input and check:
d.	the char is indeed in the original word.
e.	If In the reviled char array the char in the index of the char guess is asterisk which means I didn’t revealed lt allready .
    I replaces all the asterisk in the reviled array in the char I got from the user.
/*/



var figlet = require('figlet');
 
figlet.text('HANG \ \ MAN', {
    font: 'Blocks',
    width: 180,
}, function(err, data) {
    console.log(data);
    
// Create an array of words
var words = [
    "technology",
    "programmer",
    "career",
    "promotion",
    "microsoft",
    "google",
    "wix",
    "appleseeds",
    "bootcamp",
    "fullstack",
    ];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

 // max guess
var numberOfRounds = 10

 // Set up the answer array
 var answerArray = [];
    
 for (var i = 0; i < word.length; i++) {
     answerArray[i] = "*";
 }
 var remainingLetters = word.length;

for (let index = 0; index < numberOfRounds && remainingLetters != 0  ; index++) {
    console.log("you have " + (numberOfRounds-index) + " guesses \nthe word is:");
    // Show the player their progress
    console.log(answerArray.join(" "));

   // Get a guess from the player
   var guess = readlineSync.question("Guess a letter or the whole word\n");
   guess = guess.toLowerCase();

   var letters = /^[A-Za-z]+$/;

   while(!guess.match(letters))
   {
        console.log("invalid input- Try entering one LETTER or the WORD guessed in full")
        // Get a guess from the player
        var guess = readlineSync.question("Guess a letter or the whole word\n");
   }
    if(guess.length > 1){ 
       if(guess === word)
       {
            remainingLetters = 0 ;
       }

    }else{
        
var found = false;

        for (var j = 0; j < word.length; j++) {

            if  (word[j] === guess && answerArray[j] == '*') {
                if(found == false)
                {
                    found = true;
                    index--;
                }

                answerArray[j] = guess;
                remainingLetters--;
        
            }
    }
  
}

}

if (remainingLetters == 0){
    console.log( "The answer is " + word + "!!!\nTo be honest, when we started the game I wasn't sure we could win this but you certainly did it and did it well!");
} 
else 
{
    console.log("The answer is " + word + "!!!\nTo be honest, when we started the game I wasn’t sure we could win it and I was right.");
}
});