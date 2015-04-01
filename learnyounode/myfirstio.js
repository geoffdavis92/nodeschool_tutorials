// My First I/O [3/12] => learnyounode

// • Use `fs` module to perform a filesystem operation

var fs = require('fs');

// • Synchronus filesystem methods end with 'Sync'
// • Read a file => fs.readFileSync('/path/to/file')

// for `LEARNYOUNODE VERIFY myfirstio.js` var buf = fs.readFileSync(process.argv[2]);
// for `node myfirstio.js` 
var buf = fs.readFileSync('helloworld.js');

// Returns a `Buffer` object
// • Buffer objects rep arbitrary arrays of data
// • Convert to strings by calling `toString()` method

var str = buf.toString();

// console.log(str);

var split = str.split('\n');

//split = Number(str.split('\n'));

console.log((split.length) - 1);
