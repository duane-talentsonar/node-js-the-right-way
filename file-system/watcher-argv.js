// Node.js the Right Way
// Chapter 2 - watcher-argv.js
// Duane Murphy
// 2016-01-04
var fs = require('fs');
var process = require('process');
var String = process.argv[2];
if (!filename) {
    throw Error("A file to watch must be specified!");
}
fs.watch(filename, function () {
    console.log("File " + filename + " just changed!");
});
