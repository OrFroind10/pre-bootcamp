var readlineSync = require('readline-sync');

// 7 boom
for(var i=1; i <= 100; i++)
{
    if (i % 7 == 0 || i / 10 == 7 || i % 10 == 7 || i.toString().includes('7'))
 {
        console.log('BOOM,');
    }
    else {
        console.log(i + ',' )
    }
}
