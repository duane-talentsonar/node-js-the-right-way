// Node.js the Right Way
// Chapter 2 - read-simple.ts
// Duane Murphy
// 2016-01-07

import fs = require('fs');

fs.readFile('target.txt', (err: Error, data: Buffer) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

