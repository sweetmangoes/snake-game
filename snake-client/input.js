const { exit } = require('process');

const setupInput = function (play) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (e) => handleUserInput(e, play));
  return stdin;
};

let move = null; 

const handleUserInput = function (key, play) {
  move = String(key.toString().charCodeAt(0)); 
  if (move == 100) {
    play.write('Move: right');
  } else if (move == 97) {
    play.write('Move: left');
  } else if (move == 115) {
    play.write('Move: down');
  } else if (move == 119) {
    play.write('Move: up');
  } else if (move == 3) {
    exit();
  }
};

module.exports = {
  setupInput,
};