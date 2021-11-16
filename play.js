const { setupInput } = require('./input')
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
//|\ call the connection module 
connect();

//|\ call the input module
setupInput();
