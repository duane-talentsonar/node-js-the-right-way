// Node.js the Right Way
// Chapter 2 - read-simple.js
// Duane Murphy
// 2016-01-07

const fs = require('fs');
fs.readFile('target.txt', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

