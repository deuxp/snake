//// Object Listens for keyboard input ////
const setupInput = function() {
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
  // define what happens when a certain input is detected

}

module.exports = {
  setupInput,
  handleUserInput
}