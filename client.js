const net = require('net');
//// establish a connectwith the game server ////

//// create the connection in a function ////
const connect = function () {
  conn = net.createConnection({
    host: 'localhost',
    port: 50541
  })
  
  //// Guard: interpret incoming data as test ////
  conn.setEncoding('utf8')
  conn.on('data', data => {
    console.log('Server said: ', data);
  })
  //// returns the connection as an object ////
  return conn; 
}

module.exports = {
  connect,
}


// ================================================
// Establishing a connection:
// ================================================
// 1. Use Node [net] library with the [createConnnection] method --> object called "conn"
// 2. th conn object that Node returned represeents the connection with the server
// 3. now use the methods of the "conn" object to interact with the server 