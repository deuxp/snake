/**
 ================================================
 Establishing a connection:
 ================================================
 1. Use Node [net] library with the [createConnnection] method --> object called "conn"
 2. the conn object that Node returned represeents the connection with the server
 3. now use the methods of the "conn" object to interact with the server
 */
 
const net = require('net');
const { IP, PORT, NAME } = require('./constants');
//// establish a connectwith the game server ////

//// create the connection in a function ////
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  //// Guard: interpret incoming data as test ////
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log('Gottfried, Server said: ', data);
  });

  conn.on('connect', () => {
    console.log(`TCP: connection established`);
    conn.write(NAME); // <-- this is sent as soon as the connection is established
  });

  return conn;
};
module.exports = {
  connect,
};
