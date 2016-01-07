// Node.js the Right Way
// Chapter 2 - watcher-spawn.ts
// Duane Murphy
// 2016-01-04

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
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");

