const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name?' ,name => {
    console.log(`Welcome ${name}`);
    readline.question('Enter your age? ', function(age){
        if(age < 16)
        console.log("you are not allowed to drive in Iowa");
        else
        console.log("You’re allowed to get a drivers license in Iowa");
        readline.close();
    });
   });

