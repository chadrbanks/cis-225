



module.exports = (function () {
  let moment = require("moment");
  //import generator from "./generator";
  let generator = require('./generator');
  require('./execute');
  console.log("generator:", generator);
  generator.sayHi();
})();

// var x = 12;
// let y = 12;
// const z = 12;

// x = y = z * 2;

// function myFunc(){
//     let a = 13;
// }

// console.log('Hello Main!');
// console.log( 'The year is ' + moment().format('YYYY')  );
// console.log( 'The month is ' + moment().format('MM')  );
// console.log( 'The day is ' + moment().format('DD')  );
