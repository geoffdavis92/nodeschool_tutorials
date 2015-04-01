// Filtered LS [5/13] => learnyounode

var fs = require('fs');
var file = process.argv[2];
file = file.toString();
var listArray;
// '../learnyounode'
var dir = fs.readdir(file,function callback(err,list){
	if(err){
		console.log(err);
	} else{
		listArray = list;
		var arg = process.argv[3];

		for(i=0;i<listArray.length;i++){
			var el = listArray[i];
			var search = el.search('.md')
			if(search !== -1){
				console.log(el);
			}
		}
	}
})

/* OFFICIAL SOLUTION ::

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

*/
