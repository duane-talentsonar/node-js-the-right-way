// Node.js the Right Way
// Chapter 2 - watcher-spawn-parse.ts
// Duane Murphy
// 2016-01-07

"use strict";

import fs = require('fs');
import child_process = require('child_process');
import ChildProcess = child_process.ChildProcess;
type Spawn = typeof child_process.spawn;

const spawn: Spawn = child_process.spawn;
const filename: string = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, function(event: string, filename: string) {
  let ls: ChildProcess = spawn('ls', ['-lh', filename]);
  let output: string = '';

  ls.stdout.on('data', function(chunk: Buffer) {
    output += chunk.toString();
  });

  ls.on('close', function() {
    let parts: string[] = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  });

});

console.log("Now watching " + filename + " for changes...");

