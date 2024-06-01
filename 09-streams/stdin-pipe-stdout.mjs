import { Transform } from 'stream';
import fs from 'fs';
import { clear } from 'console';

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCase = chunk.toString().toUpperCase();
        // console.log(upperCase);
        cb(null, upperCase);
    },
});

const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split('');
        console.log(arrayOfChars);
        const lastChar = arrayOfChars.pop();
        const reversed = arrayOfChars.reverse().concat(lastChar).join('');
        cb(null, reversed);
    },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // Pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stdout);
