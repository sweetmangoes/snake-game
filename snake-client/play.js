const { exit } = require('process');
const {connect} = require('./client');
const {setupInput} = require('./input');
// console.log(connect); 

let play = connect(); 

setupInput(play); 

// cd lighthouse/snake/snake-client 