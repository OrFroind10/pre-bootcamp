var readlineSync = require('readline-sync');

var userNumber = readlineSync.question('Please enter the numbers to calculate ');

function GenerateRandonNumber(num) {
    num = Number(num);
    var ransdoms = [];

    for(var i=0; i <num; i++)   
    {
        ransdoms.push(Math.floor(Math.random() * 50 + 1));
    } 
    var min = 50;
    var max = 0;

    for(var i=0; i <num; i++)   
    {
        if(ransdoms[i] < min)
        {
            min= ransdoms[i];
        }
        if(ransdoms[i] > max)
        {
            max= ransdoms[i];
        }
    } 
    
    console.log("min is\ \ "+min);
    console.log("max is\ \ "+max);
  }

  GenerateRandonNumber(4);




  