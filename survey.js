const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = "";
 

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
    result += answer1 + ' loves ' + answer2 + ' and listening to ' + answer3 + ' while ' + answer2 + ', ' + answer4 + ' is her favourite meal of the day and likes to have '+ answer5 + ' for that, prefers ' + answer6 + ' over any other sport, and is amazing at ' + answer7 + '.';
    console.log(result);
    rl.close();

            });
  
          });
        });
      });  
    });
  });
});