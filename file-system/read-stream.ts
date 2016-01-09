// Node.js the Right Way
// Chapter 2 - read-stream.js
// Duane Murphy
// 2016-01-08

import fs = require('fs');
import {ReadStream} from "fs";

const stream:ReadStream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk:Buffer) => {
  process.stdout.write(chunk);
});

stream.on('error', (err:Error) => {
  process.stderr.write("ERROR: " + err.message + "\n");
});
