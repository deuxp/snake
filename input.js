let connection; // default undefined -> gets passed the connection from the function call on the other page and put in this global scope.. clever.

//// Object Listens for keyboard input ////
const setupInput = function(conn) {
  connection = conn; // the connection module passed here from the play.js file is reassigned tot he global scop of this file; ready to be used by any function here.. including the key event handler . wink wink
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //|\ register an event listener for stdin with the .on method
  // if there is a .on method that means that object is listening for a registered event.
  stdin.on('data', handleUserInput); // must be in our stdin object.. the function call defines the action taken once the event is registered.
  return stdin;
};

const handleUserInput = key => {
  // needs to check for ctrl+c
  if (key === '\u0003') {
    console.log('you exited with the exit key');
    process.exit();
  }
  // movement keys
  if (key === 'w') connection.write('Move: up');
  if (key === 'a') connection.write('Move: left');
  if (key === 's') connection.write('Move: down');
  if (key === 'd') connection.write('Move: right');
  // msg in a can
  if (key === 't') connection.write('Say: hadouken!');
  if (key === 'y') connection.write('Say: Ssssssss');
  if (key === 'u') connection.write('Say: sonic boom!');

};

module.exports = {
  setupInput,
  handleUserInput
};