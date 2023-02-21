const readline = require('readline').createInterface({  //ref. from javapoint.com
    input: process.stdin,
    output: process.stdout
  });

  function readFromLine(){
    readline.question('What is your name?', (ans)=>{console.log("Hello",ans);})
  }

  readFromLine()