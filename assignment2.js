var readlineSync = require('readline-sync');

function GetBet(currAmout){
    var bet = readlineSync.question('please enter your bet between 1- ' +currAmout + "\n");
    if(!isNaN(bet) && bet >= 1 && bet <= userAmount)
    {
        return Number(bet);
    }
    else{
        return -1;
    }
  }

 
  function DrawCard()
  {
      var userRandom = Math.floor(Math.random() * 12 + 1);
      var computerRandom = Math.floor(Math.random() * 12 + 1);
        console.log("your card is " + userRandom + " and my card is " + computerRandom + "\n");
      if(userRandom > computerRandom) {
          return "user";
      }
      else{
        return "computer";
      }
  }
console.log('Ⓦ Ⓔ Ⓛ Ⓒ Ⓞ Ⓜ Ⓔ  Ⓣ Ⓞ  Ⓦ Ⓐ Ⓡ\n♦ ♠ ♥ ♣ ♢ ♤ ♡ ♧ ✦ ♔ ♕ ♚ ♛ ');
var userAmount  = 50;
var userName = readlineSync.question('please enter your name : '+ "\n");


var exitGame = false;

while(exitGame == false) 
{
    var bet = GetBet(userAmount);

    if(bet == -1)
    {
        console.log("Invalid bet bye bye");
        exitGame = true;
    }
    else{
        var winner = DrawCard();
        if (winner == "user") 
        {
            userAmount = userAmount + bet;
            console.log("you won and get your " + bet + "\ \ dollars" + " now you have\ \ " + userAmount + "\ \dollars \n");
        }
        else {
            userAmount = userAmount - bet;
            console.log("you loser and lose your " + bet + "\ \ dollars" + " now you have\ \ " + userAmount + "\ \dollars \n");
        }

        if (userAmount == 0) 
        {
            console.log("you lost and you are broke.. bye bye \n");
            exitGame = true;
        }
        else{
            var userChoice = readlineSync.question("What would you like to do ?\n1) play another round ?\n2) leave with my money ?\n");

            if (userChoice == "2") 
            {
                exitGame = true;
            }
        }
  
    }
}





