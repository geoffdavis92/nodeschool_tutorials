// My First Async I/O [4/12] => learnyounode

// • Use `fs.readFile()` for asynchronus operation

var fs = require('fs');
var callback = function callback(err,data){
	if(err){
		console.log("ERROR " + err);
	} else{
		var buf = data;
		var str = buf.toString();
		var split = str.split('\n');

		console.log((split.length) - 1);
	}
};
fs.readFile(process.argv[2],callback);

/* OFFICIAL SOLUTION :: 

var fs = require('fs')
var file = process.argv[2]
    
fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/

