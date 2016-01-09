// Node.js the Right Way
// Chapter 2 - read-stream.js
// Duane Murphy
// 2016-01-08

const fs = require('fs');
const stream = fs.createReadStream(process.argv[2]);

stream.on('data', function(chunk) {
  process.stdout.write(chunk);
});

stream.on('error', function(err) {
  process.stderr.write("ERROR: " + err.message + "\n");
});
