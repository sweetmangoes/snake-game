const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  
  conn.on('connect', (connect) => {
    conn.write(`Name: SNK`);
    conn.write(`Say:___`); 
    console.log(`Successfully connected to game server`);
  });
  
  conn.on('data', (data) => {
    console.log(`You're dead since you are idled`); 
  })

  return conn;
};

console.log("Connecting ...");

module.exports = {connect}; 


