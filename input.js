const { KEYMAP } = require('./constants');

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
  stdin.on('data', handleUserInput); // STREAMING IN: must be in our stdin object.. the function call defines the action taken once the event is registered.
  return stdin;
};

const handleUserInput = key => {
  // Exit: check for ctrl+c
  if (key === '\u0003') {
    process.exit();
  }
  /// Movement keys: w,a,s,d /// Canned message: t,y,u ///
  /// Guard: against random key press crashing the game ///
  if (KEYMAP[key]) {
    connection.write(KEYMAP[key]);
  }
};


module.exports = {
  setupInput,
  handleUserInput
};