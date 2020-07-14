const fs = require("fs");

let moment = require("moment");
const { argv } = require("yargs");

function callback(err) {
  if (err) throw err;
  console.log("Saved!");
};

try {

  let attendee = moment().format("YYYY-MM-DD") + `: ${argv.name}` + "\n";

  fs.appendFile("attendance.txt", attendee, callback);
  
} catch (err) {
  console.error(err);
}
