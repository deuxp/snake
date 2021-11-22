const IP = 'localhost';
const PORT = 50541;
const NAME = 'Name: RAT'; // max 3 characters

const KEYMAP = {

  // movement keys
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  
  // canned messages
  t: 'Say: hadouken!',
  y: 'Say: Ssssssss',
  u: 'Say: sonic boom!',

};


const LASTKEY = {

  // last key CONST is bound to its 180 degree counterpart and checked before movement, since only 90 degree turns are allowed.
  w: 's',
  a: 'd',
  s: 'w',
  d: 'a'
  
};


module.exports = {
  IP,
  PORT,
  NAME,
  KEYMAP,
  LASTKEY,
};
