var prompt = require("prompt-sync")();

let score = 0;
let isRunning = true;

do {

  var user_input = prompt("Select an option:");

  if(user_input === 'exit')
  {
    isRunning = false;
  }
  else if(user_input === 'play')
  {
    score++;
    console.log('Your score is:', score );
  }

} while (isRunning);

console.log('Thank you!');