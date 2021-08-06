const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   
 function getNumber(sum=0){
    readline.question('Enter number?', number => {      
        if(number === "stop"){
            console.log(`the sum of all numbers is ${sum}`);
            readline.close();
        }else{
            getNumber(parseInt(number)+sum);
        }       
    }); 
 }
 getNumber();
 
 
