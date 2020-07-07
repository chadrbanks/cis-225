const fs = require("fs");

let moment = require("moment");
const { argv } = require("yargs");

function callback(err) {
  if (err) throw err;
  console.log("Saved!");
};

try {
  //console.log("name:", argv.name);

  let attendee = moment().format("YYYY-MM-DD") + `: ${argv.name}` + "\n";

  fs.appendFile("attendance.txt", attendee, callback);

  // throw 'I did a bad thing!';
  // throw new Error("I just made this error object!");
} catch (err) {
  console.error(err);
}
