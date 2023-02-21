const readline = require('readline').createInterface({  //ref. from javapoint.com
    input: process.stdin,
    output: process.stdout
  });

  function readEnvVariable(){
    console.log(process.env);
  }
  readEnvVariable();