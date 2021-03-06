const { KEYMAP, LASTKEY} = require('./constants');

let connection; // default undefined -> gets passed the connection object from the setupInput() call from the play.js file --> assigned to variable in the global scope.

// Returns an object that listens for keyboard input
const setupInput = function(conn) {
  connection = conn; // the connection module passed here from the play.js file is reassigned tot he global scop of this file; ready to be used by any function here.. including the key event handler.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // register an event listener for stdin with the `.on` method
  // if there is a `.on` method that means that object is listening for a registered event.
  stdin.on('data', handleUserInput); // STREAMING IN: must be in our stdin object.. the function call defines the action taken once the event is registered.
  return stdin;
};

let backwards;
let intID;
const handleUserInput = key => {

  // Exit: check for ctrl+c
  if (key === '\u0003') {
    process.exit();
  }

  // FIXME: Guards against backwards keypress, however spamming the opposite direction stops the snake.
  if (key !== backwards) {
    
    clearInterval(intID);
    
    /// Movement keys: w,a,s,d /// Canned message: t,y,u ///
    if (KEYMAP[key]) {

      intID = setInterval(() => {
        connection.write(KEYMAP[key]);
      }, 50);
    }
  }
  backwards = LASTKEY[key];
};


module.exports = {
  setupInput,
  handleUserInput
};
