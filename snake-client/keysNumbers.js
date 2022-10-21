const { exit } = require('process');
const {connect} = require('./client');

// console.log(connect); 

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

let stdin = setupInput(); 

let play = connect(); 

let move = null; 

const handleUserInput = function (key) {
  if (key.toString().length === 3) {
    move = String(key.toString().charCodeAt(0)); 
    console.log(move);

  //   if (move == 67) {
  //     play.write('Move: right')
  //   } else if (move == 68) {
  //     play.write('Move: left')
  //   } else if (move == 66) {
  //     play.write('Move: down')
  //   } else if (move == 65) {
  //     play.write('Move: up')
  //   } 
  // } else {
  //   move = String(key.toString().charCodeAt(0));
  //   if (move == 3) {
  //     exit()
  //   }
  // }

};

console.log("Connecting ...");
connect();

setupInput();