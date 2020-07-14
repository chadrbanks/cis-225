const fs = require("fs");

let moment = require("moment");

function callback(err, data) {
  if (err) throw err;
  console.log("Data:", data);

  let game_data = JSON.parse(data);
  console.log("game_data:", game_data);

  console.log(`You have made ${game_data.current_attempts} guess attempts!`);

  game_data.num_of_wins = 1;

  let save_data = JSON.stringify(game_data);

  fs.writeFile("game.json", save_data, function(){});
}

try {
  fs.readFile("game.json", 'utf8', callback);
} catch (err) {
  console.error(err);
}
