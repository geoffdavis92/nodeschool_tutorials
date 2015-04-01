// Baby Steps [2/12] => learnyounode

// Use global `process` object for command-line args
// `process` has an `argv` property, which has an array
//    containing complete command line.

// example : console.log(process.argv);

// • Always start with an index of [2] when accessing 
//    the `process.argv` array.
// • `argv` returns string elements
// • Use `Number()` to pass string into number

var args = process.argv;
var sum = 0;
for(i=2;i<args.length;i++){
	sum += Number(args[i]);
}
console.log(sum);