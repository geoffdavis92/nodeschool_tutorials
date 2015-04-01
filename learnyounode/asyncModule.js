// Module for Make it Modular [modular.js]

var fs = require('fs');
var path = require('path');

module.exports = function asyncModule(dir, ext, callback){
	//var directory = "../learnyounode";
	//directory = directory.toString();
	fs.readdir(process.argv[2], function (err, list) {
		if (err)
			return callback(err) // => null ?
		list.forEach(function (file) {
  			if (path.extname(file) === '.' + process.argv[3]){
    			console.log(file);
    		}
  		});
	});
};

// module.exports = function asyncModule(dir, ext, callback){
// 	//var directory = "../learnyounode";
// 	//directory = directory.toString();
// 	function read(callback){
// 		fs.readdir(process.argv[2], function (err, list) {
// 			if (err)
// 				return callback(err) // => null ?
// 			list.forEach(function (file) {
// 	  			if (path.extname(file) === '.' + process.argv[3]){
// 	    			callback()
// 	    		}
// 	  		});
// 		});
// 	}
// 	function logIt(){
// 		console.log(file);
// 	}
// 	read(logIt)
// };



/*


module.exports = function asyncModule(err, data, callback){
	fs.readdir(process.argv[2], function(err,data){
		if(err)
			return callback(err)
		list.forEach(function (file) {
  			if (path.extname(file) === '.' + process.argv[3]){
    			console.log(file);
    		}
  		});
		callback(null, data);
	})
}
*/