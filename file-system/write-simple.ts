// Node.js the Right Way
// Chapter 2 - write-simple.ts
// Duane Murphy
// 2016-01-07

import fs = require('fs');

fs.writeFile('target.txt', 'For the many, one',
  (err:Error) => {
    if (err) {
      throw err;
    }
    console.log("File saved!");
  });

