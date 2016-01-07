// Node.js the Right Way
// Chapter 2 - watcher.ts
// Duane Murphy
// 2016-01-04

import fs = require('fs');

fs.watch('target.txt', function(event: string, filename: string) {
  console.log("File 'target.txt' just changed!");
})

console.log("Now watching target.txt for changes ...");
