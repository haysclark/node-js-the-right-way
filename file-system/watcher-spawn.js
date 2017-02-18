'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;

const filename = process.argv[2];

if (!filename) {
	throw new Error('A file to watch must be specified!');
}
// fs.watch() results in two change callbacks
// http://stackoverflow.com/questions/12978924/fs-watch-fired-twice-when-i-change-the-watched-file
fs.watchFile(filename, () => {
	let ls = spawn('ls', ['-lh', filename]);
	ls.stdout.pipe(process.stdout);
});
console.log('Now watching ' + filename + ' for changes...');
