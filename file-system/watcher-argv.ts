// Node.js the Right Way
// Chapter 2 - watcher-argv.ts
// Duane Murphy
// 2016-01-04

import fs = require('fs');

const filename: string = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, function(event: string, nameOfTheFile: string) {
  console.log("File " + nameOfTheFile + " just changed!");
});

