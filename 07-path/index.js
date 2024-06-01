const path = require('node:path');

const filePath = '/Users/bogdan/Descktop/node/index.js';
const textFilePath = '/Users/bigdan/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directiryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // return index.js
console.log(path.basename(directiryPath)); // return subfolder

console.log(path.dirname(filePath)); // return /Users/bogdan/Descktop/node
console.log(path.dirname(directiryPath)); // return ./node

console.log(path.resolve(relativePath)); // return d:\урокиПрограмування\Node\node-course\node\movie.mov

console.log(path.extname(textFilePath)); // return .txt
console.log(path.extname(directiryPath)); // return ''

console.log(path.parse(filePath));
// return {
//     root: '/',
//     dir: '/Users/bogdan/Descktop/node',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

console.log(path.parse(filePath).ext); // return .js

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)); // return \Users\bogdan\Descktop\node\renamed-index.mjs
