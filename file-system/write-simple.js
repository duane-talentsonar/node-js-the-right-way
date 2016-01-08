// Node.js the Right Way
// Chapter 2 - write-simple.js
// Duane Murphy
// 2016-01-07

const fs = require('fs');

fs.writeFile('target.txt', 'For the many, one',
  function(err) {
    if (err) {
      throw err;
    }
    console.log("File saved!");
  });

