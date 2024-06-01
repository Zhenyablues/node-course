// How to run program: node createfile.mjs <filename> <linesQty>
import fs, { WriteStream } from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

const wrireStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());

for (let i = 1; i <= linesQty; i++) {
    wrireStream.write(
        `This is a line number ${i} in the automatically generate file\n`
    );
}

console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

wrireStream.end(() => {
    console.log(`Automatically generate file ${fileName} was created!`);
});
