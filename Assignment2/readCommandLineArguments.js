const readline = require('readline').createInterface({   //ref. from javapoint.com
    input: process.stdin,
    output: process.stdout
  });

  

function readCommandLineArguments(){
    console.log("Hello",process.argv[2]);
}
readCommandLineArguments()
  module.exports={readCommandLineArguments}