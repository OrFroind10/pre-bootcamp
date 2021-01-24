var readlineSync = require('readline-sync');


    // set the maximum number of tries
    var maximumTries = 10;

    // create an array of words
    var words =["java","monkey","amazing","pancake"];

    // pick a random word
    var word = words[Math.floor(Math.random() * words.length)];

    // set up the answer array
    var answerArray=[];
    for(var i=0; i< word.length; i++){
        answerArray[i]="_";
    }
    var remainingLetters=word.length;

    // this will hold all the letters tried
    var guessAll="";

    // The game loop
    while(remainingLetters >= 0 && guessAll.length < maximumTries) 

        // show the player their progress
        console.log(answerArray.join(" "));

        // Get a guess from the player
        var guess = console.log("guess a letter, or click cancel to stop playing.");

        // add guesses to an answerArray
        guessAll += guess;

      
            //update the game state with the guess
            for(var j=0; j<word.length; j++){
                if(word[j] === guessLower){
                    answerArray[j] = guessLower;
                    remainingLetters--;
                }
            }
    
    
