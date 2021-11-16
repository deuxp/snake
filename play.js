const { setupInput } = require('./input');
const { connect } = require('./client');


// ================================================
// THE CLIENT MODULE
// 1. the connect() function returns an object that
//    allows us to interact with the server [imported]

// THE INPUT MODULE
//    ** setting up the stdin **
// 2. the stdin object returned by setupInput() will
//    listen for keyboard input and react to it.
// 3. the function, handleUserInput() will determine the
//    behaviour of key presses
// ================================================

console.log('Connecting ... ...');


//|\ call the input module -> pass it the connection object, to be used in the global scope of the input module by reassigning it to a global variable declared as undefined from within said function.
// now that connection object can be used from the input module, which means that all of the connection object methods are available on that page and can be accessed by the behaviour of the stdin input evironment or listeners.
setupInput(connect());
